// Zadanie 1
const book = {
    title: "Macbeth",
    author: "William Shakespeare",
    publ_date: 1623,
    task1: function() {
        console.log(this.title + " - " + this.author + " (" + this.publ_date + ")");
    }
};

book.task1()

// Zadanie 2
const student = {
    fName: "Piotr",
    lName: "Dawidowski",
    albumNr: "w68299",
    grades: [3, 4.5, 3.5],
    task2: function() {
        console.log((this.grades[0] + this.grades[1] + this.grades[2]) / 3);
    }
}

student.task2()

// Zadanie 3, 4
const car = {
    brand: "Honda",
    model: "Jazz",
    man_yr: "2003",
    color: "limegreen",
    velocity: 160,
    task3Vless: function() {
        this.velocity -= 31;
    },
    task3Vmore: function() {
        this.velocity += 26;
    },
    task3CarInfo: function() {
        console.log(this.brand + " " + this.model + " (" + this.man_yr + "), " + "Kolor: " + this.color + ", Prędkość: " + this.velocity)
    },
    task4CarAge: function() {
        return this.man_yr;
    }
}

car.task3Vless()
car.task3Vmore()
car.task3CarInfo()
car.task4CarAge()

// Zadanie 5,6
const rectangle = {
    a: document.getElementById("bok1").value,
    b: document.getElementById("bok2").value,
    task5Area: function() {
        console.log(a*b)
    },
    task5Perimeter: function() {
        console.log(2*a + 2*b)
    },
    task5IfSquare: function() {
        if (a == b) {
            console.log("Prostokąt jest kwadratem!")
        }
        else {
            console.log("Prostokąt nie jest kwadratem!")
        }
    }
}