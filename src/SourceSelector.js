import React from 'react';
import {View, Text } from 'react-native';
import {Picker} from '@react-native-community/picker';

export default function SourceSelector(props) {
    const handleSelection = (val) => {
        console.log('val: ', val);
        console.log(props.handler(val));
    }
    return (
        <View>
            <Picker
                onValueChange={handleSelection}
            >
                <Picker.Item label="Choose a Source" />
                {props.children}

            </Picker>
        </View>
    )
}