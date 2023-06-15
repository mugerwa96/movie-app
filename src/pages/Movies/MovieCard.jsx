import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
  const{Title,Year,imdbID,Poster}= props.data;


  return (
    <div className="py-1">
      {/* movie__container */}
      <Link to={`/movies/details/${imdbID}`}>
      <div className='bg-primary mb-2 shadow w-[10rem] h-[16rem] md:w-[100%] overflow-hidden rounded-sm relative hover:scale-110 duration-700 transition-all'>
        <img src={Poster} className=" absolute w-[100%] h-[60%] object-cover"alt="" />
        <div className='p-2 space-y-1 absolute top-[60%]'>
           <p className='text-sm'>{Title}</p> 
           <p className='text-xs'>{Year}</p> 
        </div>
      </div>
      </Link>
    </div>
  )
}

export default MovieCard