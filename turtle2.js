let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setSpeed(0.4)

function polygon(sides, size) {
    for (i = 0; i < sides; i++) {
        turtle.forward(size)
        turtle.right(360/sides)
    }
}

polygon(3, 2)