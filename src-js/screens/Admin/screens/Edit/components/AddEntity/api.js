export function autocomplete(query, language, ...excludes) {
  // eslint-disable-next-line
  if ("undefined" !== wp.ajax) {
    // eslint-disable-next-line
    return wp.ajax.post("wl_autocomplete", {
      query,
      // eslint-disable-next-line
      _wpnonce: wlSettings["wl_autocomplete_nonce"],
      // eslint-disable-next-line
      exclude: wlSettings.itemId,
      // eslint-disable-next-line
      scope: "undefined" !== wlSettings["can_create_entities"] && "yes" === wlSettings["can_create_entities"]
        ? "cloud" : "local",
    });
  } else {
    const url = new URL("http://localhost:8080/wordlift-api/autocomplete");

    url.searchParams.append("query", query);
    url.searchParams.append("language", language);

    if (0 === excludes.length) url.searchParams.append("exclude", "");
    else excludes.forEach(value => url.searchParams.append("exclude", value));

    return fetch(url).then(response => response.json());
  }
}
