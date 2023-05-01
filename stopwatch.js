let ms = 0

let secs = 0

let mins = 0

let digital = document.getElementById("digital")

let interval;

function startTheTime () {

    resetTheTime()
    
    interval = setInterval(function () {
       
        ms = ms + 10
        
        if (ms >= 1000) {
            secs = secs + 1
            ms = 0
        }

        if (secs >= 60) {
            mins = mins + 1
            secs = 0
        }

        digital.innerHTML = mins + ':' + String(secs).padStart(2, '0') + ':' + ms

    }, 10)

}


function stopTheTime () {
    clearInterval(interval)
}


function resetTheTime () {
       
        stopTheTime()

        ms = 0
        secs = 0
        mins = 0

        digital.innerHTML = '00:00:00'

}