
class Station {
    constructor(caller) {
        this.api = caller;
        this.ConnectorStatusTypes = {
            Available: "Available",
            Preparing : "Preparing",
            Charging: "Charging",
            SuspendedEVSE : "SuspendedEVSE",
            SuspendedEV : "SuspendedEV",
            Finishing : "Finishing",
            Reserved:"Reserved",
            Unavailable: "Unavailable",
            Faulted : "Faulted"
        }
        
        this.ErrorCodesTypes = {
            ConnectorLockFailure: "ConnectorLockFailure",
            EVCommunicationError: "EVCommunicationError",
            GroundFailure: "GroundFailure",
            HighTemperature: "HighTemperature",
            InternalError: "InternalError",
            LocalListConflict: "LocalListConflict",
            NoError: "NoError",
            OtherError: "OtherError",
            OverCurrentFailure : "OverCurrentFailure",
            PowerMeterFailure: "PowerMeterFailure",
            PowerSwitchFailure: "PowerSwitchFailure",
            ReaderFailure: "ReaderFailure",
            ResetFailure: "ResetFailure",
            UnderVoltage:"UnderVoltage",
            OverVoltage: "OverVoltage",
            WeakSignalint: "WeakSignalint",
        }

        this.ConnectorTypes = {
            type1 : "type1",
            type2 : "type2",
            chademo : "chademo",
            ccs: "ccs",
            socket:"socket",
            gbtdc:"gbtdc",
            gbtac:"gbtac",
        }

        this.StationTypes = {
            AC: "AC",
            DC: 'DC'
        }

    }

    async getVersion(){

        try {
            return await this.api.get('/station/getVersion')
        } catch (error) {
            console.log("E","getVersion",error)
        }
    }

    async getStationsCount(){

        try {
            return await this.api.get('/station/getStationsCount')
        } catch (error) {
            console.log("E","getStationsCount",error)
        }
    }

    async getStations(offset,limit){

        try {
            return await this.api.get(`/station/getStations?offset=${offset}&limit=${limit}`)
        } catch (error) {
            console.log("E","getStations",error)
        }
    }

    async getStationIndexClientUrls(){

        try {
            return await this.api.get('/station/getStationIndexClientUrls')
        } catch (error) {
            console.log("E","getStationIndexClientUrls",error)
        }
    }


    async getStationIdByUrl(clientUrl){

        try {
            return await this.api.get('/station/getStationIdByUrl/'+clientUrl)
        } catch (error) {
            console.log("E","getStationIdByUrl",error)
        }
    }

    async getStationByUrl(clientUrl){

        try {
            return await this.api.get('/station/getStationByUrl/'+clientUrl)
        } catch (error) {
            console.log("E","getStationByUrl",error)
        }
    }

    async getPartnersStationIds(partner){

        try {
            return await this.api.get('/station/getPartnersStationIds/'+partner)
        } catch (error) {
            console.log("E","getPartnersStationIds",error)
        }
    }

    async getCountStationsByTypes(){

        try {
            return await this.api.get('/station/getCountStationsByTypes')
        } catch (error) {
            console.log("E","getCountStationsByTypes",error)
        }
    }

    async getConstants(){

        try {
            return await this.api.get('/station/getConstants')
        } catch (error) {
            console.log("E","getConstants",error)
        }
    }


    async getConnector(clientUrl,connectorId){

        try {
            return await this.api.get('/station/getConnector/'+clientUrl+"/"+connectorId)
        } catch (error) {
            console.log("E","getConnector",error)
        }
    }



    async addStation(station){

        try {
            return await this.api.post('/station/addStation', station)
        } catch (error) {
            console.log("E","addStation",error)
        }
    }

    async bootNotification(clientUrl,timestamp){

        try {
            return await this.api.post('/station/bootNotification', {clientUrl,timestamp})
        } catch (error) {
            console.log("E","bootNotification",error)
        }
    }

    async statusNotification(clientUrl,connectorId,status,errorCode){

        try {
            return await this.api.post('/station/statusNotification', {clientUrl,connectorId,status,errorCode})
        } catch (error) {
            console.log("E","statusNotification",error)
        }
    }

    async setState(clientUrl,state){

        try {
            return await this.api.post('/station/setState', {clientUrl,state})
        } catch (error) {
            console.log("E","setState",error)
        }
    }

    async heartbeat(clientUrl,timestamp){

        try {
            return await this.api.post('/station/heartbeat', {clientUrl,timestamp})
        } catch (error) {
            console.log("E","heartbeat",error)
        }
    }

    async updateUrl(clientUrl,url){

        try {
            return await this.api.post('/station/updateStationUrl', {clientUrl,url})
        } catch (error) {
            console.log("E","updateStationUrl",error)
        }
    }

    async updateType(clientUrl,type){

        try {
            return await this.api.post('/station/updateStationType', {clientUrl,type})
        } catch (error) {
            console.log("E","updateStationType",error)
        }
    }

    async updateTime(clientUrl,time){

        try {
            return await this.api.post('/station/updateStationTime', {clientUrl,time})
        } catch (error) {
            console.log("E","updateStationTime",error)
        }
    }


    async updateSyncId(clientUrl,syncId){

        try {
            return await this.api.post('/station/updateStationSyncId', {clientUrl,syncId})
        } catch (error) {
            console.log("E","updateSyncId",error)
        }
    }


    async updateName(clientUrl,name){

        try {
            return await this.api.post('/station/updateStationName', {clientUrl,name})
        } catch (error) {
            console.log("E","updateName",error)
        }
    }


    async updateLocation(clientUrl,lat,lon){

        try {
            return await this.api.post('/station/updateStationLocation', {clientUrl,lat,lon})
        } catch (error) {
            console.log("E","updateLocation",error)
        }
    }


    async updateDescription(clientUrl,description){

        try {
            return await this.api.post('/station/updateStationDescription', {clientUrl,description})
        } catch (error) {
            console.log("E","updateDescription",error)
        }
    }


    async updateAddress(clientUrl,address){

        try {
            return await this.api.post('/station/updateStationAddress', {clientUrl,address})
        } catch (error) {
            console.log("E","updateAddress",error)
        }
    }

    ////

    async updateIsActive(clientUrl,state){

        try {
            return await this.api.post('/station/updateIsActive', {clientUrl,state})
        } catch (error) {
            console.log("E","updateIsActive",error)
        }
    }


    async updateConnectorTariff(clientUrl,connectorId,tariff){

        try {
            return await this.api.post('/station/updateConnectorTariff', {clientUrl,connectorId,tariff})
        } catch (error) {
            console.log("E","updateConnectorTariff",error)
        }
    }


    async updateConnectorPower(clientUrl,connectorId,power){

        try {
            return await this.api.post('/station/updateConnectorPower', {clientUrl,connectorId,power})
        } catch (error) {
            console.log("E","updateConnectorPower",error)
        }
    }


    async updateConnectorType(clientUrl,connectorId,type){

        try {
            return await this.api.post('/station/updateConnectorType', {clientUrl,connectorId,type})
        } catch (error) {
            console.log("E","updateConnectorType",error)
        }
    }
}

export default Station