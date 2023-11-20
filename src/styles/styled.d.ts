import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: '#2ecc71',
      secondary: '#259f59',
      yellow: '#f1c40f',
      disabled: '#a2a2a2',
      shadow: 'rgb(16, 16, 16, 0.4)',
      darkGray: '#a2a2a2',
      background: '#f9f9f9',
      white: '#fff',
      black: '#000',
      border: '#dfe4ea'
    },
    fonts: {
      Inter: 'Inter'
    },
    fontSizes: {
      sub: '1.2rem'
    },
    paddings: {
      container: '0 2rem'
    },
    borderRadius: {
      sm: '5px'
    }
  }
}