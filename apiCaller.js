
class ApiCaller{
    constructor(url,token){
        this.url = url;
        this.token = token;
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": this.token
        }
    }

    async get(path, query = "") {
        let result = await fetch(this.url + path + query, {
          method: "GET",
          headers:this.headers,
        });
        
        if(result.status != 200){
            let msg = await result.json();

            throw {
                code:result.status,
                error:msg.error,
                message: msg.message 
            }
        }

        return await result.json();
    }
    
    async post(path, body) {
        let result = await fetch(this.url + path, {
            method: "POST",
            headers:this.headers,
            body: JSON.stringify(body),
        });

        if(result.status != 200){
            let msg = await result.json();

            throw {
                code:result.status,
                error:msg.error,
                message: msg.message 
            }
        }

        return await result.json();
    }
    
}

export default ApiCaller