import React from 'react'
import { Outlet } from 'react-router-dom'

const Professor = () => {
  return (
    <div>
      <h1>Professor</h1>
      <div>
        {<Outlet/>}
      </div>
    </div>
  )
}

export default Professor