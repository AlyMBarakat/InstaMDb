import React from 'react';
import { View, Image } from 'react-native';
import Text from '../Text';
import styles from './styles/movieCard';
import Description from './components/Description';

// const tempMovie = {
//     title: "Mortal Kombat",
//     description: "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
//     date: "2021/05/05",
//     posterURI: "https://image.tmdb.org/t/p/w185/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg"
// }

const MovieCard = ({ movieDetails = tempMovie, style }) => {
    return (
        <View style={[style, styles.container]}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w185/${movieDetails.posterPath}` }}
                style={styles.poster}
            />
            {/* Movie's data */}
            <View style={styles.textContainer}>
                {/* Title */}
                <Text bold size={18} color='#D73B3B'>{movieDetails.title}</Text>
                {/* Date */}
                <Text size={13} color='#D88282' style={{ marginVertical: 3 }}>{movieDetails.releaseDate}</Text>
                {/* Description */}
                <Description text={movieDetails.overview} />
            </View >
        </View >
    );
}

export default MovieCard;