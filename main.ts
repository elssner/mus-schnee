input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.LongClick), function () {
    basic.showString("Schneeflöckchen")
})
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Click), function () {
    music.playMelody("E F G G A D D - ", 120)
    music.playMelody("D E F F G E E E ", 120)
    music.playMelody("E F G G C5 B A - ", 120)
    music.playMelody("G F E F D C C C ", 120)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Click), function () {
    _("Schnee-flöck-chen, Weiß-röck-chen,")
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    _("wann kommst du ge-schneit?")
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    _("Du wohnst in den Wol-ken,")
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    _("dein Weg ist so weit.")
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Double))
})
function _ (Kommentar: string) {
	
}
