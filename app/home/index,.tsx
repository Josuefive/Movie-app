
import MainSlideshow from '@/presetation/components/MainSlideshow';
import MovieHorizontalLIst from '@/presetation/components/movies/MovieHorizontalLIst';
import { useMovie } from '@/presetation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const {nowPlayingQuery, popularQuery} = useMovie();
if (nowPlayingQuery.isLoading){
    return (
        <View className='justify-center items-center flex-1'>
            <ActivityIndicator
            color= 'purple'
            size={30}
            />
        </View>
    )
}
    
    return (
        <View className='m-t2' style={{paddingTop: safeArea.top}}>
            <Text
            className='text-3xl font-bold px-4 mb-2'>Peliculas Tendencias</Text>
            {/* Carusel de imagenes */}
            <MainSlideshow movies={nowPlayingQuery.data ?? []}/>

            {/* popular */}
            <MovieHorizontalLIst movies={popularQuery.data ?? []}/>
        </View>
    )
}

export default HomeScreen