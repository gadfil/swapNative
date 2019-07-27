/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment,Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Platform,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {WebView} from 'react-native-webview';

const PolicyHTML = require('./webBuild/index.html');
import {LocalHtml} from './webBuild/index.html';
import Permissions from 'react-native-permissions';


class App extends Component {
    constructor(){
        super()
    }
    componentDidMount() {
        Platform.OS === "android" &&Permissions.request('storage')
    }


    render() {
        return (

            Platform.OS == 'ios'
                ? <WebView
                    source={PolicyHTML}
                    style={{marginTop: 20}}
                />
                :
                <WebView
                    source={{uri:"file:///android_asset/build/index.html"}}
                    style={{marginTop: 20}}
                    allowFileAccess={true}
                    originWhitelist={['*']}
                />

        )
    }

};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;
