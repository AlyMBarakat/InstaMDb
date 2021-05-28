import React from "react";
import { View } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import styles from './MovieCard.loading.styles';

const MovieCardLoading = () => {
    return (
        <SkeletonPlaceholder backgroundColor="#351818" highlightColor="#A71E1E" >
            <View style={styles.container}>
                <View style={styles.poster}>
                    <View style={{ flex: 1 }} />
                </View>
                <View style={styles.textContainer}>
                    <View style={[{ width: "100%", height: 20 }, styles.text]} />
                    <View
                        style={[{ width: "40%", height: 20 }, styles.text]}
                    />
                    <View
                        style={[{ width: "100%", height: 50 }, styles.text]}
                    />
                </View>
            </View>
        </SkeletonPlaceholder>
    );
};

export default MovieCardLoading;
