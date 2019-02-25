/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <AdvancedType/>
        );
    }
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        paddingVertical: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    content: {
        padding: 20,
        marginHorizontal: 0,
        backgroundColor: '#effeaa',
        width: 125,
        height: 125,
        borderWidth: 1,
        borderColor: 'red',
        textAlign: 'center',
        color: 'white'
    }
});

const stylesFlexBox = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: 'white'
    },

    item: {
        backgroundColor: 'lightgoldenrodyellow',
        borderWidth: 1,
        borderColor: 'goldenrod',
        height: 150,
        width: 150
    }
});

const styleText = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    headline: {
        fontFamily: 'Georgia',
        fontSize: 20
    },

    subheader: {
        color: 'blue'
    },

    bold: {
        fontWeight: 'bold'
    }

});


const styleAdvanced = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingVertical: 100,
        paddingLeft: 30,
    },

    text: {
        fontSize: 22,
        marginBottom: 20
    },

    bold: {
        fontWeight: 'bold'
    },

    thin: {
        fontWeight: '100',
        fontSize: 10,
        fontFamily: 'Merriweather-Light',
        color: 'blue'
    },

    italic: {
        fontStyle: 'italic'
    },

    moreLineHeight: {
        lineHeight: 40
    },

    right: {
        textAlign: 'right'
    },

    center: {
        textAlign: 'center'
    },

    code: {
        fontFamily: 'Courier'
    }

});

const BoxModelDemo = () => (
    <View style={styles.main}>
        <Text style={styles.content}>Column 1</Text>
        <Text style={styles.content}>Column 2</Text>
        <Text style={styles.content}>Column 3</Text>
    </View>
);

const FlexBoxLayout = () => (
    <View style={stylesFlexBox.container}>
        <View style={[stylesFlexBox.item, {alignSelf: 'flex-start'} ]} />
        <View style={[stylesFlexBox.item, {alignSelf: 'stretch', width: undefined}]} />
        <View style={[stylesFlexBox.item, {alignSelf: 'flex-end'} ]} />
    </View>
);

const BasicType = () => (
    <View style={styleText.main}>
        <Text style={styleText.headline}>
            Welcome to <Text style={styleText.subheader}>React</Text> Native!{'\n'}
            This is so <Text style={styleText.bold}>cool!</Text>
        </Text>
    </View>
);

const AdvancedType = () => (
    <View style={styleAdvanced.main}>
        <Text style={styleAdvanced.text}>
            Fun styling <Text style={styleAdvanced.bold}> inside of</Text>
            <Text style={styleAdvanced.italic}> React Native!</Text>{'\n'}
        </Text>
        <Text style={[styleAdvanced.text, styleAdvanced.moreLineHeight, styleAdvanced.right]}>
            I am right aligned and have more<Text style={{fontFamily: 'Georgia'}}> lineheight </Text>
            than the text above.
        </Text>
        <Text style={[styleAdvanced.text, styleAdvanced.center, styleAdvanced.thin]}>
            I am centered and very thin!
        </Text>
    </View>
);

//Encapsulating Text Sytles in Reusable Components
const Bold = ({children}) =>
    <Text style={boldTextStyles.text}>{children}</Text>;

Bold.propTypes = {
    children: React.PropTypes.node.isRequired
};

const boldTextStyles = StyleSheet.create({
    text: {
        fontWeight: '600'
    }
});


const BodyCopy = ({children}) =>
    <Text style={bodyCopyStyles.text}>{children}</Text>

BodyCopy.propTypes = {
    children: React.PropTypes.node.isRequired
};

const bodyCopyStyles = StyleSheet.create({
    text: {
        fontFamily: 'Helvetica',
        fontSize: 18,
        color: '#333'
    }
});



