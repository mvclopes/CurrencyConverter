import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Components
import AmountInputField from "../../components/AmountInputField";
import CurrencySelector from "../../components/CurrencySelector";

import { MONEY_BACKGROUND, MONEY_EXCHANGE_ICON } from "../../../asset/images";

// Hooks
import useConvertAmount from "./hooks/useConvertAmount";

export default function Home() {
    const { fromCurrency, toCurrency, convertToAmount, convertFromAmount } = useConvertAmount();
    const [ratioTo, setRatioTo] = useState(1);
    const [ratioFrom, setRatioFrom] = useState(1);

    return(
        <ImageBackground blurRadius={4} style={styles.container} source={MONEY_BACKGROUND}>
            <SafeAreaView>
                <Text style={styles.title}>Conversor de moedas</Text>

                <View style={styles.row}>
                    <CurrencySelector onCurrencyChanged={(value) => {
                        setRatioTo(value);
                    }}/>
                    <AmountInputField
                        onChangeText={(value:string) => convertFromAmount(value, ratioTo)}
                        value={fromCurrency}
                        placeholder='Moeda a ser convertida'
                        defaultValue="0"
                    />
                </View>
                
                <TouchableOpacity onPress={() => console.log('Change currency')}>
                    <Image style={styles.image} source={MONEY_EXCHANGE_ICON}/>
                </TouchableOpacity>
                
                <View style={styles.row}>
                    <CurrencySelector defaultCurrency="EURO"
                        onCurrencyChanged={(value) => {
                            setRatioFrom(value);
                    }}/>
                    <AmountInputField
                        editable={false}
                        onChangeText={(value:string) => convertToAmount(value, ratioFrom) }
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