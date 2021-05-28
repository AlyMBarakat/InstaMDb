import { StyleSheet } from 'react-native';

const styles = new StyleSheet.create({
    container: {
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    poster: {
        width: "40%",
        aspectRatio: 2 / 3,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        backgroundColor: '#351818',
    },
    text: {
        marginTop: 6,
        borderRadius: 4,
        backgroundColor: 'red',
    },

});

export default styles;