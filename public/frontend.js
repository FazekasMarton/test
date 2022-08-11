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
    $.post("/request",
    {
       name: "viSion",
       designation: "Professional gamer"
    },
    function (data, status) {
       console.log(data);
    });
/*     fetch('https://guideianangel.herokuapp.com/data')
    .then((response) => response.json())
    .then((data) => console.log(data)); */
}