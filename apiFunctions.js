var axios = require('axios');
var parseString = require('xml2js').parseString;

async function callToThirdPartyAPI(){
    const xml2parse = await call();
   
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

    return word;
}
function call(){
    return new Promise(resolve => {
        axios.get('https://wotd.transparent.com/rss/pl-widget.xml',
        {headers:
          {'Content-Type': 'text/xml'}
        }).then(res=>{
          resolve(res.data);
        }).catch(err=>{console.log('Something went wrong :/')});
});

}

module.exports.callToThirdPartyAPI = callToThirdPartyAPI;
