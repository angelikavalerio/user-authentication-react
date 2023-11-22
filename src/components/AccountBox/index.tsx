import { motion } from 'framer-motion'
import styled from "styled-components"
import { SingleGrid } from "../../styles/Global";
import { Marginer, BoxContainer, TopContainer, HeadingText, SubHeadingText, MutedLink, ActiveLink } from "../../styles/Global"
import { useState } from 'react'
import Form from '../Form'
import Input from '../Input'

const Backdrop = styled(motion.div)`
  position: absolute;
  bottom: -50%;
  right: -50%;
  border-radius: 100%;
  background: linear-gradient(162deg, rgba(46,204,113,1) 35%, rgba(37,159,89,1) 100%);
  z-index: 9999;
`

const backdropVariants = {
  expanded: {
    width: "1500px",
    height: "1500px",
  },
  collapsed: {
    width: "100px",
    height: "100px",
  }
}

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30
}

interface Form {
  firstName?: string,
  lastName?: string,
  username?: string,
  email: string,
  password: string
}

export default () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isSignup, setIsSignup] = useState<boolean>(true)
  const [formData, setFormData] = useState<Form>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  })

  const signupFormDetails = [
    {
      fieldName: 'firstName',
      ref: 'firstName',
      placeholder: 'Enter your first name',
      errorMessage: 'The input is invalid!',
      col: true
    },
    {
      fieldName: 'lastName',
      ref: 'lastName',
      placeholder: 'Enter your last name',
      col: true
    },
    {
      fieldName: 'username',
      ref: 'username',
      placeholder: 'Create your username',
    },
    {
      fieldName: 'email',
      ref: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      errorMessage: 'The input is invalid!',
    },
    {
      fieldName: 'password',
      ref: 'password',
      type: 'password',
      placeholder: 'Create your password',
      errorMessage: 'The input is invalid!',
    }
  ]

  const loginFormDetails = [
    {
      fieldName: 'email',
      ref: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      errorMessage: 'The input is invalid!',
    },
    {
      fieldName: 'password',
      ref: 'password',
      type: 'password',
      placeholder: 'Create your password',
      errorMessage: 'The input is invalid!',
    }
  ]

  const playBackdropAnimation = () => {

    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false)
      setIsSignup(isSignup => !isSignup)
    }, expandingTransition.duration * 1000 - 1500)
  }

  return (
    <BoxContainer>
      <Backdrop
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        variants={backdropVariants}
        transition={expandingTransition}
      />
      <TopContainer>
        {
          isSignup ? (
            <>
              <HeadingText>Create</HeadingText>
              <HeadingText>New Account</HeadingText>
              <Marginer $margin="8px" />
            </>
          ) : (
            <>
              <HeadingText>Login</HeadingText>
              <HeadingText>Account</HeadingText>
              <Marginer $margin="8px" />
            </>
          )
        }
        <SubHeadingText>Enter your details below.</SubHeadingText>
      </TopContainer>
      <Marginer $margin="7rem" />
      {
        isSignup ? (
          <>
            <Form setFormData={setFormData} formDetails={signupFormDetails} buttonText='Sign me up'>

            </Form>
            <Marginer $margin="1rem" />
            <MutedLink>
              Already have an account?&nbsp;
              <ActiveLink onClick={playBackdropAnimation}>
                Login
              </ActiveLink>
            </MutedLink>
          </>
        ) : (
          <>
            <Form setFormData={setFormData} formDetails={loginFormDetails} buttonText='Log me in' />
            <Marginer $margin="1rem" />
            <MutedLink>
              Don't have an account?&nbsp;
              <ActiveLink onClick={playBackdropAnimation}>
                Signup
              </ActiveLink>
            </MutedLink>
          </>
        )
      }
    </BoxContainer>
  )
}