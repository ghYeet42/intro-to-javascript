let myCanvas = document.getElementById("myCanvas")

paper.setup(myCanvas)

let isMouseDown = false

function drawCircle (e) {
    console.log(e)

if (isMouseDown) {

        let circle = new paper.Path.Circle({
            radius: Math.random() * 15,
            center: {
                x: e.x,
                y: e.y
            }
        })

        let red = Math.random() * 255

        let green = Math.random() * 255

        let blue = Math.random() * 255

        circle.fillColor = "rgb(" + red + "," + green + "," + blue + ")"

    }

}

function mouseUp () {
    isMouseDown = false
}

function mouseDown () {
    isMouseDown = true
}

function mouseMove () {
}


myCanvas.addEventListener("mouseup", mouseUp)
myCanvas.addEventListener("mousedown", mouseDown)
myCanvas.addEventListener("mousemove", drawCircle)
