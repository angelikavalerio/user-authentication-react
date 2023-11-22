export const checkForNulls = ({ form }: { form: Record<string, any> }) => {
  const nullsFound = Object.values(form).filter(value => {
    return value == ''
  })
  if (nullsFound.length) {
    return false
  }
  return true
}

export const validationMapper: Record<any, any> = {
  email: {
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 24,
        message: '24 characters max',
      },
      pattern: {
        value: /[\w]@[\w+]+[.][\w+]/,
        message: 'Use correct email format',
      }

    },
    reg: /[\w]@[\w+]+[.][\w+]/
  },
  text: {
    validation: {
      required: {
        value: true,
        message: 'required',
      },
      maxLength: {
        value: 24,
        message: '24 characters max',
      }
    },
    reg: /[A-Za-z ]/
  },
  password: {
    validation: {
      required: {
        value: true,
        message: 'required',
      }
    },
    reg: /^\S+$/
  }
}

export const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.value === '') return e.target.classList.remove('invalid', 'valid')
  const reg = validationMapper[e.target.type].reg
  e.target.classList.toggle('valid', reg.test(e.target.value))
  e.target.classList.toggle('invalid', !reg.test(e.target.value))
}

export const findInputErrors = (errors: any, id: string) => {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(id))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {})
  return filtered
}

export const isFormInvalid = (error: any) => {
  if (Object.keys(error).length > 0) return true
  return false
}