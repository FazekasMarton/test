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
    /* var options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch('/data', options) */
    fetch('http://localhost:7000/data')
    .then((response) => response.json())
    .then((data) => console.log(data));
}