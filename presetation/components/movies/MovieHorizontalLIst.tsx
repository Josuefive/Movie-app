import { Movie } from '@/infrastructure/interface/movie.interface';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

interface props {
    movies: Movie[];
    
}

const MovieHorizontalLIst = ({movies}: props) => {
  return (
    <View>
      <Text className='text-2xl font-bold px-4'>Populares</Text>
        <FlatList
            horizontal
            data = {movies}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({item}) => <MoviePoster id= {item.id} 
            poster={item.poster}
            
            />}
        />
    </View>
  )
}

export default MovieHorizontalLIst