import styled from "styled-components";
import { TwoColGrid, Button } from "../../styles/Global";
import Input from "../Input";
import { validationMapper } from "../../utils/formValidation";
import { FormContainer } from "../../styles/Global";
import { useEffect, ReactNode } from "react";
import { FormProvider, useForm } from 'react-hook-form'


interface FormDetails {
  fieldName: string,
  ref: string,
  type?: string,
  placeholder?: string,
  col?: boolean
}

type InputProps = {
  resetTrigger: boolean
  formDetails: FormDetails[]
  buttonText: string
  children?: ReactNode
}

export default ({ resetTrigger = false, formDetails, buttonText }: InputProps) => {
  const methods = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    }
  })

  const resetForm = () => {
    methods.reset()
  }

  useEffect(() => {
    resetForm()
  }, [resetTrigger]);

  const onSubmit = methods.handleSubmit(data => {
    console.log(data)
  })


  return (
    <FormProvider {...methods}>
      <FormContainer
        onSubmit={e => e.preventDefault()}
      >
        <TwoColGrid>
          {
            formDetails.map((item, i) => {
              if (item.col) {
                return <Input placeholder={item.placeholder ?? ''} type={item.type ? item.type : 'text'} validation={validationMapper[item.type ?? 'text'].validation} id={item.fieldName} key={i} />
              }
            })
          }
        </TwoColGrid>
        {
          formDetails.map((item) => {
            if (!item.col) {
              return (
                <Input
                  id={item.fieldName}
                  validation={validationMapper[item.type ?? 'text'].validation}
                  placeholder={item.placeholder}
                  type={item.type ?? 'text'}
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

