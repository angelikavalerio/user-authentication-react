import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    primary: '#2ecc71',
    secondary: '#259f59',
    warning: '#f1c40f',
    danger: {
      border: '#e74c3c',
      background: '#e8c6c3',
      text: '#5e211a'
    },
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
    sub: '1.2rem',
    p: '1.4rem',
    header: '1.8rem'
  },
  paddings: {
    container: '0 2rem'
  },
  borderRadius: {
    sm: '5px'
  }
}