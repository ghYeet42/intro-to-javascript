console.log("hello world")

let myAvg = 99

if (myAvg > 0 && myAvg < 59.99) {
    console.log("Your letter grade is an F.")
} else if (myAvg < 69.99 && myAvg > 60) {
    console.log ("Your letter grade is a D.")
} else if (myAvg < 79.99 && myAvg > 70) {
    console.log ("Your letter grade is a C.")
} else if (myAvg < 89.99 && myAvg > 80) {
    console.log ("Your letter grade is a B.")
} else if (myAvg < 99.9 && myAvg > 90) {
    console.log ("Your letter grade is a A.")
} else if (myAvg >= 100) {
    console.log ("Your letter grade is a A+.")
} else if (myAvg <= 0) {
    console.log ("..you're screwed.")
}

let myList = ["Filet", "Fileto", "Filetomignon", "Jellyfam", "Guapo", "Guap", "Guavahector", "Jellyman" ]
let myList1 = [5, 20, 400]


for (let item of myList) {
    console.log(item)
}

for (let item of myist1) {
    console.log(item) * 6
}


