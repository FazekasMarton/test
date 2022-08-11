var text = "empty"
async function press(){
await fetch('https://guideianangel.herokuapp.com/data')
    .then(response => response.json())
    .then(data => text=data["fname"]+" "+data["lname"]);
    console.log(text)
    document.getElementById("text").innerText=text;
}