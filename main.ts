radio.onReceivedValue(function (name, value) {
    if (name == "Alan o atr") {
        Alan_o_atr = value
    }
    if (name == "Atlante") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, value)
    }
    if (name == "Atras") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, value)
    }
    if (Alan_o_atr == 0) {
        if (name == "izq") {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, value)
        }
        if (name == "der") {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, value)
        }
    } else {
        if (name == "izq") {
            maqueen.motorStop(maqueen.Motors.M2)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, value)
        }
        if (name == "der") {
            maqueen.motorStop(maqueen.Motors.M1)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, value)
        }
    }
    if (name == "parar") {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (name == "luz iz") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    }
    if (name == "luz de") {
        if (value == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        } else {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
    }
    if (name == "neopixel") {
        if (value == 1) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.showColor(neopixel.colors(NeoPixelColors.Green))
        }
    }
})
let neopixel2 = 0
let luz_de = 0
let luz_iz = 0
let Alan_o_atr = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
radio.setGroup(167)
music.playMelody("C5 C5 C5 - - - - - ", 120)
basic.forever(function () {
    if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Up)) {
        radio.sendValue("Atlante", 255)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Down)) {
        radio.sendValue("Atras", 255)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Left)) {
        radio.sendValue("izq", 255)
    } else if (CrocoKit_Input.Rocker(AnalogPin.P0, AnalogPin.P1, CrocoKit_Input.enRocker.Right)) {
        radio.sendValue("der", 255)
    } else {
        radio.sendValue("parar", 0)
    }
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P3)) {
        luz_iz += 1
        if (luz_iz == 2) {
            luz_iz = 0
        }
        radio.sendValue("luz iz", luz_iz)
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P3)) {
        luz_de += 1
        if (luz_de == 2) {
            luz_de = 0
        }
        radio.sendValue("luz de", luz_de)
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P3)) {
        radio.sendValue("Alan o atr", 0)
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P3)) {
        neopixel2 += 1
        if (neopixel2 == 2) {
            neopixel2 = 0
        }
        radio.sendValue("neopixel", neopixel2)
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P3)) {
        radio.sendValue("Alan o atr", 1)
    }
})
