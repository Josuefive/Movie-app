import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movi.mapper";

export const  topRateMoviesAction = async() => {
    try {
   const {data} =  await movieApi.get<MovieDBMoviesResponse>('/top_rated')

    // console.log(JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        
    // console.log(movies)

      return movies
    } catch (error) {
        console.log(error);
        throw 'cannot load top_rated movies'
    }
}