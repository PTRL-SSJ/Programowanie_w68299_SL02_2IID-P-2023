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
    // console.log("Temperatura w F: " + tempF)
}

// Task 3
// tablica złożona z 10 losowych liczb (-20,20)

function task3() {
    lista3 = []
    for(var i=1; i<20; i++) {
        lista3.push(Math.floor((Math.random() * 40) - 20))
    }
    // console.log(lista3) // sprawdz czy lista tworzy sie dobrze
    console.log(lista3)
    var sum = 0
    for (let j = 0; j < lista3.length; j++) {
        sum += lista3[j]
    }

    var lista3Parz = ""
    for (let k = 0; k < lista3.length; k++) {
        if(lista3[k] % 2 == 0) {
            lista3Parz += lista3[k] + ", "
        }
        else {
            // pass
        }
    }

    var lista3Razy3 = ""
    for (let l = 0; l < lista3.length; l++) {
        lista3Razy3 += lista3[l] * 3 + ", "
    }

    lista3.push(68299)

    var average = lista3.reduce((a, b) => a + b, 0) / lista3.length // wynik wychodzi duzy przed dodany wcześniej nr albumu

    var count = 0
    var element = 68299

    for (let m = 0; m < lista3.length; m++) {
        if(lista3[m] == element) {
            count += 1
        }
    }

    document.getElementById("3Suma").innerHTML = sum
    document.getElementById("3Even").innerHTML = lista3Parz
    document.getElementById("3Razy3").innerHTML = lista3Razy3
    document.getElementById("3NrIndex").innerHTML = lista3.indexOf(68299)
    document.getElementById("3Srednia").innerHTML = average
    document.getElementById("3Max").innerHTML = Math.max(...lista3)
    document.getElementById("3Count").innerHTML = count

}

// Task 4
function Fibon() {
    const number = document.getElementById("4Liczba").value;
    let n1 = 0, n2 = 1, nextTerm;
    var Fibo = ""
    for (let i = 1; i <= number; i++) {
        Fibo += n1 + ", "
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    document.getElementById("4Fibo").innerHTML = Fibo
}