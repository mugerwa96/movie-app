import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { moviesFetch } from '../features/moviesSlice';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    dispatch(moviesFetch(text))
    return (
        <div className='z-10 bg-primary w-full fixed top-0 drop-shadow-sm text-white   p-4  '>
            <div className='flex items-center justify-between md:max-w-4xl md:mx-auto'>

                <div className='font-bold md:text-2xl'>
                    <Link to="/">PICHA ?</Link>
                </div>

                {/* search button */}
                <div className='border-2 border-white rounded-md md:w-[60%]'>
                    <form action="">
                        <input type="text" className='border-none text-white placeholder:text-slate-300 bg-transparent py-1 px-2
                  focus:outline-none md:w-full' placeholder='Search for movies' value={text} onChange={(e) => setText(e.target.value)} />

                    </form>
                </div>
                {/* user aname after registrating */}
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-white text-slate-900 font-bold'>
                    M
                </div>
            </div>
        </div>
    )
}

export default NavBar