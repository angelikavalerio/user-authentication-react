export default () => {
   const register = useFormContext()
   return (
     <div>
        <label>
           {errorMessage}
        </label>
        <input 
           name={name} 
           type={type} 
           placeholder={placeholder}
           {...register(label,{
              required:{
                 value: true,
                 message: 'required'
              }
           })}
>
     </div>
  )
}