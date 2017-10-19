// run this function when the document is loaded
window.onload = function() {
    // create a couple of elements in an empty HTML page
    var header = document.createElement("h1");
    var header_text = document.createTextNode("Hello dynamic world!");
    header.appendChild(header_text);
    document.body.appendChild(header);
}