import { Backdrop, Marginer, BoxContainer, TopContainer, HeadingText, SubHeadingText, MutedLink, ActiveLink } from "../../styles/Global"
import { useState } from 'react'
import { FormFields } from "../../types/auth"
import Form from '../../components/Form'
import axiosConfig from "../../utils/axiosConfig"
import { useNavigate } from "react-router-dom";

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

export default () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [isSignup, setIsSignup] = useState<boolean>(false)

  const navigate = useNavigate()

  const signupFormDetails = [
    {
      fieldName: 'firstName',
      placeholder: 'Enter your first name',
      col: true
    },
    {
      fieldName: 'lastName',
      placeholder: 'Enter your last name',
      col: true
    },
    {
      fieldName: 'username',
      placeholder: 'Create your username',
    },
    {
      fieldName: 'email',
      type: 'email',
      placeholder: 'Enter your email'
    },
    {
      fieldName: 'password',
      type: 'password',
      placeholder: 'Create your password'
    }
  ]

  const loginFormDetails = [
    {
      fieldName: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      default: 'user@api.com'
    },
    {
      fieldName: 'password',
      type: 'password',
      placeholder: 'Create your password',
      default: '123'
    }
  ]

  const playBackdropAnimation = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false)
      setIsSignup(isSignup => !isSignup)
    }, expandingTransition.duration * 1000 - 1500)
  }

  const login = (data: FormFields) => {
    console.log('data', data)
    axiosConfig.post('http://localhost:8080/auth/login', data)
      .then((response) => console.log(response))
      .catch((error) => navigate('/home'))
  }

  const signup = (data: FormFields) => {
    console.log('data', data)
    axiosConfig.post('http://localhost:8080/auth/register', data)
      .then((response) => console.log(response))
      .catch((error) => navigate('/home'))
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
            <Form resetTrigger={isSignup} retrieveForm={signup} formDetails={signupFormDetails} buttonText='Sign me up'>
            </Form>
            <Marginer $margin="1rem" />
            <MutedLink>
              Already have an account?&nbsp;
              <ActiveLink onClick={playBackdropAnimation}>
                Log In
              </ActiveLink>
            </MutedLink>
          </>
        ) : (
          <>
            <Form resetTrigger={isSignup} retrieveForm={login} formDetails={loginFormDetails} buttonText='Log me in' />
            <Marginer $margin="1rem" />
            <MutedLink>
              Don't have an account?&nbsp;
              <ActiveLink onClick={playBackdropAnimation}>
                Sign Up
              </ActiveLink>
            </MutedLink>
          </>
        )
      }
    </BoxContainer>
  )
}