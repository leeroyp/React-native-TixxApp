
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenBottomD = ({ navigation }) => {

    return (
        <View>
            <Text>Screen Bottom D</Text>
            <Button title = "Navigate To Screen A" onPress= {()=> {navigation.navigate('ScreenA')}}></Button>
        </View>
    )
}

export default ScreenBottomD