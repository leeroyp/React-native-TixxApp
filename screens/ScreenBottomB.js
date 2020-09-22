
import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'


const ScreenBottomB = ({ navigation }) => {

    return (
        <View>
            <Text>Screen Bottom B</Text>
            <Button title = "Navigate To Screen A" onPress= {()=> {navigation.navigate('ScreenA')}}></Button>
        </View>
    )
}

export default ScreenBottomB