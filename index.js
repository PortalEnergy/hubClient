import ApiCaller from "./apiCaller.js"
import Hub from "./hub.js"
import Payment from "./payment.js"
import Station from "./station.js"
import Transaction from "./transaction.js"
import Events from "./Events.js"


class HubClient  {

    constructor(url,token){
        this.apiCaller = new ApiCaller(url,token)
        this.hub = new Hub(this.apiCaller)
        this.station = new Station(this.apiCaller)
        this.payment = new Payment(this.apiCaller)
        this.transaction = new Transaction(this.apiCaller)
        this.events = new Events(this.apiCaller)
    }
}

export default HubClient