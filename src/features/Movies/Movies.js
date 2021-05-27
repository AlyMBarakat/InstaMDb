/**
 *
 *
 * Movies Feature
 *
 * 
 */
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    FlatList,
} from 'react-native';
import MovieCard from '../../shared/components/MovieCard';
import getMovies from './API/getMovies';


const Movies = () => {
    const [moviesData, setMoviesData] = useState([]);

    const handleMoviesData = async () => {
        try {
            const finalData = await getMovies(1);
            setMoviesData(finalData);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(async () => {
        handleMoviesData();
    }, []);

    return (
        <FlatList
            style={{ paddingHorizontal: 20, paddingVertical: 22, backgroundColor: '#290F0F' }}
            data={moviesData}
            renderItem={({ item }) => <MovieCard movieDetails={item} style={{ marginBottom: 10 }} />}
            keyExtractor={item => item.id}

        />
    );

}

export default Movies;

