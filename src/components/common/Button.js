import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children} 
            </Text>
        </TouchableOpacity> 
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        textStyle: {
            width: '60%',
            textAlign: 'center',
            alignSelf: 'center',
            color: '#007aff',
            fontSize: 16,
            fontWeight: '800',
            paddingTop: 50,
            paddingBottom: 100
        }
    }
};

export { Button };
