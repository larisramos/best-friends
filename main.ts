radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        basic.pause(2000)
        basic.showLeds(`
            . # . . .
            # # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    } else if (receivedNumber == 3) {
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        basic.clearScreen()
        basic.showLeds(`
            . # . . .
            # # # . .
            # # # . .
            . # # . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(3)
})
radio.setTransmitPower(1)
radio.setGroup(212)
basic.showLeds(`
    . # . . .
    # # # . .
    # # # . .
    . # # . .
    . . # . .
    `)
