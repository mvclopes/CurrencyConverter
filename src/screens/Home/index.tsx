import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Components
import AmountInputField from "../../components/AmountInputField";
import { MONEY_BACKGROUND, MONEY_EXCHANGE_ICON } from "../../../asset/images";
import useConvertAmount from "./hooks/useConvertAmount";
import CurrencySelector from "../../components/CurrencySelector";

export default function Home() {
    const { fromCurrency, toCurrency, convertToAmount, convertFromAmount } = useConvertAmount();

    return(
        <ImageBackground blurRadius={4} style={styles.container} source={MONEY_BACKGROUND}>
            <SafeAreaView>
                <Text style={styles.title}>Conversor de moedas</Text>

                <View style={styles.row}>
                    <CurrencySelector />
                    <AmountInputField
                        onChangeText={(value:string) => convertFromAmount(value, 5)}
                        value={fromCurrency}
                        placeholder='Moeda a ser convertida'
                        defaultValue="0"
                    />
                </View>
                
                <TouchableOpacity onPress={() => console.log('Change currency')}>
                    <Image style={styles.image} source={MONEY_EXCHANGE_ICON}/>
                </TouchableOpacity>
                
                <View style={styles.row}>
                    <CurrencySelector defaultCurrency="EURO"/>
                    <AmountInputField
                        onChangeText={(value:string) => convertToAmount(value, 1) }
                        value={toCurrency}
                        placeholder='Moeda convertida'
                        defaultValue="0"
                    />
                </View>
            </SafeAreaView>
          </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    result: {
        color: '#FF0000',
        fontSize: 24,
        fontWeight: 'bold',
    },
    containerButton: {
        marginHorizontal: 16,
    },
    image: {
        alignSelf: 'center',
        width: 50,
        height: 50
    }
});