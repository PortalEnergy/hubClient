
class Transaction {
    constructor(caller) {
        this.api = caller;

        this.TransactionState = {
            New: "New",
            Preparing: 'Preparing',
            Charging: "Charging",
            Finished: "Finished",
            Error: "Error",
            Cancelled: "Cancelled"
        }

    }


    async getVersion(){

        try {
            return await this.api.get('/transaction/getVersion')
        } catch (error) {
            console.log("E","getVersion",error)
        }
    }

    async getUserTransaction(idTag){

        try {
            return await this.api.get('/transaction/getUserTransaction/'+idTag)
        } catch (error) {
            console.log("E","getUserTransaction",error)
        }
    }

    async getTransactionsLocal(){

        try {
            return await this.api.get('/transaction/getTransactionsLocal')
        } catch (error) {
            console.log("E","getTransactionsLocal",error)
        }
    }

    async getTransactionsCount(){

        try {
            return await this.api.get('/transaction/getTransactionsCount')
        } catch (error) {
            console.log("E","getTransactionsCount",error)
        }
    }

    async getLocalTransactionsCount(){

        try {
            return await this.api.get('/transaction/getLocalTransactionsCount')
        } catch (error) {
            console.log("E","getLocalTransactionsCount",error)
        }
    }

    async getTransactions(){

        try {
            return await this.api.get('/transaction/getTransactions')
        } catch (error) {
            console.log("E","getTransactions",error)
        }
    }

    async getTransactionLocal(id){

        try {
            return await this.api.get('/transaction/getTransactionLocal/'+id)
        } catch (error) {
            console.log("E","getTransactionLocal",error)
        }
    }

    async getTransaction(id){

        try {
            return await this.api.get('/transaction/getTransaction/'+id)
        } catch (error) {
            console.log("E","getTransaction",error)
        }
    }

    async getMeterValues(id){

        try {
            return await this.api.get('/transaction/getMeterValues/'+id)
        } catch (error) {
            console.log("E","getMeterValues",error)
        }
    }



    async stopTransactionLocal(clientUrl,transactionId,dateStop,meterStop){

        try {
            return await this.api.post('/transaction/stopTransactionLocal', {clientUrl,transactionId,dateStop,meterStop})
        } catch (error) {
            console.log("E","stopTransactionLocal",error)
        }
    }

    async stopTransaction(clientUrl,transactionId,dateStop,meterStop){

        try {
            return await this.api.post('/transaction/stopTransaction', {clientUrl,transactionId,dateStop,meterStop})
        } catch (error) {
            console.log("E","stopTransaction",error)
        }
    }

    async stopTransaction(clientUrl,transactionId,dateStop,meterStop){

        try {
            return await this.api.post('/transaction/stopTransaction', {clientUrl,transactionId,dateStop,meterStop})
        } catch (error) {
            console.log("E","stopTransaction",error)
        }
    }

    async startTransactionLocal(clientUrl,transactionId,connectorId,dateStart,meterStart){

        try {
            return await this.api.post('/transaction/startTransactionLocal', {clientUrl,transactionId,connectorId,dateStart,meterStart})
        } catch (error) {
            console.log("E","startTransactionLocal",error)
        }
    }

    async addTransactionLocal(clientUrl,transactionId,connectorId,dateStart,dateStop,meterStart, meterStop){

        try {
            return await this.api.post('/transaction/addTransactionLocal', {clientUrl,transactionId,connectorId,dateStart,dateStop,meterStart,meterStop})
        } catch (error) {
            console.log("E","addTransactionLocal",error)
        }
    }

    async startTransaction(clientUrl,idTag,dateStart,meterStart){

        try {
            return await this.api.post('/transaction/startTransaction', {clientUrl,idTag,dateStart,meterStart})
        } catch (error) {
            console.log("E","startTransaction",error)
        }
    }


    async remoteStopTransaction(clientUrl,idTag){

        try {
            return await this.api.post('/transaction/remoteStopTransaction', {clientUrl,idTag})
        } catch (error) {
            console.log("E","remoteStopTransaction",error)
        }
    }


    async remoteStartTransaction(clientUrl,connectorId,idTag){

        try {
            return await this.api.post('/transaction/remoteStartTransaction', {clientUrl,connectorId,idTag})
        } catch (error) {
            console.log("E","remoteStartTransaction",error)
        }
    }

    async rejectTransaction(id){

        try {
            return await this.api.post('/transaction/rejectTransaction', {id})
        } catch (error) {
            console.log("E","rejectTransaction",error)
        }
    }

    async cancelTransaction(id){

        try {
            return await this.api.post('/transaction/cancelTransaction', {id})
        } catch (error) {
            console.log("E","cancelTransaction",error)
        }
    }

    async meterValue(clientUrl,transactionId,connectorId,meterValue){

        try {
            return await this.api.post('/transaction/meterValue', {clientUrl,transactionId,connectorId,meterValue})
        } catch (error) {
            console.log("E","meterValue",error)
        }
    }
}

export default Transaction