import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Tabs = () => {
    return (
        <View style={tabsStyles.tabsMainDiv}>
            <TouchableOpacity >
                <Text style={tabsStyles.tabsBtn}>
                    Newest
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={tabsStyles.tabsBtn}>
                    Latest
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={tabsStyles.tabsBtn}>
                    Popular
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const tabsStyles = StyleSheet.create({
    tabsMainDiv: {
        display: 'flex',
        flexDirection: 'row',
    },
    tabsBtn: {
        fontSize: 20,
        marginLeft: 18,
        marginRight: 18,
        marginTop: 10
    }

})

export default Tabs
