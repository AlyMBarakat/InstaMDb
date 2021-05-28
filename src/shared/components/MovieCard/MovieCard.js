import React from 'react';
import { View, Image } from 'react-native';
import Text from '../Text';
import styles from './MovieCard.styles';
import ExpandableDescription from './ExpandableDescription';

const MovieCard = React.memo(({ movieDetails, style }) => {
    return (
        <View style={[style, styles.container]}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w342/${movieDetails.posterPath}` }}
                style={styles.poster}
            />
            {/* Movie's data */}
            <View style={styles.textContainer}>
                {/* Title */}
                <Text bold size={18} color='#D73B3B'>{movieDetails.title}</Text>
                {/* Date */}
                <Text size={13} color='#D88282' style={{ marginVertical: 3 }}>{movieDetails.releaseDate}</Text>
                {/* ExpandableDescription */}
                <ExpandableDescription text={movieDetails.overview} />
            </View >
        </View >
    );
});

export default MovieCard;