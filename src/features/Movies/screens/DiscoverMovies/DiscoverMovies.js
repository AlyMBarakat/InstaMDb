/**
 *
 *
 * Discover Movies Screen
 *
 * 
 */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, SafeAreaView, RefreshControl, Platform } from 'react-native';
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

    const fetchMoviesAndUpdate = async () => {
        try {
            const newData = await getMovies(pageNum + 1);
            console.log("Requesting page number: ", pageNum + 1);
            setMoviesData(moviesData => (currentStatus === statuses.REFRESHING ? newData : [...moviesData, ...newData]));
            setPageNum(pageNum => (pageNum + 1));
            setTimeout(() => {
                setCurrentStatus(statuses.LOADED);
            }, 1000);
        }
        catch (error) {
            throw error;
        }

    }

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
            if (currentStatus === statuses.LOADED)
                setCurrentStatus((currentStatus) => statuses.LAZY_LOADING);
            await fetchMoviesAndUpdate();
        }
        catch (error) {
            if (currentStatus === "INTIAIL_LIST_LOADING") {
                return setCurrentStatus("IDLE");
            }
            // Show toast
            console.log(error);
        }
    }

    const handleRefreshing = () => {
        setPageNum(0);
        setCurrentStatus(statuses.REFRESHING);
    }

    useEffect(() => {
        handleMoviesLoading();
    }, []);

    useEffect(() => {
        if (currentStatus === statuses.REFRESHING) {
            console.log("Refreshing...");
            fetchMoviesAndUpdate();
        }

    }, [setCurrentStatus, currentStatus])

    return (
        <SafeAreaView style={styles.container}>
            {
                currentStatus === statuses.INITIAL_LOADING ?
                    <MovieCard movieDetails={
                        {
                            posterPath: "",
                            title: "Loading",
                            overview: "Loading /n Loading  /n Loading  /n Loading  /n Loading"
                        }
                    } />
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
                                onRefresh={handleRefreshing}
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

