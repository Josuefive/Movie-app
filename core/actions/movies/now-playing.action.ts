import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponse } from "@/infrastructure/interface/moviedb-response";
import { MovieMapper } from "@/infrastructure/mapper/movi.mapper";

export const nowPlayingAction = async() => {
    try {
    const {data} =  await movieApi.get<MovieDBMoviesResponse>('/movie/now_playing')

    // console.log(JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie)

        
    console.log(movies)

        return movies
    } catch (error) {
        console.log(error);
        throw 'cannot load now playing movies'
    }
}