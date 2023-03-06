import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface CurrencyItemProps {
    currency: string;
    onPressItem: () => void;
}

export const CurrencyItem = ({currency, onPressItem}: CurrencyItemProps) => {
    return(
        <TouchableOpacity 
            style={styles.item} 
            onPress={() => onPressItem()} >
            <Text>{currency}</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    item:{
        padding: 20,
        margin: 8,
        backgroundColor: '#f9c2ff', 
      },
});