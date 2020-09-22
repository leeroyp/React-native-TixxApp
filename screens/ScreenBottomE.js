
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenBottomE = ({ navigation }) => {

    return (
        <View>
            <Text>Screen Bottom E</Text>
            <Button title = "Navigate To Screen A" onPress= {()=> {navigation.navigate('ScreenA')}}></Button>
        </View>
    )
}

export default ScreenBottomE