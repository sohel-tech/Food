import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.conatiner}>
            <Image style={styles.image} source={{ uri: result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars,{result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    conatiner: {
        marginLeft: 15
    },

    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold'

    }


});

export default ResultsDetails;