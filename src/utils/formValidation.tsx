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