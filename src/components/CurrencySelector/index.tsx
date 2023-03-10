import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, FlatList} from 'react-native';
import { currencies } from '../../utils/currencies';
import { Currencies, CurrenciesEnum } from '../../utils/enums/currenciesEnum';
import { CurrencyItem } from '../CurrencyItem';

interface CurrencySelectorProps {
    defaultCurrency?: CurrenciesEnum;
    onCurrencyChanged: (value:number) => void;
}

const DEFAULT_CURRENCY_VALUE = 1;

export default function CurrencySelector({defaultCurrency, onCurrencyChanged}: CurrencySelectorProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState<string>();

    function changeCurrency(currency: CurrenciesEnum) {
        let value: number = currencies.get(currency) ? currencies.get(currency) as number : DEFAULT_CURRENCY_VALUE;
        setCurrentCurrencyLabel(currency);
        onCurrencyChanged(value);
        console.log(`currency: ${currency} value: ${value}`);
        setModalVisible(!modalVisible);
    }


    return (
        <View>
            <Pressable
                style={({pressed}) => [
                    {
                        backgroundColor: pressed ? '#C3C3C3' : '#FFF',
                        borderColor: pressed ? '#FFF' : '#26874E'
                    },
                    styles.box
                ]}
                onPress={() => setModalVisible(true)}>
                <Text style={styles.currencyText}>
                    {
                        currentCurrencyLabel ? currentCurrencyLabel : 
                            defaultCurrency ? defaultCurrency : CurrenciesEnum.DOLAR
                    }
                </Text>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>Escolha a moeda</Text>
                        <FlatList 
                            data={Currencies}
                            renderItem={({item}) => 
                                <CurrencyItem 
                                    currency={item} 
                                    onPressItem={() => changeCurrency(item)} 
                                /> 
                            }
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
    borderWidth: 2,
    padding: 10,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyText: {
    fontWeight: 'bold',
    color: '#26874E'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#26874E',
    alignSelf: 'center',
  }  
});