let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setSpeed(0.4)

turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('red')


turtle.beginPath()

///larg sq
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.right(90)
    turtle.forward(50)
}

turtle.closePath()
turtle.fill()


///sealing

turtle.setStrokeColorRGB(0, 0, 0)
turtle.setFillStyle('black')

turtle.setPosition(150, 25)

turtle.beginPath()

turtle.right(70) 
turtle.forward(55)
turtle.right(41)
turtle.forward(52)
turtle.right(159)
turtle.forward(100)


turtle.closePath()
turtle.fill()

turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('CornflowerBlue')

///windo 1
turtle.setPosition(173, 60)

turtle.beginPath()

for (let i = 0; i < 4; i++) {
    turtle.forward(12.5)
    turtle.right(90)
    turtle.forward(12.5)
}

turtle.closePath()
turtle.fill()


turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('CornflowerBlue')

///windo 2
turtle.setPosition(227, 60)

turtle.beginPath()

for (let i = 0; i < 4; i++) {
    turtle.forward(12.5)
    turtle.right(90)
    turtle.forward(12.5)
}

turtle.closePath()
turtle.fill()


turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('Darkgoldenrod')

///dorr
turtle.setPosition(192, 125)

turtle.beginPath()


for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.right(90)
    turtle.forward(15)
    turtle.right(90)
}

turtle.closePath()
turtle.fill()


urtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('skyblue')


turtle.setPosition(0, 0)

turtle.beginPath()


for (let i = 0; i < 4; i++) {
    turtle.forward(90)
    turtle.right(300)
}


turtle.arc(30, 360)

