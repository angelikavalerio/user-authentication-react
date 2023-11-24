import { Outlet, Link } from "react-router-dom"
import { CenterChildElement } from "../styles/Global"

export default () => {
  return (
    <CenterChildElement>
      <Outlet />
    </CenterChildElement>
  )
}