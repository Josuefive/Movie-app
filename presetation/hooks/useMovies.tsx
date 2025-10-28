
import { nowPlayingAction } from "@/core/actions/movies/now-playing.action";
import { popularMoviesAction } from "@/core/actions/movies/popular.action copy";
import { topRateMoviesAction } from "@/core/actions/movies/top-rated.action";
import { upcomingMoviesAction } from "@/core/actions/movies/upcoming.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovie = () => {




    // Queries
      const nowPlayingQuery = useQuery({
     queryKey: ['movies', 'nowPlaying'], 
     queryFn: nowPlayingAction,
     staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })

     // Queries
      const popularQuery = useQuery({
     queryKey: ['movies', 'popular'], 
     queryFn: popularMoviesAction,
     staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })

    const topRatedQuery = useQuery({
     queryKey: ['movies', 'top-Rated'], 
     queryFn: topRateMoviesAction,
     staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })

        const upcomingQuery = useQuery({
     queryKey: ['movies', 'upcoming'], 
     queryFn: upcomingMoviesAction,
     staleTime: 1000 * 60 * 60 * 24 // 24 horas
    })

    

    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery,
        
    };
}; 