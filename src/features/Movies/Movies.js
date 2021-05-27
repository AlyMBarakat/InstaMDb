/**
 *
 *
 * Movies Feature
 *
 * 
 */
import React from 'react';
import {
    ScrollView,
} from 'react-native';
import MovieCard from '../../shared/components/MovieCard';


const tempMov1 = {
    title: "Without Remorse",
    description: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted.",
    date: "2021/05/05",
    posterURI: "https://image.tmdb.org/t/p/w185/rEm96ib0sPiZBADNKBHKBv5bve9.jpg"
}
const tempMov2 = {
    title: "Godzilla vs. Kong",
    description: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero",
    date: "2021/05/05",
    posterURI: "https://image.tmdb.org/t/p/w185/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
}

const Movies = () => (
    <ScrollView style={{ paddingHorizontal: 20, paddingVertical: 22, backgroundColor: '#290F0F' }} >
        <MovieCard style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov1} style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov2} style={{ marginBottom: 10 }} />
        <MovieCard style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov1} style={{ marginBottom: 10 }} />
        <MovieCard style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov2} style={{ marginBottom: 10 }} />
        <MovieCard style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov1} style={{ marginBottom: 10 }} />
        <MovieCard style={{ marginBottom: 10 }} />
        <MovieCard movieDetails={tempMov2} style={{ marginBottom: 10 }} />
        <MovieCard style={{ marginBottom: 10 }} />
    </ScrollView >
)

export default Movies;

