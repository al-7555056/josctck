radio.onReceivedValue(function (name, value) {
	
})
let luz_de = 0
let luz_iz = 0
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
radio.setGroup(167)
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
    	
    }
})
