import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";

// Components
import AmountInputField from "../../components/AmountInputField";
import CurrencySelector from "../../components/CurrencySelector";

import { MONEY_BACKGROUND, MONEY_EXCHANGE_ICON } from "../../../asset/images";

import RealEnum from "../../utils/enums/realEnum";

export default function Home() {
    const [ratio, setRatio] = useState(RealEnum.DOLAR);
    const [amount, setAmount] = useState(0);
    const [convertedAmount, setConvertedAmount] = useState(0);

    return(
        <ImageBackground blurRadius={4} style={styles.container} source={MONEY_BACKGROUND}>
            <SafeAreaView>
                <Text style={[styles.title]}>Converta para reais</Text>

                <View style={styles.row}>
                    <View style={{flex:1, marginStart: 16}}>
                        <CurrencySelector onCurrencyChanged={(value) => {
                            setRatio(value);
                            setConvertedAmount(amount*value)
                        }}/>
                    </View>
                    <View style={{flex:2, marginHorizontal: 16}}>
                        <AmountInputField
                            onChangeText={(value:string) => {
                                var amount = parseFloat(value);
                                var convertedAmount = amount * ratio;
                                setAmount(amount >= 0 ? amount : 0);
                                setConvertedAmount(convertedAmount >= 0 ? convertedAmount : 0);
                            }}
                            value={amount.toString()}
                            defaultValue="0"
                        />
                    </View>
                </View>
                
                <Image style={styles.image} source={MONEY_EXCHANGE_ICON}/>
                
                <View style={styles.row}>
                    <View style={{flex:1, marginHorizontal: 16}}>
                        <AmountInputField
                            editable={false}
                            onChangeText={(value:string) => {

                            }}
                            value={convertedAmount.toString()}
                            defaultValue="0"
                        />
                    </View>
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
    },
    title: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 24,
        alignSelf: 'center',
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
        height: 50,
        margin: 16
    }
});