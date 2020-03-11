const isIP = require('../node_modules/validator/lib/isIP');

const NA = "NA";

const getRequestingGeoLocation = (req) => {
    return (req.geoip) ? req.geoip.country : (isIP(req.ip) ? req.ip : NA);
};

const getRequestingBrowser = (useragent) => {
    return useragent.browser || NA;
};

const getRequestingPlatform = (useragent) => {
    return useragent.platform || NA;
};

const addHttp = (url) => {
    if (!/^(f|ht)tps?:\/\//i.test(url) && url.trim().length !== 0) {
        url = "http://" + url;
    }
    return url;
};

module.exports = {
    getRequestingGeoLocation,
    getRequestingPlatform,
    getRequestingBrowser,
    addHttp
};