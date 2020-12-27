pixel.setColor(0xb09eff)
pixel.setBrightness(20)
let strip = light.createStrip(pins.D1, 2)
let led1 = 23
let led2 = 1023
forever(function () {
    for (let index = 0; index < 1000; index++) {
        pins.A0.analogWrite(led1)
        led1 += 1
    }
    pause(3)
    for (let index = 0; index < 1000; index++) {
        pins.A0.analogWrite(led1)
        led1 += -1
    }
    pause(3)
})
forever(function () {
    pins.A2.analogWrite(led2)
    for (let index = 0; index < 900; index++) {
        led2 += -1
    }
    pause(2)
    pins.A2.analogWrite(led2)
    for (let index = 0; index < 900; index++) {
        led2 += 1
    }
    pause(2)
})
forever(function () {
    strip.showAnimation(light.cometAnimation, randint(10, 60))
    pause(100)
    strip.show()
})
