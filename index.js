const apiFunctions = require('./apiFunctions');
const express = require('express')
const app = express()
var cors = require('cors');
const port = 3000

app.get('/api', async (request, response) => {
    console.log('Received request');
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