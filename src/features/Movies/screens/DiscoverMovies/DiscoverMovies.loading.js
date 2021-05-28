import React from "react";
import MovieCard from "../../../../shared/components/MovieCard";
import { View } from "react-native";


const DiscoverMoviesLoading = () => {
    return (
        <View style={{ padding: 20 }}>
            <MovieCard loading />
            <MovieCard loading />
            <MovieCard loading />
            <MovieCard loading />
            <MovieCard loading />
        </View >
    );
}

export default DiscoverMoviesLoading;