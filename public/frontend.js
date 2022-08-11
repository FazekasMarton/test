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

fetch('https://guideianangel.herokuapp.com/data')
    .then((response) => response.json())
    .then((data) => function(){
    document.getElementById("text").innerText=data["fname"]+" "+data["lname"];
    console.log(data)
    });
}