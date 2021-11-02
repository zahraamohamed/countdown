input.onButtonPressed(Button.A, function () {
    i = 9
    basic.showNumber(i)
})
input.onButtonPressed(Button.B, function () {
    while (i > 0) {
        i += -1
        basic.pause(1000)
        basic.showNumber(i)
    }
    basic.showIcon(IconNames.SmallHeart)
})
let i = 0
basic.showIcon(IconNames.Heart)
i = 9
