var pbs = function() {

  function getJSON(url, onSuccess, onFailure) {
    req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4) {
        if (req.status === 200) {
          onSuccess(JSON.parse(req.responseText));
        } else {
          onFailure(req.status, req.responseText);
        }
      }
    }
    req.open("GET", url);
    req.send();
  }

  return {
    // Calls onSuccess() with a list of Prebid Server bidders, like ["appnexus", "adform", "adtelligent", ...],
    // or onFailure with the HTTP status & response text if the call failed.
    fetchBidders: function(onSuccess, onFailure) {
      getJSON("https://prebid.adnxs.com/pbs/v1/info/bidders", onSuccess, onFailure)
    }
  }
}()