
class Payment {
    constructor(caller) {
        this.api = caller;

        this.CountryCodes = {
            RU:'RU',
            KZ:'KZ',
            BL:"BL",
        }

        this.Currency = {
            RUB:"RUB",
            KZT:"KZT",
            BYR:"BYR",
            EUR:'EUR',
            USD:"USD",
        }
    }

    async addTariff(tariff){

        try {
            return await this.api.post('/payment/addTariff', tariff)
        } catch (error) {
            console.log("E","addTariff",error)
        }
    }

    async updateTariff(id,tariff){

        try {
            return await this.api.post('/payment/updateTariff/'+id, tariff)
        } catch (error) {
            console.log("E","updateTariff",error)
        }
    }


    async getTariff(id){

        try {
            return await this.api.get('/payment/getTariff/'+id)
        } catch (error) {
            console.log("E","getTariff",error)
        }
    }

    async getTariffBySyncId(id){

        try {
            return await this.api.get('/payment/getTariffBySyncId/'+id)
        } catch (error) {
            console.log("E","getTariffBySyncId",error)
        }
    }


    async getInvoice(id){

        try {
            return await this.api.get('/payment/getInvoice/'+id)
        } catch (error) {
            console.log("E","getInvoice",error)
        }
    }
}

export default Payment