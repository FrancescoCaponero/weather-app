import React from 'react'
import SunnyIcon from '../assets/SunnyIcon'
import Layout from '../Layout'
import { Link } from 'react-router-dom'

const WeatherHome = () => {
  return (
    <>
    <Layout>
        <SunnyIcon/>
        <div className="mb-[3rem]">
            <h1 className="bg-blue text-white text-[3.2rem] font-medium leading-3">Weather</h1>
            <h2 className="bg-blue text-white text-[3.2rem] font-light">Forecasts</h2>
        </div>
        <Link to={`/weather`} className="transition bg-transparent hover:bg-primary color-primary font-semibold hover:text-white py-2 px-14 border border-primary hover:border-transparent text-[1.1rem] rounded-full">
          Start
        </Link>
    </Layout>
    </>
  )
}

export default WeatherHome