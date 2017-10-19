$(function(){

    //###################
    //### LOCAL JSON ####
    //###################

    /**
    * You have access to "localTweet" below because it is defined in ./data/twitter.json
    * And then that file is included in index.html
    *
    * Notice JSON.stringify() below
    * There is 1 other built in JSON object method: JSON.parse()
    * Here is a link to the built-in JSON object for JavaScript
    * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
    */
    $('#localOutput').html(JSON.stringify(localTweet, null, 4));
    
    /**
    * Feel free to add additional local JSON to play with! In order to be successful doing that,
    * please follow these steps:
    * 1. Create a json file in 5_json_playground/data something like 5_json_playground/data/myFile.json
    * 2. Open myFile.json and DECLARE A VARIABLE and assign the value to be null for now, something like: var myObject = null;
    * 3. Find valid JSON on the Internet or write it yourself. You can find some examples here: https://www.sitepoint.com/10-example-json-files/
    * 4. Copy the entire JSON text
    * 5. Go to myFile.json and paste the JSON where you have null
    * 6. Add myFile.json to index.html (see the bottom of the file)
    * 7. Come back here and you can work with myObject using JSON.stringify() or JSON.parse() :)
    */


    //######################################
    //### JSON RESPONSE FROM GOOGLE MAPS ###
    //######################################

    
    // Feel free to change this address
    // Even experiment with something like "Miami" or "London"
    var address = '1520 2nd St, Santa Monica, CA 90401';


    /**
    * We will cover everything below here in more detail on Tuesday :)
    */
    var encoded_address = encodeURIComponent(address);
    console.log("Without Encoding", address);
    console.log("With Encoding", encoded_address);

    //The GET request that Google expects:
    var request_url = "https://maps.googleapis.com/maps/api/geocode/json?&address=" + encoded_address
    console.log(request_url);

    //Make an API request to the request_url and write an anonymous function to handle the response
    $.get(request_url, function(response){
        console.log(response);

        $('#output').html(JSON.stringify(response, null, 4));
    });


});