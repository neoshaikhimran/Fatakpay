import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const Fataktwo = () => {
    return (
        <View style={styles.conmain}>
            <View style={styles.conone}>
                <View style={styles.innerone}>
                    <View>
                        <Text style={styles.lontxt}>
                            Loan EMI
                        </Text>
                        <Text>$7,850</Text>

                    </View>
                    <View style={styles.left}>
                        <Text style={styles.appltxt} >Applied on</Text>
                        <Text >06 Oct 2022</Text>

                    </View>

                </View>
                <View style={styles.innerone}>
                    <View>
                        <Text >
                            Loan Amount
                        </Text>
                        <Text>$65,000</Text>

                    </View>
                    <View style={styles.left}>
                        <Text style={styles.appltxt} >Tenure</Text>
                        <Text >9 Months</Text>

                    </View>

                </View>
              
              
                    <View>
                        <Text style={{color:'blue'}}>-------------------X-------------------</Text>
                    </View>
                <View style={styles.innerone}>
                    <View>
                        <Text >
                            Total Interest
                        </Text>
                        <Text>$2000</Text>

                    </View>
                    <View style={styles.left}>
                        <Text style={styles.appltxt} >Interest Rate</Text>
                        <Text >06 Oct 2022</Text>

                    </View>

                </View>
                
            </View>
            <View style={styles.innerflex}>
                <View style={styles.rectangle}>
                    <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.txtone}> Pay now</Text>

                    </View>
                    </TouchableOpacity>

                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    conmain: {
        padding: 0, width: '100%',
        height: Dimensions.get('window').width * 0.7,
        marginBottom: '10%',


    },
    conone: {
        width: '100%',
        height: Dimensions.get('window').width * 0.7,
        borderRadius: 10,
        borderColor: '#ECDDFF',
        borderWidth: 1,
        padding: '10%',
        paddingRight: '10%',
        justifyContent: "space-around",
       
    },
    innerone: {
        flexDirection: 'row',
        justifyContent: "space-between",

    },
    lontxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: "#44226E",

    },
    appltxt: {
        fontSize: 15,
        marginTop: '6%'

    },
    left: {

        justifyContent: "flex-end",
        width: "34%"
    },
    button: {
        width: Dimensions.get('window').width * 0.3,
        height: 33,
        backgroundColor: "#44226E",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",


    },
    txtone: {
        color: 'white',
        fontSize: 12,

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

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: -39,
        borderRightWidth: -39,
        borderBottomWidth: 55,
        borderLeftColor: "transparent",
        borderRightColor: "#ECDDFF",
        borderBottomColor: "red",

        transform: [{ rotate: "180deg" }],
        right: -53,
        top: -10
    },
    innerflex: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        paddingRight: 6,
        shadowColor: "#ECDDFF",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,

    },
    rectangle: {
        width: '50%',
        height: '63%',
        backgroundColor: "white",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 17,
        borderColor: '#ECDDFF',
        borderWidth: 1,
        borderTopWidth: 0,
        alignItems: "center",
        justifyContent: 'center',
        //borderLeftWidth:0,
        right: -6,
        top: -7

    },
    rectangleone: {
        width: '50%',
        height: '55%',
        backgroundColor: "white",
        borderColor: '#ECDDFF',

        borderTopWidth: 0,
        alignItems: "center",
        justifyContent: 'center',
        //borderLeftWidth:0,
        right: -6,


    },

});

export default Fataktwo;