

var socket = io();

  

function showClients(){

    this.httpGet("localhost:3000/check");
    
} 

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}





