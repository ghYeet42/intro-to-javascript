let aquarium = document.getElementById("aquarium")

let turtle = new RealTurtle.default(aquarium, {autoStart: true})

turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('brown')


turtle.beginPath()

///larg sq
for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.right(90)
    turtle.forward(50)
}

turtle.closePath()
turtle.fill()


turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('black')

///windo 1
turtle.setPosition(160, 60)

for (let i = 0; i < 4; i++) {
    turtle.forward(12.5)
    turtle.right(90)
    turtle.forward(12.5)
}

turtle.closePath()
turtle.fill()


turtle.setStrokeColorRGB(234, 123, 40)
turtle.setFillStyle('brown')

///windo 2
turtle.setPosition(215, 60)

for (let i = 0; i < 4; i++) {
    turtle.forward(12.5)
    turtle.right(90)
    turtle.forward(12.5)
}

turtle.closePath()
turtle.fill()


///dorr
turtle.setPosition(192, 125)

for (let i = 0; i < 4; i++) {
    turtle.forward(30)
    turtle.right(90)
    turtle.forward(15)
    turtle.right(90)
}

///sealing
turtle.setPosition(150, 25)

turtle.right(70) 
turtle.forward(57.5)
turtle.right(45)
turtle.forward(48)
turtle.right(155)
turtle.forward(98)


turtle.closePath()
turtle.fill()


turtle.setPosition(20, 60)

for (let i = 0; i < 4; i++) {
    turtle.forward(50)
    turtle.right(90)
    turtle.forward(50)
}

turtle.arc(50, 360)
