import styled from "styled-components";
import { SingleGrid, Tooltip } from "../../styles/Global";
import { flexColumnMixin } from "../../styles/Mixins";
import PasswordInput from "../PasswordInput";
import { Input, TwoColInput, MutedLink, ActiveLink, Button } from "../../styles/Global";
import { useReducer, useEffect } from "react";

const FormContainer = styled.div`
  ${flexColumnMixin}
  justify-content: center;
  gap: 1rem;
`
interface FormDetails {
  fieldName: string,
  ref: string,
  type?: string,
  placeholder?: string,
  errorMessage?: string,
  col?: boolean
}

export default ({ setFormData, formDetails, buttonText }: { setFormData: Function, formDetails: FormDetails[], buttonText: string }) => {
  useEffect(() => {
    formDetails.map((item: any) => {
      return setFormValues({
        name: item.fieldName,
        value: ''
      })
    })
  }, []);

  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formValues, setFormValues] = useReducer(formReducer, {})

  const checkForNulls = () => {
    const nullsFound = Object.values(formValues).filter(value => {
      return value == ''
    })
    if (nullsFound.length) {
      return false
    }
    return true
  }

  const onSetFormData = () => {
    if (checkForNulls()) {
      setFormData(formValues)
      console.log(formValues)
    }
  }

  const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') return e.target.classList.remove('invalid', 'valid')
    const reg = mapper[e.target.type].reg
    e.target.classList.toggle('valid', reg.test(e.target.value))
    e.target.classList.toggle('invalid', !reg.test(e.target.value))

  }

  const mapper: Record<any, any> = {
    'email': {
      reg: /[\w]@[\w+]+[.][\w+]/
    },
    'text': {
      reg: /[A-Za-z ]/
    },
    'password': {
      reg: /^\S+$/
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    validate(e)
    setFormValues({
      name: e.target.name,
      value: e.target.value
    })
  }

  return (
    <FormContainer>
      <SingleGrid>
        {
          formDetails.map((item, i) => {
            if (item.col) {
              return <TwoColInput placeholder={item.placeholder} name={item.fieldName} key={i} onInput={handleChange} />
            }
          })
        }
      </SingleGrid>
      {
        formDetails.map((item, i) => {
          if (item.type === 'password') {
            return <PasswordInput placeholder={item.placeholder} name={item.fieldName} key={i} onHandleChange={handleChange} />
          }
          if (!item.col) {
            return <Input placeholder={item.placeholder} name={item.fieldName} type={item.type ? item.type : 'text'} key={i} onInput={handleChange} />
          }
        })
      }
      <Button onClick={onSetFormData}>{buttonText}</Button>
    </FormContainer >
  )
}