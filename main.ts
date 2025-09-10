radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        led.plot(nx, ny)
        nx += 1
    }
    if (receivedNumber == 0) {
        nx += 1
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    ny = 0
    nx = 0
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})
let nx = 0
let ny = 0
radio.setGroup(1)
ny = 0
nx = 0
basic.forever(function () {
    if (nx == 5) {
        nx = 0
        ny += 1
    }
})
