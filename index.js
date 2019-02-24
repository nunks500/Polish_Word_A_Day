const apiFunctions = require('./apiFunctions');
const express = require('express')
const app = express()
var cors = require('cors');
const port = 3000

app.get('/', async (request, response) => {

     // use it before all route definitions
     app.use(cors({origin: 'null'}));
    
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    response.setHeader('Access-Control-Allow-Credentials', true);

    const a = await apiFunctions.callToThirdPartyAPI().then(function(res) {
        console.log(res);
        return response.status(200).json(res);
    });
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})