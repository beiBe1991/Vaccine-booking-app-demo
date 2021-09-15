import { basicTheme } from "./colors"

const themes = {
    'basic': basicTheme,
}

const currentTheme = 'basic'

const Colors = themes[currentTheme]

export { Colors }