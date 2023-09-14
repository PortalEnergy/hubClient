import Hubclient from './index.js';

(async () => {
    const client = new Hubclient("https://xn--g1abvhc4e.xn--p1ai/dev/portalenergy", process.env.TESTTOKEN );
    console.log(await client.station.getStations())

    client.events.setOnMessageCallback(function(message){
        console.log("Message",message)
    })
    client.events.run()
})();