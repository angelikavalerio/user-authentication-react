import { ReactNode } from 'react'


export interface FormFields {
  firstName?: string,
  lastName?: string,
  username?: string,
  email: string,
  password: string
}

export interface FormDetails {
  fieldName: string,
  type?: string,
  placeholder?: string,
  default?: any,
  col?: boolean
}

export type InputProps = {
  resetTrigger: boolean
  retrieveForm: Function
  formDetails: FormDetails[]
  buttonText: string
  children?: ReactNode
}