import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../app/hooks"
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount
} from '../features/counter/counterSlice'
import { getUser, changeEmail } from "../features/user/userSlice"
import { getAccessToken, changeAccessToken } from "../features/config/configSlice"

export default () => {

  const count = useAppSelector(selectCount)
  const user = useAppSelector(getUser)
  const aToken = useAppSelector(getAccessToken)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')
  const [newUser, setNewUser] = useState({
    firstName: '',
    username: '',
    email: ''
  })

  const incrementValue = Number(incrementAmount) || 0

  return (
    <>
      <h1>Welcome blah blah</h1>
      <button onClick={() => dispatch(increment())}>
        Increment
      </button>
      {count}
      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button onClick={() => dispatch(changeEmail('sdasd@dmf.c'))}>
        Change email
      </button>
      <button onClick={() => dispatch(changeAccessToken('ewewf2323fwef'))}>
        Change token
      </button>
      Email: {user}<br />
      token: {aToken}
    </>
  )
}