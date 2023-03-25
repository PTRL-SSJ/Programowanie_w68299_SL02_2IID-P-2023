function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
}

function wypParz() {
    console.log("Zadanie 2");
    var Zadanie2 = []
    for(i=0; i<101; i++) {
        if(i % 2 == 0) {
            Zadanie2.push(i)
        }
    }
    console.log(Zadanie2)
}

function Zadanie3() {
    var liczba1 = document.getElementById("Z3L1").value
    var liczba2 = document.getElementById("Z3L2").value
    var Z3W = Number(liczba1) + Number(liczba2)
    document.getElementById("Z3W").innerHTML = Z3W

}

/* function Zadanie5() {
losuje liczbe z przedzialu 0-100
uzytkownik wprowadza liczbe w inputa mającego obok przycisk sprawdzający
komunikat o tym czy liczba podana jest wieksza/mniejsza/taka sama jak wylosowana uprzednio liczba
Po zgadnieciu strona ma zostac przeladowana aby rozpoczac nowa gre
(tutaj ustawilbym po zgadnieciu timer na 10 sekund do resetu, aby mozna bylo przeczytac o wygranej i o przeladowaniu za x sekund)
}
*/