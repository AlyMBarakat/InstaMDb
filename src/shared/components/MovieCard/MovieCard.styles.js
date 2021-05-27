import { StyleSheet } from 'react-native';

const styles = new StyleSheet.create({
    container: {
        backgroundColor: '#351818',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    poster: {
        backgroundColor: 'white',
        width: "40%",
        aspectRatio: 2 / 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
});

export default styles;