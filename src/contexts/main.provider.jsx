import { Outlet } from "react-router"


function MainProvider({ providers = []}) {
  return providers.reduceRight((acc, Provider) => <Provider>{acc}</Provider>, <Outlet />)
}
export default MainProvider