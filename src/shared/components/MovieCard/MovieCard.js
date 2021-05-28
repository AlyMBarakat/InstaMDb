/**
 * 
 * 
 * MovieCard Resusable component
 * 
 * 
 */
import React from 'react';
import { View, Image } from 'react-native';
import styles from './MovieCard.styles';
import ExpandableMovieDetails from './ExpandableMovieDetails';
import MovieCardLoading from './MovieCard.loading';

const MovieCard = React.memo(({ loading, movieDetails, style }) => {
    return (
        <>
            {
                loading ?
                    // load card loading skeleton
                    <MovieCardLoading />
                    :
                    // load movie card with data
                    <View style={[style, styles.container]}>
                        <Image
                            source={{ uri: `https://image.tmdb.org/t/p/w342/${movieDetails.posterPath}` }}
                            style={styles.poster}
                        />
                        {/* Movie's data */}
                        <View style={styles.textContainer}>
                            {/* Movie Details */}
                            <ExpandableMovieDetails
                                title={movieDetails.title}
                                releaseDate={movieDetails.releaseDate}
                                overview={movieDetails.overview} />
                        </View >
                    </View >

            }
        </>
    );
});

export default MovieCard;