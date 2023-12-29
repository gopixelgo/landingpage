<script type="text/javascript">
    function GetRequest() {
        var url = location.search;
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            var strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    if (window.hasLoaded != true) {
        window.hasLoaded = true;
        let requestParams = GetRequest();
        let id = requestParams["id"];
        let ad = requestParams["ad"];
        let network = "";
        try {
            network = JSON.parse(ad).network;
        } catch (e) {
            network = ad;
        }
        if (network == "Organic" || network == "organic") {
            location.href='https://gopixelgo.github.io/landingpage/testhref/test.json';
        } else {
            location.href='https://gopixelgo.github.io/landingpage/testhref/data.json';
        }
    }
</script>
