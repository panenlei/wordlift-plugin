(function() {
  var $;

  $ = jQuery;

  angular.module("wordlift.disambiguate", []).controller("DisambiguationsController", function($scope, $http, $timeout) {
    var postID;
    postID = $("#post_ID").val();
    $scope.disambiguations = [];
    $scope.highlight = function(entity) {
      var textAnnotation, _i, _len, _ref;
      if (!(typeof tinyMCE !== "undefined" && tinyMCE !== null)) {
        return;
      }
      $(tinyMCE.get('content').dom.select(".textannotation")).removeClass("strong");
      if (!((entity != null ? entity.textAnnotations : void 0) != null)) {
        return;
      }
      if (0 === entity.textAnnotations.length) {
        return;
      }
      _ref = entity.textAnnotations;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        textAnnotation = _ref[_i];
        $(tinyMCE.get('content').dom.select("#" + (textAnnotation.replace(':', '\\:')))).addClass("strong");
      }
      return $(tinyMCE.get('content').dom.select('.mceContentBody')).animate({
        "scrollTop": $(tinyMCE.get('content').dom.select("#" + (entity.textAnnotations[0].replace(':', '\\:')))).position().top
      });
    };
    $scope.clearAndBind = function(disambiguation, entity) {
      var method;
      disambiguation.working = true;
      method = entity.selected ? "DELETE" : "POST";
      return $http({
        "method": method,
        "url": "admin-ajax.php",
        "params": {
          "action": "wordlift.disambiguations",
          "entity": entity.about
        },
        "data": {
          "clear": disambiguation.textAnnotations,
          "bind": entity.textAnnotations
        }
      }).success(function(data) {
        var disambiguationEntity, _i, _len, _ref;
        _ref = disambiguation.entities;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          disambiguationEntity = _ref[_i];
          disambiguationEntity.selected = false;
        }
        if ("POST" === method) {
          entity.selected = true;
        }
        return disambiguation.working = false;
      }).error(function() {
        return disambiguation.working = false;
      });
    };
    $scope.getTypeName = function(typeURI) {
      return typeURI.match(/.+\/(.+$)/)[1].toLowerCase();
    };
    $scope.getDisambiguations = function() {
      return $http({
        "method": "GET",
        "url": "admin-ajax.php",
        "params": {
          "action": "wordlift.disambiguation",
          "postID": postID
        }
      }).success(function(data) {
        return $scope.disambiguations = data;
      });
    };
    $scope.$on("job-complete", function() {
      return $scope.getDisambiguations();
    });
    $scope.getDisambiguations();
    return $scope.$watch("disambiguations", function() {
      var content, disambiguation, isDirty, regexp, replace, selectionHead, selectionTail, textAnnotation, _i, _j, _len, _len1, _ref, _ref1;
      if ((typeof tinyMCE !== "undefined" && tinyMCE !== null ? tinyMCE.get("content") : void 0) != null) {
        content = tinyMCE.get("content").getContent();
      } else {
        content = $("#content").html();
      }
      content = content.replace(/<span .*? typeof="http:\/\/fise.iks-project.eu\/ontology\/TextAnnotation">(.*?)<\/span>/g, '$1');
      _ref = $scope.disambiguations;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        disambiguation = _ref[_i];
        _ref1 = disambiguation.textAnnotations;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          textAnnotation = _ref1[_j];
          selectionHead = textAnnotation.selectionHead.replace('\(', '\\(').replace('\)', '\\)');
          selectionTail = textAnnotation.selectionTail.replace('\(', '\\(').replace('\)', '\\)');
          regexp = new RegExp("(\\W)(" + textAnnotation.selectedText + ")(\\W)");
          replace = "$1<span id=\"" + textAnnotation.about + "\" class=\"textannotation\"           typeof=\"http://fise.iks-project.eu/ontology/TextAnnotation\"           about=\"" + textAnnotation.about + "\">$2</span>$3";
          content = content.replace(regexp, replace);
        }
      }
      if ((typeof tinyMCE !== "undefined" && tinyMCE !== null ? tinyMCE.get("content") : void 0) != null) {
        isDirty = tinyMCE.get("content").isDirty();
        tinyMCE.get("content").setContent(content);
        if (!isDirty) {
          tinyMCE.get("content").isNotDirty = 1;
        }
      } else {
        $("#content").html(content);
      }
      if (typeof tinyMCE !== "undefined" && tinyMCE !== null) {
        return $(tinyMCE.get("content").dom.select('.textannotation')).toggleClass('highlight');
      }
    });
  }).controller("JobController", function($scope, $rootScope, $http, $timeout) {
    var postID;
    postID = $("#post_ID").val();
    $scope.getJob = function() {
      return $http({
        "method": "GET",
        "url": "admin-ajax.php",
        "params": {
          "action": "wordlift.job",
          "postID": postID
        }
      }).success(function(data, status, headers, config) {
        return $scope.state = data.jobState;
      }).error(function(data, status, headers, config) {
        return console.log(status);
      });
    };
    $scope.postJob = function() {
      $scope.state = "running";
      return $http({
        "method": "POST",
        "url": "admin-ajax.php",
        "params": {
          "action": "wordlift.job",
          "postID": postID
        }
      }).success(function(data, status, headers, config) {
        return $scope.state = "running";
      }).error(function(data, status, headers, config) {
        return $scope.state = "error";
      });
    };
    $scope.isRunning = function() {
      return "running" === $scope.state;
    };
    $scope.$watch("state", function() {
      if ($scope.isRunning()) {
        return $scope.watchJob();
      }
    });
    $scope.watchJob = function() {
      if (!$scope.isRunning()) {
        return $rootScope.$broadcast("job-complete");
      }
      return $timeout(function() {
        $scope.getJob();
        return $scope.watchJob();
      }, 5000);
    };
    return $scope.getJob();
  });

  $(angular.bootstrap($("#wordlift-disambiguate"), ["wordlift.disambiguate"]));

}).call(this);
