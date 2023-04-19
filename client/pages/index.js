import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [jobs, setJobs] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_API_BASE_URL}/v1/jobs`,
    }).then(response => {
      console.log("🚀 ~ file: index.js:13 ~ useEffect ~ response:", response)
      if (response?.data?.status) {
        setJobs(response?.data?.data)
      }
    }).catch(err => {
      console.log("🚀 ~ file: index.js:15 ~ useEffect ~ err:", err)
    })
  }, [])

  return (
    <main className="p-4 min-h-screen">

      <form
        onSubmit={handleSearch}
        className="bg-gray-50 p-2 min-w-full flex flex-row gap-2">

        <div className="w-4/12">
          <label className="block tracking-wide text-sm font-medium text-gray-900 dark:text-gray-300 mb-2" for="grid-first-name">
            Job Description
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="job-description-name"
            type="text"
            placeholder="Filter by title, benefits, companies, expertise" />
        </div>

        <div className="w-4/12">
          <label className="block tracking-wide text-sm font-medium text-gray-900 dark:text-gray-300 mb-2" for="grid-last-name">
            Location
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="location"
            type="text"
            placeholder="Filter by city, state, zip code or country" />
        </div>

        <div className="w-2/12 flex justify-center items-center">
          <input
            id="fulltime-only"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label
            for="fulltime-only"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Full Time Only</label>
        </div>

        <div className="w-2/12 flex justify-center items-center">
          <button
            className="w-32 bg-gray-600 hover:bg-gray-100 text-gray-100 hover:text-gray-600 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Search
          </button>
        </div>

      </form>

      <div>
        {jobs.map((d, i) => {
          return (
            <div
              className='bg-amber-100 mt-1 flex flex-row justify-between'
              key={d.id}>

              <div>
                <div>
                  {d.title}
                </div>
                <div>
                  <div>
                    {d.company}
                  </div>
                  <div>
                    -
                  </div>
                  <div>
                    {d.type}
                  </div>
                </div>
              </div>

              <div>
                <div>
                  {d.location}
                </div>
              </div>

            </div>
          )
        })}
      </div>

    </main>
  )
}
