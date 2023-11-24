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
  default?: any,
  col?: boolean
}

type InputProps = {
  resetTrigger: boolean
  retrieveForm: Function
  formDetails: FormDetails[]
  buttonText: string
  children?: ReactNode
}

export default ({ resetTrigger = false, retrieveForm, formDetails, buttonText }: InputProps) => {
  const getFieldNames = () => {
    const fieldNames = formDetails.map((item: any) => {
      return { [item.fieldName]: item.default ?? '' }
    })

    return fieldNames
  }

  const assignValuesToFieldNames = () => {
    const assign = getFieldNames().reduce((total, cur) => {
      return Object.assign(total, cur)
    })
    return assign
  }

  const methods = useForm()

  useEffect(() => {
    methods.reset(assignValuesToFieldNames())
  }, [resetTrigger]);

  const onSubmit = methods.handleSubmit(data => {
    retrieveForm(data)
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

