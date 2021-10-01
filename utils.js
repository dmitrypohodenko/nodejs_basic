const {baseUrl} = require("./env");

class Utils {
    parseUrl (url) {
        return new URL(`${baseUrl}${url}`)
    }

    parseName (query) {
        return new URLSearchParams(query).get('name');
    }
}
const utils = new Utils();
module.exports = utils
