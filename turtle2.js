let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})


function polygon(sides, size = 20) {
    for (i = 0; i < sides; i++) {
        turtle.forward(size)
        turtle.right(360/sides)
    }
}


for (i = 0; i < 5; i++) {
    polygon((Math.random() * 10) + 3)
}

polygon()