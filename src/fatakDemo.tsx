import React from "react";
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from "react-native";

const Fatakdemo = () => {
    return (
        <View style={styles.conone}>
            <Text style={styles.txtsend}>Send Money</Text>
            <View style={styles.contwo}>
                
                <View style={styles.innercon}>
                <TouchableOpacity>
                
                <View style={styles.imgsquare}>
                    <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0c2cJapYphZc2foMjDQDDYZGByFvmtIW3Q&usqp=CAU'}}
   style = {styles.imgahig}
   />


                </View>
                <Text style={styles.txtstyle}>Scan & Pay</Text>
                </TouchableOpacity>
                </View>
                
                <View style={styles.innercon}>
               
                <View style={styles.imgsquare}>
                <Image source = {{uri:'https://cdn.iconscout.com/icon/free/png-256/upi-money-transfer-1817147-1538015.png'}}
   style = {styles.imgahig}
   />
                   
                </View>
                <Text style={styles.txtstyle}>To UPI</Text>
                
                </View>
                <View style={styles.innercon}>
                <View style={styles.imgsquare}>
                <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX4Bfp_dspoq2LoMZlSf-O1IdQ2jUPfFq6Vw&usqp=CAU'}}
   style = {styles.imgahig}
   />
                   

                </View>
                <Text style={styles.txtstyle}>To Self</Text>
                </View>
                <View style={styles.innercon}>
                    <TouchableOpacity>
                
                <View style={styles.imgsquare}>
                <Image source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhsN0QeTRGx-KfvhE2YRVaOGZS8i-V9lFVvA&usqp=CAU'}}
   style = {styles.imgahig}
   />
                    
                </View>
                <Text style={styles.txtstyle}>To BankA/C</Text>
                </TouchableOpacity>
                </View>
                
            </View>

        </View>

                      
    )
}

const styles = StyleSheet.create({
    conone: {
        width: '100%',
        height: Dimensions.get('window').width * 0.45,
        borderRadius: 10,
        borderColor:'#ECDDFF',
        borderWidth: 1,
        padding:'5%'
    },
    contwo: {
        flexDirection: 'row',
        justifyContent: 'space-around',


    },
    imgsquare: {
        width: Dimensions.get('window').width * 0.15,
        height: Dimensions.get('window').width * 0.15,
        backgroundColor: "white",
        borderColor:"#CDCDCD",
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:'15%',
        borderWidth:1

    },
    imgahig: {
        width: Dimensions.get('window').width * 0.13,
        height: Dimensions.get('window').width * 0.13,
        borderRadius: 25

    },
    txtsend:{
        fontSize:20,
        fontWeight:'bold',

    },
    innercon:{
        marginTop:"10%",
        alignItems:"center",
        
    },
    txtstyle:{
        fontSize:11
    }

});

export default Fatakdemo;