const apiFunctions = require('./apiFunctions');
const express = require('express')
const app = express()
var cors = require('cors');
var port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));

  // Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('/api', async (request, response) => {
    console.log('Received request');
    
     // use it before all route definitions
    app.use(cors({origin: 'null'}));
    
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', '*');

    app.use(cors({origin: '*'}));

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