# HubInterface Client for nodejs

Impplement all methods from HubInterface API


## Install

`npm install git://github.com/PortalEnergy/hubClient.git`

# Example 

example.js

```
import Hubclient from 'hubclient';

const APIURL = "...";
Const TOKEN = "...";

(async () => {
    const client = new Hubclient(APIURL, TOKEN);
    console.log(await client.station.getStations())
})();
```

# Run example

`node example.js`