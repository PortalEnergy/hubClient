import Websocket from "websocket"

class Events {
    constructor(caller) {
        this.api = caller;
        this.query = "";
        this.statusConnection = false;
        this.showlogs = true;

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

    setLog(show){
        self.showlogs = show;
    }

    reconnect(){
        var self = this;

        if(this.reconnectInterval){
            return 
        }

        this.reconnectInterval = setInterval(function(){


            if(!self.statusConnection){
                console.log("I","Events","Try to reconnect")
                self.run()
            }

        },5000)
    }

    run(){
        var self = this;
        
        this.connection = new Websocket.client();

        this.connection.on('connectFailed', function(error) {
  
            if(self.showlogs) console.log("E","Events",'Connect Error: ' + error.toString());
            self.statusConnection = false;
            
        });
        
        this.connection.on('connect', function(connection) {
            
            self.statusConnection = true;

            if(self.onConnectCallback)
                self.onConnectCallback(connection)

            
            if(self.showlogs) console.log("I","Events",'WebSocket сonnected');
            
            connection.on('error', function(error) {
                if(self.onErrorCallback)
                    self.onErrorCallback(error)
                
                if(self.showlogs) console.log("E","Events","Connection Error: " + error.toString());
                
                self.statusConnection = false;

            });
            
            connection.on('close', function() {
                if(self.onCloseCallback)
                    self.onCloseCallback()
                
                    self.statusConnection = false;
                
                if(self.showlogs) console.log("I","Events",'Connection Closed');

            });

            connection.on('message', function(message) {
                if(self.setOnMessageCallback)
                    self.setOnMessageCallback(mesage)
            });
            
        });
        
        this.connection.connect(this.api.url.replace("http","ws")+"/ws/events"+this.query, 'echo-protocol', null,this.api.headers,null);
        this.reconnect()
    }

}

export default Events