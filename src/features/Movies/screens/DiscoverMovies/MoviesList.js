import React from "react";
import { FlatList, Platform, ActivityIndicator, RefreshControl } from "react-native";
import MovieCard from "../../../../shared/components/MovieCard";

const MoviesList = ({ moviesData, handleMoviesLoading, handleMoviesRefreshing, currentStatus }) => {

    const renderMovieCard = ({ item }) => <MovieCard movieDetails={item} style={{ marginBottom: 20 }} />

    return (
        <FlatList
            style={{ padding: 20 }}
            data={moviesData}
            renderItem={renderMovieCard}
            keyExtractor={item => item.id}
            onEndReached={handleMoviesLoading}
            onEndReachedThreshold={0}
            removeClippedSubviews={true}
            windowSize={11}
            initialNumToRender={11}
            refreshControl={
                <RefreshControl
                    refreshing={false}
                    onRefresh={handleMoviesRefreshing}
                    tintColor='transparent'
                    progressBackgroundColor='gray'
                />
            }
            ListHeaderComponent={Platform.OS === 'ios' && currentStatus === "REFRESHING" && <ActivityIndicator color="gray" style={{ marginBottom: 20 }} />}
            ListFooterComponent={currentStatus === "LAZY_LOADING" && <ActivityIndicator color="gray" style={{ marginBottom: 20 }} />}
        />
    );
}

export default MoviesList;