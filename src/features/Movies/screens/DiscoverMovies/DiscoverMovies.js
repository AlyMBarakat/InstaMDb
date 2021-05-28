/**
 *
 *
 * Discover Movies Screen
 *
 * 
 */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, SafeAreaView, RefreshControl, Platform, View } from 'react-native';
import MovieCard from '../../../../shared/components/MovieCard';
import getMovies from '../../API/getMovies';


const statuses = {
    IDLE: "IDLE",
    INITIAL_LOADING: "INITIAL_LOADING",
    LOADED: "LOADED",
    LAZY_LOADING: "LAZY_LOADING",
    REFRESHING: "REFRESHING",
}

const DiscoverMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [currentStatus, setCurrentStatus] = useState(statuses.IDLE);
    const [pageNum, setPageNum] = useState(0);
    const MAX_PAGE_NUMBER = 500;

    const fetchMovies = async () => {
        try {

        }
        catch (error) {
            throw error;
        }

    }

    // update current status and trigger movies fetching
    const handleMoviesLoading = async () => {
        try {
            // avoid random calls from FlatList while lazy loading
            // avoid requesting more than the maximum number of pages
            if (currentStatus === statuses.LAZY_LOADING || pageNum > MAX_PAGE_NUMBER)
                return
            console.log("Loading...");
            // 
            if (currentStatus === statuses.IDLE)
                setCurrentStatus((currentStatus) => statuses.INITIAL_LOADING);
            else if (currentStatus === statuses.LOADED)
                setCurrentStatus((currentStatus) => statuses.LAZY_LOADING);
            // fetch movies
            const newData = await getMovies(pageNum + 1);
            console.log("Requesting page number: ", pageNum + 1);
            // update movies data according to current status
            // reset data for refreshing or concatinate for loading
            setMoviesData(moviesData => (currentStatus === statuses.REFRESHING ? newData : [...moviesData, ...newData]));
            // increment page
            setPageNum(pageNum => (pageNum + 1));
            // smoothly return to loaded status
            setTimeout(() => {
                setCurrentStatus(statuses.LOADED);
            }, 1000);
        }
        catch (error) {
            if (currentStatus === "INTIAIL_LIST_LOADING") {
                return setCurrentStatus("IDLE");
            }
            // Show toast
            console.log(error);
        }
    }

    // reset 
    const handleMoviesRefreshing = () => {
        setPageNum(0);
        setCurrentStatus(statuses.REFRESHING);
    }

    // initial movies fetch
    // status: IDLE
    useEffect(() => {
        handleMoviesLoading();
    }, []);

    // fetch Movies during refreshing
    // status: REFRESHING
    useEffect(() => {
        if (currentStatus === statuses.REFRESHING) {
            console.log("Refreshing...");
            handleMoviesLoading();
        }

    }, [setCurrentStatus, currentStatus])

    return (
        <SafeAreaView style={styles.container}>
            {
                currentStatus === statuses.INITIAL_LOADING ?
                    <View style={styles.moviesList}>
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                    </View>
                    :
                    <FlatList
                        style={styles.moviesList}
                        data={moviesData}
                        renderItem={({ item }) => <MovieCard movieDetails={item} style={{ marginBottom: 20 }} />}
                        keyExtractor={item => item.id}
                        onEndReached={handleMoviesLoading}
                        onEndReachedThreshold={0}
                        removeClippedSubviews={true}
                        windowSize={21}
                        refreshControl={
                            <RefreshControl
                                refreshing={false}
                                onRefresh={handleMoviesRefreshing}
                                tintColor='transparent'
                                progressBackgroundColor='transparent'
                            />
                        }
                        ListHeaderComponent={currentStatus === statuses.REFRESHING && <ActivityIndicator color="gray" style={styles.loadingSpinner} />}
                        ListFooterComponent={currentStatus === statuses.LAZY_LOADING && <ActivityIndicator color="gray" style={styles.loadingSpinner} />}
                    />
            }
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#290F0F',
    },
    moviesList: {
        padding: 20,
    },
    loadingSpinner: {
        marginBottom: 20,
    },
})

export default DiscoverMovies;

