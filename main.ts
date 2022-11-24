input.onButtonPressed(Button.A, function () {
    if (Tour_A == 0) {
        Chiffre_A = randint(1, 15)
        basic.showNumber(Chiffre_A)
        basic.clearScreen()
        Tour_A += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Tour_A__B == 0) {
        Chiffre_A__B = randint(1, 15)
        basic.showNumber(Chiffre_A__B)
        basic.clearScreen()
        Tour_A__B += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Tour_B == 0) {
        Chiffre_B = randint(1, 15)
        basic.showNumber(Chiffre_B)
        basic.clearScreen()
        Tour_B += 1
    }
})
let Chiffre_A__B = 0
let Chiffre_B = 0
let Chiffre_A = 0
let Tour_A__B = 0
let Tour_B = 0
let Tour_A = 0
Tour_A = 0
Tour_B = 0
Tour_A__B = 0
Chiffre_A = 0
Chiffre_B = 0
Chiffre_A__B = 0
basic.forever(function () {
    if (Tour_A == 1 && (Tour_B == 1 && Tour_A__B == 1)) {
        if (Chiffre_A > Chiffre_B && Chiffre_A > Chiffre_A__B) {
            basic.showString("A Win!")
            Tour_A = 0
            Tour_B = 0
            Tour_A__B = 0
            Chiffre_A = 0
            Chiffre_B = 0
            Chiffre_A__B = 0
        } else if (Chiffre_B > Chiffre_A && Tour_B > Chiffre_A__B) {
            basic.showString("B Win!")
            Tour_A = 0
            Tour_B = 0
            Tour_A__B = 0
            Chiffre_A = 0
            Chiffre_B = 0
            Chiffre_A__B = 0
        } else if (Tour_A__B > Chiffre_A && Tour_A__B > Chiffre_B) {
            basic.showString("AB Win!")
            Tour_A = 0
            Tour_B = 0
            Tour_A__B = 0
            Chiffre_A = 0
            Chiffre_B = 0
            Chiffre_A__B = 0
        }
    }
})
