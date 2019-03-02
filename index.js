const apiFunctions = require('./apiFunctions');
const express = require('express')
const app = express()
var cors = require('cors');
var port = process.env.PORT || 8080;

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/apipl', async (request, response) => {
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

    const a = await apiFunctions.callToThirdPartyAPI('pl').then(function(res) {
        console.log(res);
        return response.status(200).json(res);
    });
})

app.get('/apipt', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('pt').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apies', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('es').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apiit', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('it').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

  app.get('/apiru', async (request, response) => {
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
  
    const a = await apiFunctions.callToThirdPartyAPI('ru').then(function(res) {
        console.log(res);
        return response.status(200).json(res);
    });
  })

app.get('/apijp', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('ja').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apikr', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('korean').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apise', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('swedish').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apifr', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('fr').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apide', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('de').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apiar', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('ar').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apihi', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('hindi').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})

app.get('/apino', async (request, response) => {
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

  const a = await apiFunctions.callToThirdPartyAPI('norwegian').then(function(res) {
      console.log(res);
      return response.status(200).json(res);
  });
})


// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})