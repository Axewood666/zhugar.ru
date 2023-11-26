//const ws = new WebSocket("ws://zhugar.ru:3005");
const ws = new WebSocket("ws://localhost:3005");


let generateRandName = () => {
    let array = ["Гейдар",
    "Геласий",
    "Гелий",
    "Гельмут",
    "Геннадий",
    "Генри",
    "Генрих",
    "Георге",
    "Георгий",
    "Гераклид",
    "Герасим",
    "Герберт",
    "Герман",
    "Германн",
    "Геронтий",
    "Герхард",
    "Гийом",
    "Гильем",
    "Гинкмар",
    "Глеб",
    "Гней",
    "Гоар",
    "Горацио",
    "Гордей",
    "Градислав"];
    let randIter = Math.floor(Math.random()*(0,array.length))
    document.getElementById('rand_name').innerHTML=array[randIter];
    return array[randIter]
}


ws.addEventListener ("message", function (event){
    const data = JSON.parse(event.data);
    if(data.type === "message"){
        addMessage(data.data);
    }
});

function addMessage(message){
    const node = document.createElement("p");
    const text = document.createTextNode (message);

    node.appendChild(text);
    document.getElementById("chat").appendChild(node);
}

function sendMessage(){
    const message = document.getElementById("message").value;
    if(!message) return false;
    ws.send (JSON.stringify({type: "message", data:randName+': '+message}));
    addMessage(randName+': '+message);
    document.getElementById.value = "";
}


