import { useState } from "react"
import { Input } from "../../styles/Global"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

export default ({ placeholder, onHandleChange, name }: { placeholder: any, onHandleChange: Function, name: string }) => {
  const [isShown, setShown] = useState<boolean>(false)

  return (
    <div style={{ position: 'relative' }}>
      <Input type={isShown ? 'text' : 'password'} placeholder={placeholder} style={{ width: '100%', paddingRight: '3.6rem' }} name={name} onInput={(e: React.ChangeEvent<HTMLInputElement>) => onHandleChange(e)} />
      <FontAwesomeIcon icon={isShown ? faEyeSlash : faEye} onClick={() => { setShown((shown) => !shown) }} style={{ position: 'absolute', fontSize: 12, top: '1.5rem', right: '1.2rem', color: '#a2a2a2' }} />
    </div>
  )
}