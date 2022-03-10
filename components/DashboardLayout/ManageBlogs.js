/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const ManageBlogs = () => {
  const dispatch = useDispatch()

  // getting all blogs from redux here
  const blogs = useSelector((state) => state?.reducers?.blogs?.blogs)
  const [filter, setFilter] = useState('')
  const searchText = (event) => {
    setFilter(event.target.value)
  }
  let dataSearch = blogs?.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })
  dataSearch?.reverse()
  return (
    <div className="mt-5 h-full">
      <div className="grid grid-cols-12 gap-6">
        {/* {dataSearch.map((blog) => ()} */}
        {dataSearch.map((blog) => (
          <div key={blog._id} className="col-span-3">
            <div className="flex  items-center justify-center">
              <div className=" rounded border border-gray-100 bg-white hover:shadow-lg dark:bg-gray-900">
                <img
                  src="https://picsum.photos/500/300"
                  className="w-full rounded-t"
                  alt=""
                />

                <div className="ml-10 flex">
                  <img
                    src="https://picsum.photos/50/50"
                    className="-mt-6 rounded-full border-4 border-white shadow-lg"
                    alt=""
                  />
                </div>

                <p className="px-10 pt-3 pb-2 font-bold text-black dark:text-slate-50">
                  Angry Pitbull Club
                </p>

                <p className="px-10 text-sm font-semibold text-gray-500 dark:text-Docy-White">
                  by
                  <a href="#" className="text-blue-500 hover:text-blue-700">
                    OfficialAPC
                  </a>
                </p>

                <p className="mb-5 px-10 py-2 text-gray-500 dark:text-slate-100">
                  A collection of 10,000 Angry Pitbulls. Angry Pitbull Club is a
                  collection of 10,000 unique, digital Pitbull NFT collectibles
                  that represent community...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ManageBlogs
