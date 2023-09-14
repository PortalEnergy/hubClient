class Events {
    constructor(caller) {
        this.api = caller;
        var WebSocketClient = require('websocket').client;

        this.connection = new WebSocketClient();
        this.query = "";

    }

    setOnMessageCallback(callback){
        this.onMessageCallback = callback;
    }

    setOnErrorCallback(callback){
        this.onErrorCallback = callback;
    }

    setOnCloseCallback(callback){
        this.onCloseCallback = callback;
    }

    setOnConnectCallback(callback){
        this.onConnectCallback = callback;
    }

    setQuery(query){
        this.query = "/?"+query;
    }

    run(){
        this.connection.on('connectFailed', function(error) {
            console.log('Connect Error: ' + error.toString());
        });
        
        this.connection.on('connect', function(connection) {
            this.onConnectCallback(connection)

            console.log('WebSocket Client Connected');
            
            connection.on('error', function(error) {
                this.onErrorCallback(error)
                console.log("Connection Error: " + error.toString());
            });
            
            connection.on('close', function() {
                this.onCloseCallback()
                console.log('echo-protocol Connection Closed');
            });

            connection.on('message', function(message) {
                this.setOnMessageCallback(mesage)
                if (message.type === 'utf8') {
                    console.log("Received: '" + message.utf8Data + "'");
                }
            });
            
        });
        
        this.connection.connect(this.api.url.replace("http","ws")+"/ws/events"+this.query, 'echo-protocol', null,this.api.headers,null);
    }

}

export default Events