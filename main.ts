radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    }
    if (receivedNumber == 3) {
        maqueen.motorStop(maqueen.Motors.M2)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    }
    if (receivedNumber == 4) {
        maqueen.motorStop(maqueen.Motors.M1)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    }
    if (receivedNumber == 0) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let neopixel2 = 0
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
radio.setGroup(167)
music.playMelody("C5 C5 C5 - - - - - ", 120)
basic.forever(function () {
    if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Up)) {
        radio.sendNumber(1)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Down)) {
        radio.sendNumber(2)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Left)) {
        radio.sendNumber(3)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Right)) {
        radio.sendNumber(4)
    } else {
        radio.sendNumber(0)
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P3)) {
        radio.sendNumber(5)
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P3)) {
        radio.sendNumber(6)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P3)) {
        radio.sendNumber(7)
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P3)) {
        neopixel2 += 1
        if (neopixel2 == 2) {
            neopixel2 = 0
        }
        radio.sendValue("neopixel", neopixel2)
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P3)) {
        radio.sendNumber(8)
    }
})
