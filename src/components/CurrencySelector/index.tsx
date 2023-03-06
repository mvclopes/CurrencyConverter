import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, FlatList, TouchableOpacity} from 'react-native';
import { currencies, currenciesLabel } from '../../utils/currencies';

const DEFAULT_CURRENCY_NAME = 'Real';
const DEFAULT_CURRENCY_VALUE = 1;

interface CurrencySelectorProps {
    defaultCurrency?: string;
}

// todo: componente deve esperar por opcional de valor inicial, caso contrário usar moeda default(Real)
export default function CurrencySelector({defaultCurrency, ...props}: CurrencySelectorProps) {
    const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState<string>();
    const [currentCurrencyValue, setCurrentCurrencyValue] = useState<number>(DEFAULT_CURRENCY_VALUE);
    const [modalVisible, setModalVisible] = useState(false);

    function changeCurrency(currency: string) {
        let value: number = currencies.get(currency) ? currencies.get(currency) : DEFAULT_CURRENCY_VALUE;
        setCurrentCurrencyLabel(currency);
        setCurrentCurrencyValue(value);
        setModalVisible(!modalVisible);
        console.log(`currency: ${currency} value: ${value}`);
    }

    const CurrencyItem = ({currency}) => {
        return(
            <TouchableOpacity style={styles.item} onPress={() => changeCurrency(currency)}>
                <Text>{currency}</Text>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <Pressable
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#C3C3C3' : '#FFF',
                    },
                    styles.box
                ]}
                onPress={() => setModalVisible(true)}>
                <Text>
                    {
                        currentCurrencyLabel ? currentCurrencyLabel : defaultCurrency ? defaultCurrency : DEFAULT_CURRENCY_NAME
                    }
                </Text>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true} // manter enquanto desenvolve para enxergar o layout
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View style={styles.modalView}>
                        <Text>Escolha a moeda</Text>
                        <FlatList 
                            data={currenciesLabel}
                            renderItem={({item}) => <CurrencyItem currency={item} /> }
                            keyExtractor={item => item}
                        />
                    </View>
            </Modal>
        </View>
    );
};



const styles = StyleSheet.create({
  box: {
    height: 60,
    margin: 24,
    borderWidth: 1,
    padding: 10,
    borderColor: '#C3C3C3',
    borderRadius: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  item:{
    padding: 20,
    margin: 8,
    backgroundColor: '#f9c2ff', 
  },
});