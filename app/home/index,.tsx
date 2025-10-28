
import MainSlideshow from '@/presetation/components/MainSlideshow';
import MovieHorizontalLIst from '@/presetation/components/movies/MovieHorizontalLIst';
import { useMovie } from '@/presetation/hooks/useMovies';
import React from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {
    const safeArea = useSafeAreaInsets();
    const {nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery} = useMovie();
if (nowPlayingQuery.isLoading || popularQuery.isLoading){
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
    <ScrollView>
        <View className='mt-4' style={{paddingTop: safeArea.top}}>
            <StatusBar barStyle= "dark-content"/>
            <Text
            className='text-3xl font-bold px-4 e'>Peliculas Tendencias</Text>
            {/* Carusel de imagenes */}
            <MainSlideshow movies={nowPlayingQuery.data ?? []}/>

            {/* popular */}
           <MovieHorizontalLIst  title='populares' movies={popularQuery.data ?? []}
            className='mb-6'
           />
           
            {/* Top rated */}
           <MovieHorizontalLIst  title='Mejor Calificadas' movies={topRatedQuery.data ?? []}
           className='mb-6'
           />

            {/* proximamente */}
           <MovieHorizontalLIst  title='Próximamente' movies={upcomingQuery.data ?? []}
           className='mb-10'
           />
             {/* proximamente */}
           <MovieHorizontalLIst  title='next' movies={upcomingQuery.data ?? []}
           className='mb-10'
           />


           <MovieHorizontalLIst  title='Mejor Calificadas' movies={topRatedQuery.data ?? []}
           className='mb-6'
           />
        </View>
    </ScrollView>
    )
}

export default HomeScreen