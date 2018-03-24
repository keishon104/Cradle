import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, StatusBar, TouchableOpacity } from 'react-native';



export default class Main extends Component<{}> {
    render() {
        return (
            <View style={styles.mains}>
                <StatusBar
                    translucent={false}
                    animated={false}
                    hidden={false}
                    backgroundColor="rgb(122,77,246)"
                    barStyle="dark-content"
                />
                <TouchableOpacity>
                    <Text>Hello from the Main Page. If you see this it works</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffd69c',
    },
    mains: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BBE5B6',
    }


});
