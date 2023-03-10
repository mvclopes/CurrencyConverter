import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { CurrenciesEnum } from "../../utils/enums/currenciesEnum";

interface CurrencyItemProps {
    currency: CurrenciesEnum;
    onPressItem: () => void;
}

export const CurrencyItem = ({currency, onPressItem}: CurrencyItemProps) => {
    return(
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => onPressItem()} >
            <Text style={styles.currencyText}>{currency}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item:{
        padding: 20,
        margin: 8,
        backgroundColor: '#26874E',
        borderRadius: 16,
        alignItems: 'center'
    },
    currencyText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
      },
});