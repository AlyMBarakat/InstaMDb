import React from "react";
import { SafeAreaView, StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../../../../shared/components/Text";

const DiscoverMoviesError = ({ setCurrentStatus }) => {
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#290F0F',
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

export default DiscoverMoviesError;