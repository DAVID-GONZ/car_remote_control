radio.onReceivedString(function (receivedString) {
    value = receivedString
    if (value.compare("A") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    } else if (value.compare("B") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
    } else if (value.compare("C") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 150)
    } else if (value.compare("D") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
    } else if (value.compare("I") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        Tinybit.RGB_Car_Program().show()
        Tinybit.RGB_Car_Program().clear()
    } else if (value.compare("E") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        Tinybit.RGB_Car_Program().show()
    } else if (value.compare("F") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        Tinybit.RGB_Car_Program().show()
    } else if (value.compare("G") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        Tinybit.RGB_Car_Program().show()
    } else if (0 == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        Tinybit.RGB_Car_Program().show()
    } else if (value.compare("0") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
let value = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
