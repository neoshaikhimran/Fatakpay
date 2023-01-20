import React, { useState } from 'react';
import { Dimensions, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Fatakdemo from './src/fatakDemo';
import Fataktwo from './src/fataktwo';

const Flex = () => {
  const [val, setVal] = useState('')
  const onSave = (newtext: React.SetStateAction<string>) => {
    setVal(newtext);
    console.log("HAIAIAIAI----->", val)


  }
  return (

    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      {/* <Header/> */}

      <View style={{
        alignItems: 'center', justifyContent: 'space-around', padding: '5%', backgroundColor:"#FFFFFF"
      }}>
        <Fataktwo />
        <TouchableOpacity>
          <View style={styles.buttontwo}>
            <Text style={styles.appxt} >EMI Schedule</Text>


          </View>
        </TouchableOpacity>

      </View>
      <View style={{
        backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-around', flexDirection: 'column', paddingLeft: '5%', paddingTop: 0,
        paddingRight: '5%'
      }} >
        <Fatakdemo />

      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    //padding:10,
    paddingTop: Platform.OS === 'android' ? 0 : 40,

  },
  square: {
    width: '20%',
    height: Dimensions.get('window').width * 0.1 / 2,
    backgroundColor: 'yellow'
  },
  squareone: {
    width: '20%',
    height: Dimensions.get('window').width * 0.1 / 2,
    backgroundColor: 'pink'
  },
  squaretwo: {
    width: '20%',
    height: Dimensions.get('window').width * 0.1 / 2,
    backgroundColor: 'grey'
  },
  input: {
    borderWidth: 2,
    borderColor: 'red',
    height: '30%',
    width: '100%',
    transform: [{ rotate: '45deg' }],
  },
  triangle: {
    width: 100,
    height: 100,
    borderStyle: 'solid',
    overflow: 'hidden',
    borderTopWidth: 6,
    borderRightWidth: 4,
    borderBottomWidth: 0,
    borderLeftWidth: 4,
    borderTopColor: 'blue',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
  appxt: {
    color: 'black',
    fontSize: 12,
  },
  buttontwo: {
    width: Dimensions.get('window').width * 0.3,
    height: 33,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    left: -90,
    top: -25,
   

  },
});

export default Flex;