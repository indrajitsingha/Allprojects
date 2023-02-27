import React from 'react'
import { Outlet ,NavLink} from 'react-router-dom'
const Homeuser = () => {
  return (
    <div>
    
    
    <nav className="relative select-none bg-black lg:flex lg:items-stretch w-full">

  <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
      <NavLink to="/homeuser/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">Show user</NavLink>
      <NavLink to="/homeuser/adduser" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark">adduser</NavLink>
      
    </div>
  </div>
</nav>

<Outlet/>
    </div>
  )
}

export default Homeuser