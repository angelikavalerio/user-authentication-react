
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
