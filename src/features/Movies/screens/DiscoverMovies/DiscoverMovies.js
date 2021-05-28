/**
 *
 *
 * Discover Movies Screen
 *
 * 
 */
import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native';
import fetchMovies from '../../API/fetchMovies';
import Toast from 'react-native-toast-message';
import Text from "../../../../shared/components/Text";
import DiscoverMoviesLoading from "./DiscoverMovies.loading";
import DiscoverMoviesError from "./DiscoverMovies.error";
import MoviesList from "./MoviesList";

const DiscoverMovies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [currentStatus, setCurrentStatus] = useState("IDLE");
    const [pageNum, setPageNum] = useState(1);
    const MAX_PAGE_NUMBER = 500;

    // update current status and trigger movies fetching
    const handleMoviesLoading = async () => {
        try {
            // avoid random calls from FlatList while lazy loading
            // avoid requesting more than the maximum number of pages
            if (currentStatus === "LAZY_LOADING" || pageNum > MAX_PAGE_NUMBER)
                return
            // start loading process...
            if (currentStatus === "IDLE")
                setCurrentStatus(() => "INITIAL_LOADING");
            else if (currentStatus === "LOADED")
                setCurrentStatus(() => "LAZY_LOADING");
            // fetch next movies page
            const newMovies = await fetchMovies(pageNum);
            // update movies data according to current status
            // reset data for refreshing or concatinate for loading
            setMoviesData(moviesData => (currentStatus === "REFRESHING" ? newMovies : [...moviesData, ...newMovies]));
            // increment page
            setPageNum(pageNum => (pageNum + 1));
            // smoothly return to loaded status
            setTimeout(() => {
                setCurrentStatus("LOADED");
            }, 1000);
        }
        catch (error) {
            if (currentStatus === "IDLE") {
                return setCurrentStatus("INITIAL_LOADING_ERROR");
            }
            return Toast.show({
                type: "error",
                text1: "Something wrong happened 😳",
                topOffset: 50,
                text2: "Please try again",
            });
        }
    }

    // reset page number
    const handleMoviesRefreshing = () => {
        setPageNum(1);
        setCurrentStatus("REFRESHING");
    }

    // fetch movies when refreshing / idle
    useEffect(() => {
        if (currentStatus === "REFRESHING" || currentStatus === "IDLE") {
            handleMoviesLoading();
        }
    }, [currentStatus])

    // handle if API request fails on the first time
    if (currentStatus === "INITIAL_LOADING_ERROR") {
        return (
            <DiscoverMoviesError setCurrentStatus={setCurrentStatus} />
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                currentStatus === "INITIAL_LOADING" ?
                    // movies loading skeleton list
                    <DiscoverMoviesLoading />
                    :
                    // movies list
                    <MoviesList currentStatus={currentStatus} moviesData={moviesData} handleMoviesLoading={handleMoviesLoading} handleMoviesRefreshing={handleMoviesRefreshing} />
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
        padding: 20
    }
})

export default DiscoverMovies;

