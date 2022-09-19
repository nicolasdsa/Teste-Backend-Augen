class Response {
    constructor(){

    }

    status(number){
        this.statusNumber = number;
        return this
    }

    send(body){
        this.body = body;
    }

}

module.exports = Response;