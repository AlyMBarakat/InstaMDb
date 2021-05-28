/**
 *
 *
 * Discover Movies Screen
 *
 * 
 */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, ActivityIndicator, SafeAreaView, RefreshControl, Platform, View, TouchableOpacity } from 'react-native';
import MovieCard from '../../../../shared/components/MovieCard';
import fetchMovies from '../../API/fetchMovies';
import Toast from 'react-native-toast-message';
import Text from "../../../../shared/components/Text";


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

    const renderMovieCard = ({ item }) => <MovieCard movieDetails={item} style={{ marginBottom: 20 }} />

    if (currentStatus === "INITIAL_LOADING_ERROR") {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.tryAgain}>
                    <Text bold style={{ fontSize: 60 }}>☹️</Text>
                    <Text size={25}>An error occured</Text>
                    {/* Try Again */}
                    <TouchableOpacity style={styles.reloadButton} onPress={() => setCurrentStatus("IDLE")}>
                        <Text bold size={14}>Reload</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    return (
        <SafeAreaView style={styles.container}>
            {
                currentStatus === "INITIAL_LOADING" ?
                    // movies loading skeleton list
                    <View style={styles.moviesList}>
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                        <MovieCard loading />
                    </View>
                    :
                    // movies list
                    <FlatList
                        style={styles.moviesList}
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
                        ListHeaderComponent={Platform.OS === 'ios' && currentStatus === "REFRESHING" && <ActivityIndicator color="gray" style={styles.loadingSpinner} />}
                        ListFooterComponent={currentStatus === "LAZY_LOADING" && <ActivityIndicator color="gray" style={styles.loadingSpinner} />}
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
    reloadButton: {
        backgroundColor: "#731111",
        paddingHorizontal: 50,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 10
    },
    tryAgain: {
        padding: 20,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    }
})

export default DiscoverMovies;

