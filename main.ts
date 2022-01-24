naturalScience.microIoT_setBrightness(100)
basic.forever(function () {
    basic.pause(2000)
    naturalScience.requstdata()
    naturalScience.clearOLEDRow(1)
    naturalScience.setOLEDShowNumber(1, 16, 1, naturalScience.getTVOC(CT.CO2))
    if (naturalScience.getTVOC(CT.CO2) < 500) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0x00ff00)
    }
    if (naturalScience.getTVOC(CT.CO2) > 500 && naturalScience.getTVOC(CT.CO2) < 750) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xffff00)
    }
    if (naturalScience.getTVOC(CT.CO2) > 1000 && naturalScience.getTVOC(CT.CO2) < 2500) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xff8000)
    }
    if (naturalScience.getTVOC(CT.CO2) > 2500 && naturalScience.getTVOC(CT.CO2) < 5000) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xff0000)
        music.setVolume(100)
        soundExpression.slide.playUntilDone()
    }
    if (naturalScience.getTVOC(CT.CO2) > 5000) {
        naturalScience.microIoT_setIndexColor(naturalScience.microIoT_ledRange(1, 4), 0xff00ff)
        music.setVolume(255)
        soundExpression.slide.playUntilDone()
    }
})
