import React from 'react';
import { View, Image, Text, StyleSheet, Button, Linking } from 'react-native';
export default function Headline(props) {
    console.log('props: ', props);
    const handlePress = () => {
        console.log('Attemping to open link.');
        Linking.openURL(props.url);
    }
    return (
        <View style={styles.container}>
            <Image
                style={styles.articleImage}
                source={{
                    uri: props.urlToImage
                }}
            />
            <Text style={styles.headline}>{props.title}</Text>
            <Text>{props.description}</Text>
            <Button 
                title="Open In Browser"
                onPress={handlePress}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        borderWidth: 1,
        alignItems: 'center',
        padding: 5,
        maxWidth: '80%',
        margin: 'auto',
        backgroundColor: '#ddd',
    },
    articleImage: {
        width: 100,
        height: 100,
    },
    headline: {
        fontWeight: '900',
        fontSize: 16,
    }
})