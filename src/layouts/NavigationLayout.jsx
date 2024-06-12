import { Outlet } from "react-router"
import Navigation from "../components/navigation/Navigation"

function NavigationLayout() {
  return (
    <>
        <Outlet />
        <Navigation />
    </>
  )
}
export default NavigationLayout