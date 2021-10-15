import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'
import Tabs from '../components/Tabs'

const homeScreen = () => {
    return (
        <ScrollView>
            <Text style={styles.fashionHeading}>
                Fashion Store
            </Text>
            <Tabs />
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    fashionHeading: {
        fontSize: 30,
        color: "#000",
        marginTop: 5,
        marginBottom: 5
    }
})

export default homeScreen
