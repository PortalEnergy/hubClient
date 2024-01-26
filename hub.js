
class Hub {
    constructor(caller) {
        this.api = caller;
    }

    async removePartner(address){

        try {
            return await this.api.post('/hub/​removePartner', {address})
        } catch (error) {
            console.log("E","removePartner",error)
        }
        
    }

    async partnerCanCreateTransaction(address){
        try {
            return await this.api.get('/hub/partnerCanCreateTransaction/'+address)
        } catch (error) {
            console.log("E","partnerCanCreateTransaction",error)
        }
    }

    async isPartner(address){
        try {
            return await this.api.get('/hub/isPartner/'+address)
        } catch (error) {
            console.log("E","isPartner",error)
        }
    }

    async getPartners(){
        try {
            return await this.api.get('/hub/getPartners')
        } catch (error) {
            console.log("E","getPartners",error)
        }
    }
    async deletePartnerWhoCanCreateTransaction(address){
        try {
            return await this.api.post('/hub/deletePartnerWhoCanCreateTransaction', {address})
        } catch (error) {
            console.log("E","deletePartnerWhoCanCreateTransaction",error)
        }
    }
    async addPartnerWhoCanCreateTransaction(address){
        try {
            return this.api.post('/hub/addPartnerWhoCanCreateTransaction', {address})
        } catch (error) {
            console.log("E","addPartnerWhoCanCreateTransaction",error)
        }
    }

    async addPartner(address, name){
        try {
            return await this.api.post('/hub/addPartner', {address,name})
        } catch (error) {
            console.log("E","addPartner",error)
        }
    }

    async me(){
        try {
            return await this.api.get('/hub/me')
        } catch (error) {
            console.log("E","me",error)
        }        
    }
}

export default Hub