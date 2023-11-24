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