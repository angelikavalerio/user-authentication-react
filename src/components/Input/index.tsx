import { Input, ErrorLabel } from "../../styles/Global"
import styled from "styled-components"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useFormContext } from "react-hook-form"
import { findInputErrors, isFormInvalid } from "../../utils/formValidation"

const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem
`

export default ({ validation, type, id, placeholder }: { validation: string | any, type: string, id: string, placeholder: any }) => {
  const [isShown, setShown] = useState<boolean>(false)
  const { register, formState: { errors } } = useFormContext()
  const inputErrors: { error?: any } = findInputErrors(errors, id)
  const isInvalid = isFormInvalid(inputErrors)

  return (
    <InputContainer>
      <Input
        id={id}
        type={type === 'password' ? (isShown ? 'text' : type) : type}
        placeholder={placeholder}
        {...register(id, validation)}
        className={isInvalid ? 'invalid' : ''}
      />
      <FontAwesomeIcon
        icon={isShown ? faEyeSlash : faEye}
        onClick={() => { setShown((shown) => !shown) }}
        className={type === 'password' ? '' : 'hidden'}
        style={{ position: 'absolute', right: '1.5rem', top: '1.5rem', color: 'gray', fontSize: '14px' }}
      />
      {
        isInvalid &&
        <ErrorLabel htmlFor={id}>
          {inputErrors.error.message}
        </ErrorLabel>
      }
    </InputContainer>
  )
}