import styled, { createGlobalStyle } from "styled-components";
import { flexColumnMixin } from './Mixins'
import { motion } from 'framer-motion'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-moz-selection {
    color: white;
    background: ${({ theme }) => theme.colors.primary}
  }

  ::selection {
    color: white;
    background: ${({ theme }) => theme.colors.primary}
  }

  html {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.Inter};
  }

  body {
    background: ${({ theme }) => theme.colors.background};
  }
`

/* ANIMATION */
export const Backdrop = styled(motion.div)`
  position: absolute;
  bottom: -50%;
  right: -50%;
  border-radius: 100%;
  background: linear-gradient(162deg, rgba(46,204,113,1) 35%, rgba(37,159,89,1) 100%);
  z-index: 9999;
`

/* LAYOUT */

export const CenterChildElement = styled.div`
  height: 100vh;
  ${flexColumnMixin}
`

export const BoxContainer = styled.div`
  max-width: 40rem;
  width: 100%;
  margin-top: 20rem;
  min-height: 58rem;
  background: #fff;
  box-shadow: 0 0 2px rgb(16, 16, 16, 0.4);
  border-radius: 1.2rem;
  position: relative;
  overflow: hidden;
  padding: 0 2rem 7rem 2rem;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 15rem;

`
export const FormContainer = styled.div`
  ${flexColumnMixin}
  justify-content: center;
  gap: 1rem;
`

/* HTML ELEMENTS */

export const HeadingText = styled.h2`
  font-size: 3rem;
  line-height: 3.2rem;
  margin: 0;
`

export const SubHeadingText = styled.p`
  font-size: 1.6rem;
  line-height: 1.8rem;
  color: #a2a2a2;
`
export const Button = styled.button`
  padding: 1.2rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: #fff;
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(162deg, rgba(46,204,113,1) 35%, rgba(37,159,89,1) 100%);
  transition: background .4s, transform .1s;

  &:hover {
    background-position: -36rem;
    transform: translateY(-3px);
  }

  &:focus {
    transform: translateY(0);
  }
`

export const ErrorLabel = styled.label`
  padding: 5px;
  border-left: 3px solid;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-color: ${({ theme }) => theme.colors.danger.border};
  background: ${({ theme }) => theme.colors.danger.background};
  color: ${({ theme }) => theme.colors.danger.text};
`

export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.5rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: border-bottom .1s;

  &:focus {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`

export const MutedLink = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.sub};
  line-height: 1rem;
  color: ${({ theme }) => theme.colors.disabled};
`

export const ActiveLink = styled(MutedLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

/* UTILS */
export const Marginer = styled.div<{ $margin?: string }>`
  margin-bottom: ${props => props.$margin}
`

export const TwoColGrid = styled.div`
  display: flex;
  gap: 1rem;
`