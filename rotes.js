const {parseName, parseUrl} = require("./utils");
const {initialHelloTarget, initialGoodbyeTarget} = require('./env')

let helloTarget = initialHelloTarget;
let goodbyeTarget = initialGoodbyeTarget;

class Rotes {
   resolve(req, res) {
       const url = parseUrl(req.url);
       const name = parseName(url.searchParams)
       helloTarget = name ? name : initialHelloTarget;
       goodbyeTarget = name ? `, ${name}` : initialGoodbyeTarget;

       switch (url.pathname.toLocaleLowerCase()) {
           case '/hello':
               res.write(`Hello, ${helloTarget}`);
               break;
           case '/goodbye':
               res.write(`Goodbye${goodbyeTarget}`);
               break;
           default:
               res.statusCode = 404;
               res.write(":(");
       }
   }
}
const routes = new Rotes()
module.exports = routes
