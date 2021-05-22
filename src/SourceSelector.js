import React from 'react';
import {View, Text } from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function SourceSelector(props) {
    return (
        <View>
            <Picker
                onValueChange={function(val){
                    console.log('selected: ', val)
                }}
            >
                <Picker.Item label="Choose a Source" />
                {props.children}

            </Picker>
        </View>
    )
}