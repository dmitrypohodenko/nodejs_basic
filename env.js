class Env {
    hostname = '127.0.0.1';
    port = 3000;
    baseUrl = `http://${this.hostname}:${this.port}`;
    initialHelloTarget = 'world';
    initialGoodbyeTarget = '';
}

const env = new Env();
module.exports = env

