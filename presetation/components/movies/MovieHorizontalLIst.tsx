import { Movie } from '@/infrastructure/interface/movie.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface props {
    title?: string
    movies: Movie[];
    
}

const MovieHorizontalLIst = ({movies, title}: props) => {
  return (
    <View>
    {
        title && <Text className='text-3xl font-bold px-4 mb-2'>{title}</Text>
    }
        <FlatList
            horizontal
            data = {movies}
            showsHorizontalScrollIndicator = {false}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <MoviePoster id= {item.id} 
           poster={item.poster}
            smallPoster
            />}
        />
    </View>
  )
}

export default MovieHorizontalLIst