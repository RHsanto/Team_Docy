import React from 'react'
import AddAdmin from '../../components/Dashboard/AddAdmin'
import Sidebar from '../../components/Dashboard/Sidebar'

const addAdmin = () => {
  return (
    <div>
    <div className="flex w-full items-stretch bg-gray-200">
      <Sidebar />
      <div className="manageCourses__items section-padding page-content__body m-5 min-h-screen w-full bg-white p-5 transition-all">
      <AddAdmin />
      </div>
    </div>
  </div>
  )
}

export default addAdmin
