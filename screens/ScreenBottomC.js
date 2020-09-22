
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenBottomC = ({ navigation }) => {

    return (
        <View>
            <Text>Screen Bottom C</Text>
            <Button title = "Navigate To Screen A" onPress= {()=> {navigation.navigate('ScreenA')}}></Button>
        </View>
    )
}

export default ScreenBottomC