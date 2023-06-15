import React from 'react'
import Layout from '../components/Layout'
import MovieCard from './Movies/MovieCard'
import {  useSelector } from 'react-redux'
import Loader from '../images/ajax-loader.gif'
import Error from '../images/searchloader.gif'

const Home = () => {

  const { movies: { moviesList }, movies: { status } } = useSelector(state => state.movies);


  return (
    <div>

      {
        status === "pending"
          ?
          <div className=''>

            <div className='flex flex-col items-center h-[80vh] justify-center '>
              <img src={Loader} alt="" className='' />
            </div>

          </div>

          : status === "rejected" ?
            <div className='font-bold text-red-600 flex items-center justify-center h-screen text-sm'>Check Your Internet connection</div>
            :
            <div className='md:max-w-4xl mx-auto  md:mb-12'>
              { 
                moviesList ?
                  <Layout title="Latest Movies">

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5   '>
                      {

                        moviesList.map(movie => <MovieCard key={movie.imdbID} data={movie} />)
                      }

                    </div>

                  </Layout>

                  :
                  <div className='h-[100vh]'>

                    <div className='flex flex-col items-center h-[80vh] justify-center '>
                      <img src={Error} alt="" className='w-[8rem]' />
                      <p className='text-red-800 font-bold'>Result not found</p>
                    </div>

                  </div>

              }



            </div>
      }

    </div>
  )
}

export default Home