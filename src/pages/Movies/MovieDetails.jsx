import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { moviesFetchById } from '../../features/moviesSlice'

const MovieDetails = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(moviesFetchById(id))
  }, [id])
  const { Title,  Plot, Released, Poster, Director, Actors, Language, imdbVotes, imdbRating } = useSelector(state => state.movies.search.searchList);

  return (
    <div className='relative '>
      <div className='flex items-center justify-center md:hidden rounded-full w-6 h-6 bg-white text-slate-800 absolute top-3 left-3  '>
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>
      <div className='mt-12 p-4 bg-primary/50 w-[100%] h-screen  md:mt-16 md:mb-12'>
        <div className=' flex  justify-center md:max-w-4xl md:mx-auto  '>

          {/* left__side */}
          <div className='w-1/2 md:w-[30%]'>
            <img src={Poster} className='h-[17rem] md:h-[25rem]' alt="" />
          </div>

          {/* right__side */}
          <div className=' ml-4 w-1/2 space-y-2  md:w-[70%]'>
            <p className='font-bold text-xl w-full md:text-4xl'>{Title}</p>

            <p className=''>
              <span className='block text-green-700 font-semibold md:text-xl'>Released:</span>
              <span className='md:text-base'>{Released}</span>
            </p>
            <p className=''>
              <span className='block text-orange-700 font-semibold md:text-xl'>Director:</span>
              <span className='text-sm md:text-base'>{Director}</span>
            </p>
            <p className=''>
              <span className='block text-purple-700 font-semibold md:text-xl'>Actors:</span>
              <span className='text-sm md:text-base'>{Actors}</span>
            </p>

          </div>
        </div>
        <div className='mt-4 text-sm md:max-w-4xl md:mx-auto '>

          <div className='md:text-base'>
            {Plot}
          </div>
          <div className='grid grid-cols-3 my-4  text-center md:grid-cols-1 md:text-left md:space-y-4'>
            <p className=''>
              <span className='block text-red-700 font-semibold'>Language:</span>
              <span className=''>{Language}</span>
            </p>
            <p className=''>
            
              <span className='block text-yellow-500 font-semibold'> imdbVotes:</span>
              <span className=''>{imdbVotes}</span>
            </p>
            <p className=''>
            
              <span className='block text-pink-700 font-semibold'>imdbRating:</span>
              <span className=''>{imdbRating}</span>
            </p>
          
          </div>
        </div>
      </div>


      {/* detials */}

    </div>

  )
}

export default MovieDetails