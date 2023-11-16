import styled from "styled-components";
import { SingleGrid, Tooltip } from "../../styles/Global";
import { flexColumnMixin } from "../../styles/Mixins";
import PasswordInput from "../PasswordInput";
import { Input, TwoColInput, MutedLink, ActiveLink, Button } from "../../styles/Global";
import { useReducer } from "react";

const FormContainer = styled.div`
  ${flexColumnMixin}
  justify-content: center;
  gap: 1rem;
`

interface Form {
  firstName?: string,
  lastName?: string,
  username?: string,
  email: string,
  password: string
}

interface FormDetails {
  fieldName: string,
  ref: string,
  type?: string,
  placeholder?: string,
  errorMessage?: string,
  col?: boolean
}

export default ({ formData, setFormData, formDetails, buttonText }: { formData: Form, setFormData: Function, formDetails: FormDetails[], buttonText: string }) => {
  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formValues, setFormValues] = useReducer(formReducer, {})

  const onSetFormData = () => {
    setFormData(formValues)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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