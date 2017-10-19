$(function(){

    //Add HTML to the DOM
    $('body').prepend('<h1>Very Top</h1>');

    //Change the style in the DOM
    $('li').css('border','1px solid gray');

    //Select a list of objects :)
    //Then iterate those objects
    $('li').each(function(){
        var text = $(this).text(); // this is a "getter"
        console.log(text);

        //You can EVEN reassign the text and then inject it BACK into the DOM - WHAT?! WHAT?!
        text = text + " is a great city";
        $(this).text(text); // this is a "setter"
    });

});