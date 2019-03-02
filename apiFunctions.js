var axios = require('axios');
var parseString = require('xml2js').parseString;

async function callToThirdPartyAPI(lang){
    const xml2parse = await call(lang);
   
    /*var word;
    parseString(xml2parse, function (err, result) {
        console.log(result['xml']['words'][0]['word'][0]);
        word = result['xml']['words'][0]['word'][0];
    });*/

    const word = await new Promise(resolve => parseString(xml2parse, (err, result) => {
        if (err) reject(err);
        //else resolve(result['xml']['words'][0]['word'][0]);
        else resolve(JSON.stringify(result));
      }));
    console.log('Sending data');
    return word;
}
function call(lang){
    return new Promise(resolve => {
        axios.get('https://wotd.transparent.com/rss/'+ lang +'-widget.xml',
        {headers:
          {'Content-Type': 'text/xml'}
        }).then(res=>{
          resolve(res.data);
        }).catch(err=>{console.log('Something went wrong :/')});
});

}

module.exports.callToThirdPartyAPI = callToThirdPartyAPI;
