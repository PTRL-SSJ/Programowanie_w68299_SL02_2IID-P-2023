// Task 1
function ifAdult() {
    var age = document.getElementById("age").value
    if(age < 18) {
        document.getElementById("ifAdult").innerHTML = "nie jestes dorosly"
    }
    else {
        document.getElementById("ifAdult").innerHTML = "jestes dorosly"
    }
}

// Task 2
function celcToFahr() {
    tempC = document.getElementById("Ctemp").value
    tempF = tempC * (9/5) + 32
    document.getElementById("Ftemp").innerHTML = tempF
    console.log("Temperatura w F: " + tempF)
}

// Task 3
// tablica złożona z 10 losowych liczb (-20,20)

function randList() {
    lista3 = []
    for(var i=1; i<20; i++) {
        lista3.append(Math.floor((Math.random() * 40) - 20))
    }
    console.log(lista3) // sprawdz czy lista tworzy sie dobrze
}