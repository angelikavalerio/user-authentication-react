import { Outlet, Link } from "react-router-dom"
import { CenterChildElement } from "../styles/Global"

export default () => {
  return (
    <CenterChildElement style={{ paddingTop: '40px' }}>
      <Outlet />
    </CenterChildElement>
  )
}