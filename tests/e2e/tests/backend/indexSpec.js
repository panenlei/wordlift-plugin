!function(t){function n(l){if(c[l])return c[l].exports;var e=c[l]={i:l,l:!1,exports:{}};return t[l].call(e.exports,e,e.exports,n),e.l=!0,e.exports}var c={};n.m=t,n.c=c,n.i=function(t){return t},n.d=function(t,c,l){n.o(t,c)||Object.defineProperty(t,c,{configurable:!1,enumerable:!0,get:l})},n.n=function(t){var c=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(c,"a",c),c},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=6)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Calls the `wl_sample_data_create` AJAX end-point in order to generate sample\n * data.\n *\n * Please note that the browser session must be already authenticated.\n *\n * @since 3.12.0\n *\n * @constructor\n */\nvar CreateSampleData = function CreateSampleData() {\n  // Open the login page.\n  browser.url('/wp-admin/admin-ajax.php?action=wl_sample_data_create');\n  browser.pause(3000);\n};\n\n// Finally export the function.\n/* harmony default export */ __webpack_exports__[\"a\"] = (CreateSampleData);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL0NyZWF0ZVNhbXBsZURhdGEuanM/MjQzNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENhbGxzIHRoZSBgd2xfc2FtcGxlX2RhdGFfY3JlYXRlYCBBSkFYIGVuZC1wb2ludCBpbiBvcmRlciB0byBnZW5lcmF0ZSBzYW1wbGVcbiAqIGRhdGEuXG4gKlxuICogUGxlYXNlIG5vdGUgdGhhdCB0aGUgYnJvd3NlciBzZXNzaW9uIG11c3QgYmUgYWxyZWFkeSBhdXRoZW50aWNhdGVkLlxuICpcbiAqIEBzaW5jZSAzLjEyLjBcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQ3JlYXRlU2FtcGxlRGF0YSA9ICgpID0+IHtcblx0Ly8gT3BlbiB0aGUgbG9naW4gcGFnZS5cblx0YnJvd3Nlci51cmwoICcvd3AtYWRtaW4vYWRtaW4tYWpheC5waHA/YWN0aW9uPXdsX3NhbXBsZV9kYXRhX2NyZWF0ZScgKTtcblx0YnJvd3Nlci5wYXVzZSggMzAwMCApO1xufTtcblxuLy8gRmluYWxseSBleHBvcnQgdGhlIGZ1bmN0aW9uLlxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlU2FtcGxlRGF0YTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB0ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL0NyZWF0ZVNhbXBsZURhdGEuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Tests: Login to WordPress.\n *\n * Provides a function to login to WordPress.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `LoginToWordPress` function.\n *\n * @since 3.11.0\n * @constructor\n */\nvar LoginToWordPress = function LoginToWordPress() {\n  // Open the login page.\n  browser.url('/wp-login.php');\n  browser.pause(5000);\n\n  // Wait for the login button.\n  browser.waitForExist('#wp-submit');\n\n  // Type username and password, then submit.\n  browser.setValue('#user_login', 'admin');\n  browser.setValue('#user_pass', 'admin');\n  browser.click('#wp-submit');\n\n  // Wait for the admin screen to load.\n  browser.pause(5000);\n};\n\n// Finally export the `LoginToWordPress` function.\n/* harmony default export */ __webpack_exports__[\"a\"] = (LoginToWordPress);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL0xvZ2luVG9Xb3JkUHJlc3MuanM/ZDM2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRlc3RzOiBMb2dpbiB0byBXb3JkUHJlc3MuXG4gKlxuICogUHJvdmlkZXMgYSBmdW5jdGlvbiB0byBsb2dpbiB0byBXb3JkUHJlc3MuXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICovXG5cbi8qKlxuICogRGVmaW5lIHRoZSBgTG9naW5Ub1dvcmRQcmVzc2AgZnVuY3Rpb24uXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IExvZ2luVG9Xb3JkUHJlc3MgPSAoKSA9PiB7XG5cdC8vIE9wZW4gdGhlIGxvZ2luIHBhZ2UuXG5cdGJyb3dzZXIudXJsKCAnL3dwLWxvZ2luLnBocCcgKTtcblx0YnJvd3Nlci5wYXVzZSggNTAwMCApO1xuXG5cdC8vIFdhaXQgZm9yIHRoZSBsb2dpbiBidXR0b24uXG5cdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dwLXN1Ym1pdCcgKTtcblxuXHQvLyBUeXBlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCwgdGhlbiBzdWJtaXQuXG5cdGJyb3dzZXIuc2V0VmFsdWUoICcjdXNlcl9sb2dpbicsICdhZG1pbicgKTtcblx0YnJvd3Nlci5zZXRWYWx1ZSggJyN1c2VyX3Bhc3MnLCAnYWRtaW4nICk7XG5cdGJyb3dzZXIuY2xpY2soICcjd3Atc3VibWl0JyApO1xuXG5cdC8vIFdhaXQgZm9yIHRoZSBhZG1pbiBzY3JlZW4gdG8gbG9hZC5cblx0YnJvd3Nlci5wYXVzZSggNTAwMCApO1xufTtcblxuLy8gRmluYWxseSBleHBvcnQgdGhlIGBMb2dpblRvV29yZFByZXNzYCBmdW5jdGlvbi5cbmV4cG9ydCBkZWZhdWx0IExvZ2luVG9Xb3JkUHJlc3M7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdHMvZTJlL3NjcmlwdHMvYmFja2VuZC9Mb2dpblRvV29yZFByZXNzLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFRQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Opens the 'Lorem Ipsum' post and waits for the Navigator to load.\n *\n * @since 3.12.0\n * @constructor\n */\nvar OpenPostLoremIpsum = function OpenPostLoremIpsum() {\n\tit('opens the Lorem Ipsum post', function () {\n\t\tbrowser.url('/lorem-ipsum');\n\t\tbrowser.waitForExist('[data-wl-navigator] > ul');\n\t\tbrowser.scroll('[data-wl-navigator]');\n\t\tbrowser.pause(3000);\n\t});\n};\n\n// Finally export the function.\n/* harmony default export */ __webpack_exports__[\"a\"] = (OpenPostLoremIpsum);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL09wZW5Qb3N0TG9yZW1JcHN1bS5qcz8xOWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogT3BlbnMgdGhlICdMb3JlbSBJcHN1bScgcG9zdCBhbmQgd2FpdHMgZm9yIHRoZSBOYXZpZ2F0b3IgdG8gbG9hZC5cbiAqXG4gKiBAc2luY2UgMy4xMi4wXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgT3BlblBvc3RMb3JlbUlwc3VtID0gZnVuY3Rpb24oKSB7XG5cdGl0KCAnb3BlbnMgdGhlIExvcmVtIElwc3VtIHBvc3QnLCBmdW5jdGlvbigpIHtcblx0XHRicm93c2VyLnVybCggJy9sb3JlbS1pcHN1bScgKTtcblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJ1tkYXRhLXdsLW5hdmlnYXRvcl0gPiB1bCcgKTtcblx0XHRicm93c2VyLnNjcm9sbCggJ1tkYXRhLXdsLW5hdmlnYXRvcl0nICk7XG5cdFx0YnJvd3Nlci5wYXVzZSggMzAwMCApO1xuXHR9ICk7XG59O1xuXG4vLyBGaW5hbGx5IGV4cG9ydCB0aGUgZnVuY3Rpb24uXG5leHBvcnQgZGVmYXVsdCBPcGVuUG9zdExvcmVtSXBzdW07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdHMvZTJlL3NjcmlwdHMvYmFja2VuZC9PcGVuUG9zdExvcmVtSXBzdW0uanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Tests: Post Edit Page.\n *\n * Test the analysis.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `PostEditPage` test.\n *\n * @since 3.11.0\n * @constructor\n */\nvar PostEditPage = function PostEditPage() {\n\tit('opens a post edit page and waits for the analysis results', function () {\n\t\t// @todo: enable creating a post when Safari and FF will support it.\n\t\t//\tbrowser.waitForExist( '#menu-posts > a[href=\"edit.php\"]' );\n\t\t//\n\t\t//\tbrowser.click( '#menu-posts > a[href=\"edit.php\"]' );\n\t\t//\n\t\t//\tbrowser.waitForExist( 'a.page-title-action' );\n\t\t//\n\t\t//\tbrowser.click( 'a.page-title-action' );\n\t\t//\n\t\t//\tbrowser.waitForExist( '#content_ifr' );\n\t\t//\n\t\t//\tbrowser.pause(5000);\n\t\t//\n\t\t//\tbrowser.frame( browser.element( '#content_ifr' ).value );\n\t\t//\n\t\t//\tbrowser.waitForExist( '#tinymce' );\n\t\t//\n\t\t//\tbrowser.click( '#tinymce' );\n\t\t//\n\t\t//\tbrowser.keys( 'WordLift brings the power of Artificial\n\t\t// Intelligence to help you produce richer content and organize it\n\t\t// around your audience.' );  // Set the company name. //\n\t\t// browser.setValue( '#tinymce p', 'WordLift brings the power of //\n\t\t// Artificial Intelligence to help you produce richer content and //\n\t\t// organize it around your audience.' ); browser.frameParent();\n\t\t// browser.element( '#publish' ).scroll(); browser.click( '#publish' );\n\n\t\t// Open a post page.\n\t\tbrowser.url('/wp-admin/post.php?post=3&action=edit');\n\t\tbrowser.pause(2500);\n\n\t\t// Wait for the analysis results to load.\n\t\tbrowser.waitForExist('#wl-entity-list ul li');\n\n\t\t// Click on the first analysis result.\n\t\tbrowser.click('#wl-entity-list ul li:nth-child(1) > div:nth-child(1)');\n\t\tbrowser.pause(1000);\n\n\t\t// Open the drawer.\n\t\tbrowser.click('#wl-entity-list ul li:nth-child(1) > div:nth-child(3)');\n\t\tbrowser.pause(1000);\n\n\t\t// Disable link.\n\t\tbrowser.click('#wl-entity-list ul li:nth-child(1) > div:nth-child(2) > div:nth-child(1)');\n\t\tbrowser.pause(1000);\n\n\t\t// Re-enable link.\n\t\tbrowser.click('#wl-entity-list ul li:nth-child(1) > div:nth-child(2) > div:nth-child(1)');\n\t\tbrowser.pause(1000);\n\n\t\t// Click on the second analysis result.\n\t\tbrowser.click('#wl-entity-list ul li:nth-child(2) > div:nth-child(1)');\n\t\tbrowser.pause(1000);\n\n\t\t// @todo: Safari doesn't correctly handle the click / focus event.\n\t\t// Expect the drawer of the 1st tile to be invisible.\n\t\t//\t\texpect( browser.isVisible( '#wl-entity-list ul\n\t\t// li:nth-child(1)' + '> div:nth-child(2)' ) ) .toBe( false );\n\n\t\t// Expect the drawer of the 2nd tile to be visible.\n\t\texpect(browser.isVisible('#wl-entity-list ul li:nth-child(2) > div:nth-child(2)')).toBe(false);\n\t});\n};\n\n// Finally export the `PostEditPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = (PostEditPage);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1Bvc3RFZGl0UGFnZS5qcz8xMjRhIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFBvc3QgRWRpdCBQYWdlLlxuICpcbiAqIFRlc3QgdGhlIGFuYWx5c2lzLlxuICpcbiAqIEBzaW5jZSAzLjExLjBcbiAqL1xuXG4vKipcbiAqIERlZmluZSB0aGUgYFBvc3RFZGl0UGFnZWAgdGVzdC5cbiAqXG4gKiBAc2luY2UgMy4xMS4wXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgUG9zdEVkaXRQYWdlID0gZnVuY3Rpb24oKSB7XG5cdGl0KCAnb3BlbnMgYSBwb3N0IGVkaXQgcGFnZSBhbmQgd2FpdHMgZm9yIHRoZSBhbmFseXNpcyByZXN1bHRzJywgKCkgPT4ge1xuXHRcdC8vIEB0b2RvOiBlbmFibGUgY3JlYXRpbmcgYSBwb3N0IHdoZW4gU2FmYXJpIGFuZCBGRiB3aWxsIHN1cHBvcnQgaXQuXG5cdFx0Ly9cdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI21lbnUtcG9zdHMgPiBhW2hyZWY9XCJlZGl0LnBocFwiXScgKTtcblx0XHQvL1xuXHRcdC8vXHRicm93c2VyLmNsaWNrKCAnI21lbnUtcG9zdHMgPiBhW2hyZWY9XCJlZGl0LnBocFwiXScgKTtcblx0XHQvL1xuXHRcdC8vXHRicm93c2VyLndhaXRGb3JFeGlzdCggJ2EucGFnZS10aXRsZS1hY3Rpb24nICk7XG5cdFx0Ly9cblx0XHQvL1x0YnJvd3Nlci5jbGljayggJ2EucGFnZS10aXRsZS1hY3Rpb24nICk7XG5cdFx0Ly9cblx0XHQvL1x0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjY29udGVudF9pZnInICk7XG5cdFx0Ly9cblx0XHQvL1x0YnJvd3Nlci5wYXVzZSg1MDAwKTtcblx0XHQvL1xuXHRcdC8vXHRicm93c2VyLmZyYW1lKCBicm93c2VyLmVsZW1lbnQoICcjY29udGVudF9pZnInICkudmFsdWUgKTtcblx0XHQvL1xuXHRcdC8vXHRicm93c2VyLndhaXRGb3JFeGlzdCggJyN0aW55bWNlJyApO1xuXHRcdC8vXG5cdFx0Ly9cdGJyb3dzZXIuY2xpY2soICcjdGlueW1jZScgKTtcblx0XHQvL1xuXHRcdC8vXHRicm93c2VyLmtleXMoICdXb3JkTGlmdCBicmluZ3MgdGhlIHBvd2VyIG9mIEFydGlmaWNpYWxcblx0XHQvLyBJbnRlbGxpZ2VuY2UgdG8gaGVscCB5b3UgcHJvZHVjZSByaWNoZXIgY29udGVudCBhbmQgb3JnYW5pemUgaXRcblx0XHQvLyBhcm91bmQgeW91ciBhdWRpZW5jZS4nICk7ICAvLyBTZXQgdGhlIGNvbXBhbnkgbmFtZS4gLy9cblx0XHQvLyBicm93c2VyLnNldFZhbHVlKCAnI3RpbnltY2UgcCcsICdXb3JkTGlmdCBicmluZ3MgdGhlIHBvd2VyIG9mIC8vXG5cdFx0Ly8gQXJ0aWZpY2lhbCBJbnRlbGxpZ2VuY2UgdG8gaGVscCB5b3UgcHJvZHVjZSByaWNoZXIgY29udGVudCBhbmQgLy9cblx0XHQvLyBvcmdhbml6ZSBpdCBhcm91bmQgeW91ciBhdWRpZW5jZS4nICk7IGJyb3dzZXIuZnJhbWVQYXJlbnQoKTtcblx0XHQvLyBicm93c2VyLmVsZW1lbnQoICcjcHVibGlzaCcgKS5zY3JvbGwoKTsgYnJvd3Nlci5jbGljayggJyNwdWJsaXNoJyApO1xuXG5cdFx0Ly8gT3BlbiBhIHBvc3QgcGFnZS5cblx0XHRicm93c2VyLnVybCggJy93cC1hZG1pbi9wb3N0LnBocD9wb3N0PTMmYWN0aW9uPWVkaXQnICk7XG5cdFx0YnJvd3Nlci5wYXVzZSggMjUwMCApO1xuXG5cdFx0Ly8gV2FpdCBmb3IgdGhlIGFuYWx5c2lzIHJlc3VsdHMgdG8gbG9hZC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJyN3bC1lbnRpdHktbGlzdCB1bCBsaScgKTtcblxuXHRcdC8vIENsaWNrIG9uIHRoZSBmaXJzdCBhbmFseXNpcyByZXN1bHQuXG5cdFx0YnJvd3Nlci5jbGljayggJyN3bC1lbnRpdHktbGlzdCB1bCBsaTpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDEpJyApO1xuXHRcdGJyb3dzZXIucGF1c2UoIDEwMDAgKTtcblxuXHRcdC8vIE9wZW4gdGhlIGRyYXdlci5cblx0XHRicm93c2VyLmNsaWNrKCAnI3dsLWVudGl0eS1saXN0IHVsIGxpOm50aC1jaGlsZCgxKSA+IGRpdjpudGgtY2hpbGQoMyknICk7XG5cdFx0YnJvd3Nlci5wYXVzZSggMTAwMCApO1xuXG5cdFx0Ly8gRGlzYWJsZSBsaW5rLlxuXHRcdGJyb3dzZXIuY2xpY2soICcjd2wtZW50aXR5LWxpc3QgdWwgbGk6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMSknICk7XG5cdFx0YnJvd3Nlci5wYXVzZSggMTAwMCApO1xuXG5cdFx0Ly8gUmUtZW5hYmxlIGxpbmsuXG5cdFx0YnJvd3Nlci5jbGljayggJyN3bC1lbnRpdHktbGlzdCB1bCBsaTpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgxKScgKTtcblx0XHRicm93c2VyLnBhdXNlKCAxMDAwICk7XG5cblx0XHQvLyBDbGljayBvbiB0aGUgc2Vjb25kIGFuYWx5c2lzIHJlc3VsdC5cblx0XHRicm93c2VyLmNsaWNrKCAnI3dsLWVudGl0eS1saXN0IHVsIGxpOm50aC1jaGlsZCgyKSA+IGRpdjpudGgtY2hpbGQoMSknICk7XG5cdFx0YnJvd3Nlci5wYXVzZSggMTAwMCApO1xuXG5cdFx0Ly8gQHRvZG86IFNhZmFyaSBkb2Vzbid0IGNvcnJlY3RseSBoYW5kbGUgdGhlIGNsaWNrIC8gZm9jdXMgZXZlbnQuXG5cdFx0Ly8gRXhwZWN0IHRoZSBkcmF3ZXIgb2YgdGhlIDFzdCB0aWxlIHRvIGJlIGludmlzaWJsZS5cblx0XHQvL1x0XHRleHBlY3QoIGJyb3dzZXIuaXNWaXNpYmxlKCAnI3dsLWVudGl0eS1saXN0IHVsXG5cdFx0Ly8gbGk6bnRoLWNoaWxkKDEpJyArICc+IGRpdjpudGgtY2hpbGQoMiknICkgKSAudG9CZSggZmFsc2UgKTtcblxuXHRcdC8vIEV4cGVjdCB0aGUgZHJhd2VyIG9mIHRoZSAybmQgdGlsZSB0byBiZSB2aXNpYmxlLlxuXHRcdGV4cGVjdCggYnJvd3Nlci5pc1Zpc2libGUoICcjd2wtZW50aXR5LWxpc3QgdWwgbGk6bnRoLWNoaWxkKDIpID4gZGl2Om50aC1jaGlsZCgyKScgKSApXG5cdFx0XHQudG9CZSggZmFsc2UgKTtcblx0fSApO1xufTtcblxuLy8gRmluYWxseSBleHBvcnQgdGhlIGBQb3N0RWRpdFBhZ2VgLlxuZXhwb3J0IGRlZmF1bHQgUG9zdEVkaXRQYWdlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRlc3RzL2UyZS9zY3JpcHRzL2JhY2tlbmQvUG9zdEVkaXRQYWdlLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFRQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Tests: WordLift Settings Page.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `SettingsPage` tests.\n *\n * @since 3.11.0\n */\nvar SettingsPage = function SettingsPage() {\n\t// Opens the settings page and check for the initial settings.\n\tit('opens the settings page', function () {\n\t\t// The link to the settings page.\n\t\tvar settingsPageLink = '[href=\"admin.php?page=wl_configuration_admin_menu\"]';\n\n\t\t// Wait for the link to exists, then click.\n\t\tbrowser.waitForExist(settingsPageLink);\n\t\tbrowser.click(settingsPageLink);\n\n\t\t// Wait for the `wl-key` element to exist and to have a `valid` css\n\t\t// class indicating that the key is valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// Expect the entity base path with `vocabulary` as path and to be\n\t\t// readonly.\n\t\texpect(browser.getValue('#wl-entity-base-path')).toBe('vocabulary');\n\t\texpect(browser.getAttribute('#wl-entity-base-path', 'readonly')).toBe('true');\n\n\t\t// Expect English to be selected as language.\n\t\texpect(browser.getValue('#wl-site-language option[selected=\"selected\"]')).toBe('en');\n\n\t\t// Check that a publisher is set.\n\t\texpect(browser.getValue('#wl-publisher-id')).not.toBe('');\n\t});\n\n\t// Try changing the license key and see how the input reacts.\n\tit('change the license key', function () {\n\t\t// Get the existing license key.\n\t\tvar licenseKey = browser.getValue('#wl-key');\n\n\t\t// Set an invalid key.\n\t\tbrowser.setValue('#wl-key', 'xyz');\n\n\t\t// Wait for the `wl-key` to turn invalid.\n\t\tbrowser.waitForExist('#wl-key.invalid');\n\n\t\t// Set the valid key again.\n\t\tbrowser.setValue('#wl-key', licenseKey);\n\n\t\t// Wait for the `wl-key` to turn valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// @todo: replace with sendKeys when FF will support it.\n\t\t//\t\t// Set an empty key.\n\t\t//\t\tbrowser.setValue( '#wl-key', '' );\n\t\t//\n\t\t//\t\t// Wait for the `wl-key` to turn invalid.\n\t\t//\t\tbrowser.waitForExist( '#wl-key.invalid' );\n\t\t//\t\t// Set the valid key again.\n\t\t//\t\tbrowser.setValue( '#wl-key', licenseKey );\n\t\t//\n\t\t//\t\t// Wait for the `wl-key` to turn valid.\n\t\t//\t\tbrowser.waitForExist( '#wl-key.valid' );\n\t});\n\n\t// Test changing the settings and create a publisher.\n\tit('change the settings', function () {\n\t\t// Click on the 'Create a New Publisher' tab.\n\t\tbrowser.click('[href=\"#tabs-2\"]');\n\n\t\t// Wait for the `wp_publisher[name]` field to be visible.\n\t\tbrowser.waitForVisible('[name=\"wl_publisher\\[name\\]\"]');\n\n\t\t// Click on the `Add Logo` button.\n\t\tbrowser.click('#wl-publisher-media-uploader');\n\n\t\t// Check that the `.media-modal` is visible.\n\t\tbrowser.waitForVisible('.media-modal');\n\n\t\t// @todo: add image upload and selection.\n\n\t\t// Then close it.\n\t\tbrowser.click('.media-modal-close');\n\n\t\t// Set the name.\n\t\tbrowser.setValue('[name=\"wl_publisher\\[name\\]\"]', 'John Smith');\n\n\t\t// Submit the form.\n\t\tbrowser.scroll('#submit');\n\t\tbrowser.click('#submit');\n\t\tbrowser.pause(5000);\n\n\t\t// Wait for the `wl-key` element to exist and to have a `valid` css\n\t\t// class indicating that the key is valid.\n\t\tbrowser.waitForExist('#wl-key.valid');\n\n\t\t// Check that the publisher is set.\n\t\t// @todo: FF has issues in getting the value for the selected option.\n\t\texpect(browser.getAttribute('#select2-wl-publisher-id-container', 'title')).toBe('John Smith');\n\n\t\t// @todo: also test changing the language.\n\t});\n};\n\n// Finally export the `SettingsPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = (SettingsPage);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1NldHRpbmdzUGFnZS5qcz80N2VmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFdvcmRMaWZ0IFNldHRpbmdzIFBhZ2UuXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICovXG5cbi8qKlxuICogRGVmaW5lIHRoZSBgU2V0dGluZ3NQYWdlYCB0ZXN0cy5cbiAqXG4gKiBAc2luY2UgMy4xMS4wXG4gKi9cbmNvbnN0IFNldHRpbmdzUGFnZSA9IGZ1bmN0aW9uKCkge1xuXHQvLyBPcGVucyB0aGUgc2V0dGluZ3MgcGFnZSBhbmQgY2hlY2sgZm9yIHRoZSBpbml0aWFsIHNldHRpbmdzLlxuXHRpdCggJ29wZW5zIHRoZSBzZXR0aW5ncyBwYWdlJywgKCkgPT4ge1xuXHRcdC8vIFRoZSBsaW5rIHRvIHRoZSBzZXR0aW5ncyBwYWdlLlxuXHRcdGNvbnN0IHNldHRpbmdzUGFnZUxpbmsgPSAnW2hyZWY9XCJhZG1pbi5waHA/cGFnZT13bF9jb25maWd1cmF0aW9uX2FkbWluX21lbnVcIl0nO1xuXG5cdFx0Ly8gV2FpdCBmb3IgdGhlIGxpbmsgdG8gZXhpc3RzLCB0aGVuIGNsaWNrLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCBzZXR0aW5nc1BhZ2VMaW5rICk7XG5cdFx0YnJvd3Nlci5jbGljayggc2V0dGluZ3NQYWdlTGluayApO1xuXG5cdFx0Ly8gV2FpdCBmb3IgdGhlIGB3bC1rZXlgIGVsZW1lbnQgdG8gZXhpc3QgYW5kIHRvIGhhdmUgYSBgdmFsaWRgIGNzc1xuXHRcdC8vIGNsYXNzIGluZGljYXRpbmcgdGhhdCB0aGUga2V5IGlzIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS52YWxpZCcgKTtcblxuXHRcdC8vIEV4cGVjdCB0aGUgZW50aXR5IGJhc2UgcGF0aCB3aXRoIGB2b2NhYnVsYXJ5YCBhcyBwYXRoIGFuZCB0byBiZVxuXHRcdC8vIHJlYWRvbmx5LlxuXHRcdGV4cGVjdCggYnJvd3Nlci5nZXRWYWx1ZSggJyN3bC1lbnRpdHktYmFzZS1wYXRoJyApICkudG9CZSggJ3ZvY2FidWxhcnknICk7XG5cdFx0ZXhwZWN0KCBicm93c2VyLmdldEF0dHJpYnV0ZSggJyN3bC1lbnRpdHktYmFzZS1wYXRoJywgJ3JlYWRvbmx5JyApICkudG9CZSggJ3RydWUnICk7XG5cblx0XHQvLyBFeHBlY3QgRW5nbGlzaCB0byBiZSBzZWxlY3RlZCBhcyBsYW5ndWFnZS5cblx0XHRleHBlY3QoIGJyb3dzZXIuZ2V0VmFsdWUoICcjd2wtc2l0ZS1sYW5ndWFnZSBvcHRpb25bc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiXScgKSApLnRvQmUoICdlbicgKTtcblxuXHRcdC8vIENoZWNrIHRoYXQgYSBwdWJsaXNoZXIgaXMgc2V0LlxuXHRcdGV4cGVjdCggYnJvd3Nlci5nZXRWYWx1ZSggJyN3bC1wdWJsaXNoZXItaWQnICkgKS5ub3QudG9CZSggJycgKTtcblx0fSApO1xuXG5cdC8vIFRyeSBjaGFuZ2luZyB0aGUgbGljZW5zZSBrZXkgYW5kIHNlZSBob3cgdGhlIGlucHV0IHJlYWN0cy5cblx0aXQoICdjaGFuZ2UgdGhlIGxpY2Vuc2Uga2V5JywgKCkgPT4ge1xuXHRcdC8vIEdldCB0aGUgZXhpc3RpbmcgbGljZW5zZSBrZXkuXG5cdFx0Y29uc3QgbGljZW5zZUtleSA9IGJyb3dzZXIuZ2V0VmFsdWUoICcjd2wta2V5JyApO1xuXG5cdFx0Ly8gU2V0IGFuIGludmFsaWQga2V5LlxuXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcjd2wta2V5JywgJ3h5eicgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBgd2wta2V5YCB0byB0dXJuIGludmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjd2wta2V5LmludmFsaWQnICk7XG5cblx0XHQvLyBTZXQgdGhlIHZhbGlkIGtleSBhZ2Fpbi5cblx0XHRicm93c2VyLnNldFZhbHVlKCAnI3dsLWtleScsIGxpY2Vuc2VLZXkgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBgd2wta2V5YCB0byB0dXJuIHZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS52YWxpZCcgKTtcblxuXHRcdC8vIEB0b2RvOiByZXBsYWNlIHdpdGggc2VuZEtleXMgd2hlbiBGRiB3aWxsIHN1cHBvcnQgaXQuXG5cdFx0Ly9cdFx0Ly8gU2V0IGFuIGVtcHR5IGtleS5cblx0XHQvL1x0XHRicm93c2VyLnNldFZhbHVlKCAnI3dsLWtleScsICcnICk7XG5cdFx0Ly9cblx0XHQvL1x0XHQvLyBXYWl0IGZvciB0aGUgYHdsLWtleWAgdG8gdHVybiBpbnZhbGlkLlxuXHRcdC8vXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnI3dsLWtleS5pbnZhbGlkJyApO1xuXHRcdC8vXHRcdC8vIFNldCB0aGUgdmFsaWQga2V5IGFnYWluLlxuXHRcdC8vXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcjd2wta2V5JywgbGljZW5zZUtleSApO1xuXHRcdC8vXG5cdFx0Ly9cdFx0Ly8gV2FpdCBmb3IgdGhlIGB3bC1rZXlgIHRvIHR1cm4gdmFsaWQuXG5cdFx0Ly9cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcjd2wta2V5LnZhbGlkJyApO1xuXHR9ICk7XG5cblx0Ly8gVGVzdCBjaGFuZ2luZyB0aGUgc2V0dGluZ3MgYW5kIGNyZWF0ZSBhIHB1Ymxpc2hlci5cblx0aXQoICdjaGFuZ2UgdGhlIHNldHRpbmdzJywgKCkgPT4ge1xuXHRcdC8vIENsaWNrIG9uIHRoZSAnQ3JlYXRlIGEgTmV3IFB1Ymxpc2hlcicgdGFiLlxuXHRcdGJyb3dzZXIuY2xpY2soICdbaHJlZj1cIiN0YWJzLTJcIl0nICk7XG5cblx0XHQvLyBXYWl0IGZvciB0aGUgYHdwX3B1Ymxpc2hlcltuYW1lXWAgZmllbGQgdG8gYmUgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRGb3JWaXNpYmxlKCAnW25hbWU9XCJ3bF9wdWJsaXNoZXJcXFtuYW1lXFxdXCJdJyApO1xuXG5cdFx0Ly8gQ2xpY2sgb24gdGhlIGBBZGQgTG9nb2AgYnV0dG9uLlxuXHRcdGJyb3dzZXIuY2xpY2soICcjd2wtcHVibGlzaGVyLW1lZGlhLXVwbG9hZGVyJyApO1xuXG5cdFx0Ly8gQ2hlY2sgdGhhdCB0aGUgYC5tZWRpYS1tb2RhbGAgaXMgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRGb3JWaXNpYmxlKCAnLm1lZGlhLW1vZGFsJyApO1xuXG5cdFx0Ly8gQHRvZG86IGFkZCBpbWFnZSB1cGxvYWQgYW5kIHNlbGVjdGlvbi5cblxuXHRcdC8vIFRoZW4gY2xvc2UgaXQuXG5cdFx0YnJvd3Nlci5jbGljayggJy5tZWRpYS1tb2RhbC1jbG9zZScgKTtcblxuXHRcdC8vIFNldCB0aGUgbmFtZS5cblx0XHRicm93c2VyLnNldFZhbHVlKCAnW25hbWU9XCJ3bF9wdWJsaXNoZXJcXFtuYW1lXFxdXCJdJywgJ0pvaG4gU21pdGgnICk7XG5cblx0XHQvLyBTdWJtaXQgdGhlIGZvcm0uXG5cdFx0YnJvd3Nlci5zY3JvbGwoICcjc3VibWl0JyApO1xuXHRcdGJyb3dzZXIuY2xpY2soICcjc3VibWl0JyApO1xuXHRcdGJyb3dzZXIucGF1c2UoIDUwMDAgKTtcblxuXHRcdC8vIFdhaXQgZm9yIHRoZSBgd2wta2V5YCBlbGVtZW50IHRvIGV4aXN0IGFuZCB0byBoYXZlIGEgYHZhbGlkYCBjc3Ncblx0XHQvLyBjbGFzcyBpbmRpY2F0aW5nIHRoYXQgdGhlIGtleSBpcyB2YWxpZC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJyN3bC1rZXkudmFsaWQnICk7XG5cblx0XHQvLyBDaGVjayB0aGF0IHRoZSBwdWJsaXNoZXIgaXMgc2V0LlxuXHRcdC8vIEB0b2RvOiBGRiBoYXMgaXNzdWVzIGluIGdldHRpbmcgdGhlIHZhbHVlIGZvciB0aGUgc2VsZWN0ZWQgb3B0aW9uLlxuXHRcdGV4cGVjdCggYnJvd3Nlci5nZXRBdHRyaWJ1dGUoICcjc2VsZWN0Mi13bC1wdWJsaXNoZXItaWQtY29udGFpbmVyJywgJ3RpdGxlJyApIClcblx0XHRcdC50b0JlKCAnSm9obiBTbWl0aCcgKTtcblxuXHRcdC8vIEB0b2RvOiBhbHNvIHRlc3QgY2hhbmdpbmcgdGhlIGxhbmd1YWdlLlxuXHR9ICk7XG59O1xuXG4vLyBGaW5hbGx5IGV4cG9ydCB0aGUgYFNldHRpbmdzUGFnZWAuXG5leHBvcnQgZGVmYXVsdCBTZXR0aW5nc1BhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdHMvZTJlL3NjcmlwdHMvYmFja2VuZC9TZXR0aW5nc1BhZ2UuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("/**\n * Tests: Setup Page.\n *\n * @since 3.11.0\n */\n\n/**\n * Define the `SetupPage` test.\n *\n * @since 3.11.0\n * @constructor\n */\nvar SetupPage = function SetupPage() {\n\t// `paneX` represents the expected horizontal offset of the current\n\t// pane. It is set the first time, when the _wl-setup_ page is opened.\n\tvar paneX = void 0;\n\n\t/**\n  * Click on the next button in the pane at `index` (1-based).\n  *\n  * @since 3.9.0\n  *\n  * @param {Number} index The pane index (1-based).\n  */\n\tvar clickNextAndWaitForPane = function clickNextAndWaitForPane(index) {\n\t\t// Click on the next button.\n\t\tbrowser.click('.viewport > ul > li:nth-child(' + index + ') [data-wl-next]');\n\n\t\t// Wait until the next pane is visible.\n\t\tbrowser.waitUntil(function () {\n\t\t\t// console.log(browser.getLocation('.viewport > ul >\n\t\t\t// li:nth-child()', 'x'));\n\t\t\treturn paneX === browser.getLocation('.viewport > ul > li:nth-child(' + (index + 1) + ')', 'x');\n\t\t}, 750, 'expected pane to be visible within 750ms');\n\t};\n\n\tit('opens the plugins page and activates WordLift', function () {\n\t\t// Navigate to the plugins page.\n\t\tbrowser.url('/wp-admin/plugins.php');\n\n\t\t// Check the URL.\n\t\t// expect(browser.getUrl()).toMatch(/\\/wp-admin\\/plugins\\.php$/);\n\n\t\t// Get WordLift's row in the plugins' list.\n\t\tbrowser.waitForExist('[data-slug=\"wordlift\"]');\n\n\t\t// Activate WordLift.\n\t\tbrowser.click('[data-slug=\"wordlift\"] .activate a');\n\t\tbrowser.pause(2500);\n\n\t\t// We got redirected to the `wl-setup` page.\n\t\t// expect(browser.getUrl()).toMatch(/\\/wp-admin\\/index\\.php\\?page=wl-setup$/);\n\n\t\t// Wait until the element becomes invalid.\n\t\tbrowser.waitForExist('.viewport > ul > li:first-child');\n\n\t\t// Set the x offset for the current visible pane.\n\t\tpaneX = browser.getLocation('.viewport > ul > li:first-child', 'x');\n\t});\n\n\tit('continues to License Key', function () {\n\t\t// Click next and wait for the 2nd pane.\n\t\tclickNextAndWaitForPane(1);\n\n\t\t// Set an invalid key.\n\t\tbrowser.setValue('#key', 'an-invalid-key');\n\n\t\t// Wait until the element becomes invalid.\n\t\tbrowser.waitForExist('#key.invalid');\n\n\t\t// Set a valid key.\n\t\tbrowser.setValue('#key', process.env.WORDLIFT_KEY);\n\n\t\t// Wait until the element becomes valid.\n\t\tbrowser.waitForExist('#key.valid');\n\t});\n\n\tit('continues to Vocabulary', function () {\n\t\t// Click next and wait for the 3rd pane.\n\t\tclickNextAndWaitForPane(2);\n\n\t\t// browser.click('input#vocabulary');\n\t\t//\n\t\t// // Set an invalid vocabulary path.\n\t\t// browser.keys(['Backspace', '_']);\n\t\t//\n\t\t// browser.saveScreenshot();\n\t\t//\n\t\t// // Wait until the element becomes invalid.\n\t\t// browser.waitForExist('input#vocabulary.invalid');\n\t\t//\n\t\t// // Set a valid vocabulary.\n\t\t// browser.keys('Backspace');\n\n\t\t// Wait until the element becomes valid.\n\t\tbrowser.waitForExist('input#vocabulary.valid');\n\t});\n\n\tit('continues to Language', function () {\n\t\t// Click next and wait for the 4th pane.\n\t\tclickNextAndWaitForPane(3);\n\t});\n\n\tit('continues to Publisher', function () {\n\t\t// Click next and wait for the 5th pane.\n\t\tclickNextAndWaitForPane(4);\n\n\t\tbrowser.waitForExist('input#name');\n\n\t\t// Set the company name.\n\t\tbrowser.setValue('input#name', 'Acme Inc.');\n\t\tbrowser.pause(2500);\n\n\t\t// Click on finish.\n\t\tbrowser.waitForExist('#btn-finish');\n\t\tbrowser.click('#btn-finish');\n\t\tbrowser.pause(5000);\n\n\t\t// Check that we got back to the admin area.\n\t\tbrowser.waitForExist('.wp-admin');\n\t});\n};\n\n// Finally export the `SetupPage`.\n/* harmony default export */ __webpack_exports__[\"a\"] = (SetupPage);//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL1NldHVwUGFnZS5qcz9mZjJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGVzdHM6IFNldHVwIFBhZ2UuXG4gKlxuICogQHNpbmNlIDMuMTEuMFxuICovXG5cbi8qKlxuICogRGVmaW5lIHRoZSBgU2V0dXBQYWdlYCB0ZXN0LlxuICpcbiAqIEBzaW5jZSAzLjExLjBcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5jb25zdCBTZXR1cFBhZ2UgPSBmdW5jdGlvbigpIHtcblx0Ly8gYHBhbmVYYCByZXByZXNlbnRzIHRoZSBleHBlY3RlZCBob3Jpem9udGFsIG9mZnNldCBvZiB0aGUgY3VycmVudFxuXHQvLyBwYW5lLiBJdCBpcyBzZXQgdGhlIGZpcnN0IHRpbWUsIHdoZW4gdGhlIF93bC1zZXR1cF8gcGFnZSBpcyBvcGVuZWQuXG5cdGxldCBwYW5lWDtcblxuXHQvKipcblx0ICogQ2xpY2sgb24gdGhlIG5leHQgYnV0dG9uIGluIHRoZSBwYW5lIGF0IGBpbmRleGAgKDEtYmFzZWQpLlxuXHQgKlxuXHQgKiBAc2luY2UgMy45LjBcblx0ICpcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBwYW5lIGluZGV4ICgxLWJhc2VkKS5cblx0ICovXG5cdGNvbnN0IGNsaWNrTmV4dEFuZFdhaXRGb3JQYW5lID0gZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdC8vIENsaWNrIG9uIHRoZSBuZXh0IGJ1dHRvbi5cblx0XHRicm93c2VyLmNsaWNrKCAnLnZpZXdwb3J0ID4gdWwgPiBsaTpudGgtY2hpbGQoJyArIGluZGV4ICsgJykgW2RhdGEtd2wtbmV4dF0nICk7XG5cblx0XHQvLyBXYWl0IHVudGlsIHRoZSBuZXh0IHBhbmUgaXMgdmlzaWJsZS5cblx0XHRicm93c2VyLndhaXRVbnRpbCggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhicm93c2VyLmdldExvY2F0aW9uKCcudmlld3BvcnQgPiB1bCA+XG5cdFx0XHQvLyBsaTpudGgtY2hpbGQoKScsICd4JykpO1xuXHRcdFx0cmV0dXJuIHBhbmVYID09PSBicm93c2VyLmdldExvY2F0aW9uKCAnLnZpZXdwb3J0ID4gdWwgPiBsaTpudGgtY2hpbGQoJyArIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgaW5kZXggKyAxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICkgKyAnKScsICd4JyApO1xuXHRcdH0sIDc1MCwgJ2V4cGVjdGVkIHBhbmUgdG8gYmUgdmlzaWJsZSB3aXRoaW4gNzUwbXMnICk7XG5cdH07XG5cblx0aXQoICdvcGVucyB0aGUgcGx1Z2lucyBwYWdlIGFuZCBhY3RpdmF0ZXMgV29yZExpZnQnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBOYXZpZ2F0ZSB0byB0aGUgcGx1Z2lucyBwYWdlLlxuXHRcdGJyb3dzZXIudXJsKCAnL3dwLWFkbWluL3BsdWdpbnMucGhwJyApO1xuXG5cdFx0Ly8gQ2hlY2sgdGhlIFVSTC5cblx0XHQvLyBleHBlY3QoYnJvd3Nlci5nZXRVcmwoKSkudG9NYXRjaCgvXFwvd3AtYWRtaW5cXC9wbHVnaW5zXFwucGhwJC8pO1xuXG5cdFx0Ly8gR2V0IFdvcmRMaWZ0J3Mgcm93IGluIHRoZSBwbHVnaW5zJyBsaXN0LlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnW2RhdGEtc2x1Zz1cIndvcmRsaWZ0XCJdJyApO1xuXG5cdFx0Ly8gQWN0aXZhdGUgV29yZExpZnQuXG5cdFx0YnJvd3Nlci5jbGljayggJ1tkYXRhLXNsdWc9XCJ3b3JkbGlmdFwiXSAuYWN0aXZhdGUgYScgKTtcblx0XHRicm93c2VyLnBhdXNlKCAyNTAwICk7XG5cblx0XHQvLyBXZSBnb3QgcmVkaXJlY3RlZCB0byB0aGUgYHdsLXNldHVwYCBwYWdlLlxuXHRcdC8vIGV4cGVjdChicm93c2VyLmdldFVybCgpKS50b01hdGNoKC9cXC93cC1hZG1pblxcL2luZGV4XFwucGhwXFw/cGFnZT13bC1zZXR1cCQvKTtcblxuXHRcdC8vIFdhaXQgdW50aWwgdGhlIGVsZW1lbnQgYmVjb21lcyBpbnZhbGlkLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnLnZpZXdwb3J0ID4gdWwgPiBsaTpmaXJzdC1jaGlsZCcgKTtcblxuXHRcdC8vIFNldCB0aGUgeCBvZmZzZXQgZm9yIHRoZSBjdXJyZW50IHZpc2libGUgcGFuZS5cblx0XHRwYW5lWCA9IGJyb3dzZXIuZ2V0TG9jYXRpb24oICcudmlld3BvcnQgPiB1bCA+IGxpOmZpcnN0LWNoaWxkJywgJ3gnICk7XG5cdH0gKTtcblxuXHRpdCggJ2NvbnRpbnVlcyB0byBMaWNlbnNlIEtleScsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIENsaWNrIG5leHQgYW5kIHdhaXQgZm9yIHRoZSAybmQgcGFuZS5cblx0XHRjbGlja05leHRBbmRXYWl0Rm9yUGFuZSggMSApO1xuXG5cdFx0Ly8gU2V0IGFuIGludmFsaWQga2V5LlxuXHRcdGJyb3dzZXIuc2V0VmFsdWUoICcja2V5JywgJ2FuLWludmFsaWQta2V5JyApO1xuXG5cdFx0Ly8gV2FpdCB1bnRpbCB0aGUgZWxlbWVudCBiZWNvbWVzIGludmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICcja2V5LmludmFsaWQnICk7XG5cblx0XHQvLyBTZXQgYSB2YWxpZCBrZXkuXG5cdFx0YnJvd3Nlci5zZXRWYWx1ZSggJyNrZXknLCBwcm9jZXNzLmVudi5XT1JETElGVF9LRVkgKTtcblxuXHRcdC8vIFdhaXQgdW50aWwgdGhlIGVsZW1lbnQgYmVjb21lcyB2YWxpZC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJyNrZXkudmFsaWQnICk7XG5cdH0gKTtcblxuXHRpdCggJ2NvbnRpbnVlcyB0byBWb2NhYnVsYXJ5JywgZnVuY3Rpb24oKSB7XG5cdFx0Ly8gQ2xpY2sgbmV4dCBhbmQgd2FpdCBmb3IgdGhlIDNyZCBwYW5lLlxuXHRcdGNsaWNrTmV4dEFuZFdhaXRGb3JQYW5lKCAyICk7XG5cblx0XHQvLyBicm93c2VyLmNsaWNrKCdpbnB1dCN2b2NhYnVsYXJ5Jyk7XG5cdFx0Ly9cblx0XHQvLyAvLyBTZXQgYW4gaW52YWxpZCB2b2NhYnVsYXJ5IHBhdGguXG5cdFx0Ly8gYnJvd3Nlci5rZXlzKFsnQmFja3NwYWNlJywgJ18nXSk7XG5cdFx0Ly9cblx0XHQvLyBicm93c2VyLnNhdmVTY3JlZW5zaG90KCk7XG5cdFx0Ly9cblx0XHQvLyAvLyBXYWl0IHVudGlsIHRoZSBlbGVtZW50IGJlY29tZXMgaW52YWxpZC5cblx0XHQvLyBicm93c2VyLndhaXRGb3JFeGlzdCgnaW5wdXQjdm9jYWJ1bGFyeS5pbnZhbGlkJyk7XG5cdFx0Ly9cblx0XHQvLyAvLyBTZXQgYSB2YWxpZCB2b2NhYnVsYXJ5LlxuXHRcdC8vIGJyb3dzZXIua2V5cygnQmFja3NwYWNlJyk7XG5cblx0XHQvLyBXYWl0IHVudGlsIHRoZSBlbGVtZW50IGJlY29tZXMgdmFsaWQuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICdpbnB1dCN2b2NhYnVsYXJ5LnZhbGlkJyApO1xuXHR9ICk7XG5cblx0aXQoICdjb250aW51ZXMgdG8gTGFuZ3VhZ2UnLCBmdW5jdGlvbigpIHtcblx0XHQvLyBDbGljayBuZXh0IGFuZCB3YWl0IGZvciB0aGUgNHRoIHBhbmUuXG5cdFx0Y2xpY2tOZXh0QW5kV2FpdEZvclBhbmUoIDMgKTtcblx0fSApO1xuXG5cdGl0KCAnY29udGludWVzIHRvIFB1Ymxpc2hlcicsIGZ1bmN0aW9uKCkge1xuXHRcdC8vIENsaWNrIG5leHQgYW5kIHdhaXQgZm9yIHRoZSA1dGggcGFuZS5cblx0XHRjbGlja05leHRBbmRXYWl0Rm9yUGFuZSggNCApO1xuXG5cdFx0YnJvd3Nlci53YWl0Rm9yRXhpc3QoICdpbnB1dCNuYW1lJyApO1xuXG5cdFx0Ly8gU2V0IHRoZSBjb21wYW55IG5hbWUuXG5cdFx0YnJvd3Nlci5zZXRWYWx1ZSggJ2lucHV0I25hbWUnLCAnQWNtZSBJbmMuJyApO1xuXHRcdGJyb3dzZXIucGF1c2UoIDI1MDAgKTtcblxuXHRcdC8vIENsaWNrIG9uIGZpbmlzaC5cblx0XHRicm93c2VyLndhaXRGb3JFeGlzdCggJyNidG4tZmluaXNoJyApO1xuXHRcdGJyb3dzZXIuY2xpY2soICcjYnRuLWZpbmlzaCcgKTtcblx0XHRicm93c2VyLnBhdXNlKCA1MDAwICk7XG5cblx0XHQvLyBDaGVjayB0aGF0IHdlIGdvdCBiYWNrIHRvIHRoZSBhZG1pbiBhcmVhLlxuXHRcdGJyb3dzZXIud2FpdEZvckV4aXN0KCAnLndwLWFkbWluJyApO1xuXHR9ICk7XG59O1xuXG4vLyBGaW5hbGx5IGV4cG9ydCB0aGUgYFNldHVwUGFnZWAuXG5leHBvcnQgZGVmYXVsdCBTZXR1cFBhZ2U7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdGVzdHMvZTJlL3NjcmlwdHMvYmFja2VuZC9TZXR1cFBhZ2UuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==")},function(module,__webpack_exports__,__webpack_require__){"use strict";eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__LoginToWordPress__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SetupPage__ = __webpack_require__(5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SettingsPage__ = __webpack_require__(4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PostEditPage__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CreateSampleData__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__OpenPostLoremIpsum__ = __webpack_require__(2);\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n// Define the overall tests.\ndescribe('test WordLift', function () {\n\t// Test logging into WordPress.\n\tit('logs into WordPress backend', __WEBPACK_IMPORTED_MODULE_0__LoginToWordPress__[\"a\" /* default */]);\n\n\t// Test the Set-up Page. A clean WordPress install is required for this test\n\t// to work. After the set-up, the Settings Page and the Post Edit Page will\n\t// be tested.\n\tdescribe('test the Setup Page', __WEBPACK_IMPORTED_MODULE_1__SetupPage__[\"a\" /* default */]);\n\n\t// Test the WordLift Settings Page.\n\tdescribe('test the Settings Page', __WEBPACK_IMPORTED_MODULE_2__SettingsPage__[\"a\" /* default */]);\n\n\t// Test the Post Edit Page.\n\tdescribe('test the Post Edit Page', __WEBPACK_IMPORTED_MODULE_3__PostEditPage__[\"a\" /* default */]);\n\n\t// Create Sample Data.\n\tit('creates sample data', __WEBPACK_IMPORTED_MODULE_4__CreateSampleData__[\"a\" /* default */]);\n\n\t// Open the Lorem Ipsum post to test the Navigator.\n\tdescribe('test the Navigator', __WEBPACK_IMPORTED_MODULE_5__OpenPostLoremIpsum__[\"a\" /* default */]);\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy90ZXN0cy9lMmUvc2NyaXB0cy9iYWNrZW5kL2luZGV4LmpzPzE0NGYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBJbnRlcm5hbCBkZXBlbmRlbmNpZXNcbiAqL1xuaW1wb3J0IExvZ2luVG9Xb3JkUHJlc3MgZnJvbSAnLi9Mb2dpblRvV29yZFByZXNzJztcbmltcG9ydCBTZXR1cFBhZ2UgZnJvbSAnLi9TZXR1cFBhZ2UnO1xuaW1wb3J0IFNldHRpbmdzUGFnZSBmcm9tICcuL1NldHRpbmdzUGFnZSc7XG5pbXBvcnQgUG9zdEVkaXRQYWdlIGZyb20gJy4vUG9zdEVkaXRQYWdlJztcbmltcG9ydCBDcmVhdGVTYW1wbGVEYXRhIGZyb20gJy4vQ3JlYXRlU2FtcGxlRGF0YSc7XG5pbXBvcnQgT3BlblBvc3RMb3JlbUlwc3VtIGZyb20gJy4vT3BlblBvc3RMb3JlbUlwc3VtJztcblxuLy8gRGVmaW5lIHRoZSBvdmVyYWxsIHRlc3RzLlxuZGVzY3JpYmUoICd0ZXN0IFdvcmRMaWZ0JywgZnVuY3Rpb24oKSB7XG5cdC8vIFRlc3QgbG9nZ2luZyBpbnRvIFdvcmRQcmVzcy5cblx0aXQoICdsb2dzIGludG8gV29yZFByZXNzIGJhY2tlbmQnLCBMb2dpblRvV29yZFByZXNzICk7XG5cblx0Ly8gVGVzdCB0aGUgU2V0LXVwIFBhZ2UuIEEgY2xlYW4gV29yZFByZXNzIGluc3RhbGwgaXMgcmVxdWlyZWQgZm9yIHRoaXMgdGVzdFxuXHQvLyB0byB3b3JrLiBBZnRlciB0aGUgc2V0LXVwLCB0aGUgU2V0dGluZ3MgUGFnZSBhbmQgdGhlIFBvc3QgRWRpdCBQYWdlIHdpbGxcblx0Ly8gYmUgdGVzdGVkLlxuXHRkZXNjcmliZSggJ3Rlc3QgdGhlIFNldHVwIFBhZ2UnLCBTZXR1cFBhZ2UgKTtcblxuXHQvLyBUZXN0IHRoZSBXb3JkTGlmdCBTZXR0aW5ncyBQYWdlLlxuXHRkZXNjcmliZSggJ3Rlc3QgdGhlIFNldHRpbmdzIFBhZ2UnLCBTZXR0aW5nc1BhZ2UgKTtcblxuXHQvLyBUZXN0IHRoZSBQb3N0IEVkaXQgUGFnZS5cblx0ZGVzY3JpYmUoICd0ZXN0IHRoZSBQb3N0IEVkaXQgUGFnZScsIFBvc3RFZGl0UGFnZSApO1xuXG5cdC8vIENyZWF0ZSBTYW1wbGUgRGF0YS5cblx0aXQoICdjcmVhdGVzIHNhbXBsZSBkYXRhJywgQ3JlYXRlU2FtcGxlRGF0YSApO1xuXG5cdC8vIE9wZW4gdGhlIExvcmVtIElwc3VtIHBvc3QgdG8gdGVzdCB0aGUgTmF2aWdhdG9yLlxuXHRkZXNjcmliZSggJ3Rlc3QgdGhlIE5hdmlnYXRvcicsIE9wZW5Qb3N0TG9yZW1JcHN1bSApO1xufSApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHRlc3RzL2UyZS9zY3JpcHRzL2JhY2tlbmQvaW5kZXguanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=")}]);