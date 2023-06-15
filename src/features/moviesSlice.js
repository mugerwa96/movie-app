import axios from 'axios'

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");


export const moviesFetch = createAsyncThunk("movies/moviesFetch",
   (search) =>
      axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=2a909aea&type=movie&s=${search ? search : 'x-men'}`)
         .then(res => res.data.Search)
)

export const moviesFetchById = createAsyncThunk("movies/moviesFetchById",
   (id) =>
      axios.get(`https://www.omdbapi.com/?i=${id}&apikey=2a909aea`)
         .then(res => res.data)
)


const initialState = {
   movies: {
      moviesList: [],
      status: null
   },
   search: {
      searchList: [],
      status: null
   }
}
const moviesSlice = createSlice({
   name: "movies",
   initialState,
   reducers: {},
   extraReducers: {

      [moviesFetch.pending]: (state) => {
         state.movies.status = "pending"
      },
      [moviesFetch.fulfilled]: (state, action) => {
         state.movies.status = "success";
         state.movies.moviesList = action.payload
      },
      [moviesFetch.rejected]: (state) => {
         state.movies.status = "rejected";
      },
      [moviesFetchById.fulfilled]:(state,action)=>{
         state.search.status = "success";
         state.search.searchList = action.payload
        
      }

   }
});
export default moviesSlice.reducer
//  export const getAllMovies=(state)=>state.movies.moviesFetch
