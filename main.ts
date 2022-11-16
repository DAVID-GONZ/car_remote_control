radio.onReceivedString(function (receivedString) {
    ITEM = receivedString
    if (0 == ITEM.compare("A")) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 150)
    } else if (ITEM.compare("B") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 150)
    } else if (ITEM.compare("C") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinLeft, 150)
    } else if (ITEM.compare("D") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_SpinRight, 150)
    } else if (ITEM.compare("e") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
        Tinybit.RGB_Car_Program().show()
        Tinybit.RGB_Car_Program().clear()
    } else if (ITEM.compare("E") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        Tinybit.RGB_Car_Program().show()
    } else if (ITEM.compare("F") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Green)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Green))
        Tinybit.RGB_Car_Program().show()
    } else if (ITEM.compare("G") == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Blue)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Blue))
        Tinybit.RGB_Car_Program().show()
    } else if (0 == 0) {
        Tinybit.RGB_Car_Big(Tinybit.enColor.Yellow)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Yellow))
        Tinybit.RGB_Car_Program().show()
    } else if (ITEM.compare("0") == 0) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Stop, 0)
    }
})
let ITEM = ""
radio.setGroup(1)
radio.setTransmitPower(7)
basic.showIcon(IconNames.Heart)
