import styled from "styled-components";
import { SingleGrid, Button } from "../../styles/Global";
import Input from "../Input";
import { validationMapper, validate } from "../../utils/formValidation";
import { flexColumnMixin } from "../../styles/Mixins";
import { useReducer, useEffect, ReactNode } from "react";
import { FormProvider, useForm } from 'react-hook-form'

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

type InputProps = {
  setFormData: Function
  formDetails: FormDetails[]
  buttonText: string
  children?: ReactNode
}

export default ({ setFormData, formDetails, buttonText }: InputProps) => {
  useEffect(() => {
    formDetails.map((item: any) => {
      return setFormValues({
        name: item.fieldName,
        value: ''
      })
    })
  }, []);

  const methods = useForm()

  const formReducer = (state: any, event: any) => {
    return {
      ...state,
      [event.name]: event.value
    }
  }

  const [formValues, setFormValues] = useReducer(formReducer, {})

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormValues({
      name: e.target.name,
      value: e.target.value
    })
  }

  return (
    <FormProvider {...methods}>
      <FormContainer
        onSubmit={e => e.preventDefault()}
      >
        <SingleGrid>
          {
            formDetails.map((item, i) => {
              if (item.col) {
                return <Input placeholder={item.placeholder} type={item.type ? item.type : 'text'} validation={validationMapper[item.type ?? 'text'].validation} id={item.fieldName} key={i} onHandleChange={handleChange} />
              }
            })
          }
        </SingleGrid>
        {
          formDetails.map((item, i) => {
            if (!item.col) {
              return (
                <Input
                  id={item.fieldName}
                  validation={validationMapper[item.type ?? 'text'].validation}
                  placeholder={item.placeholder}
                  type={item.type ? item.type : 'text'}
                  onHandleChange={handleChange}
                  key={item.fieldName}
                />
              )
            }
          })
        }
        <Button onClick={onSubmit}>{buttonText}</Button>
      </FormContainer>
    </FormProvider>
  )
}

