const data = [
    {
        name: "Martin",
        age: 12,
        sex: "m"
    },
    {
        name: "Zoe",
        age: 18,
        sex: "f" 
    },
    {
        name: "Victor",
        age: 34,
        sex: "m"
    }
]
function press(){
    var xhttp = new XMLHttpRequest();
    var send = { "name":"John", "age":30, "car":null };
    var sendString = JSON.stringify(send);
    alert(sendString);
    xhttp.send(sendString);
/*     fetch('https://guideianangel.herokuapp.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data)); */
}