const fs = require('fs');

const request = require('request');

request('http://example.edu', (error, response, body) => {
    console.log('error:', error); // Print the error if occurs 
    console.log('statusCode:', response && response.statusCode); // Print the response's status code
    fs.writeFile('./index.html', body, (err) => {
        //writes the data 
        if (err) {
            console.error(err)
            //returns error
            return
         }   
            console.log(`Downloaded andsaved ${body.length} bytes to ./index.html.`);
          //file written successfully
     });


});