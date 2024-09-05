import { Outlet } from 'react-router-dom'
import { Wrap } from '../../styles/Layout'

export default function WrapOutlet() {
  return (
    <Wrap id="wrap">
      <Outlet />
    </Wrap>
  )
}
