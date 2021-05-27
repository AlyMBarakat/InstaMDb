/**
 *
 *
 * Movies Feature
 *
 * 
 */
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import MovieCard from '../../../../shared/components/MovieCard';
import getMovies from '../../API/getMovies';


const DiscoverMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [status, setStatus] = useState("IDLE");

    const handleMoviesData = async () => {
        try {
            setStatus((status) => status === "IDLE" ? "INITIAL_LIST_LOADING" : "REFRESHING");
            const finalData = await getMovies(1);
            setMoviesData(finalData);
        }
        catch (error) {
            if (status === "INTIAIL_LIST_LOADING") {
                return setStatus("IDLE");
            }
            Toast.show();
            console.log(error);
        }
    }

    useEffect(() => {
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

export default DiscoverMovies;

