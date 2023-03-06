import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, FlatList, TouchableOpacity} from 'react-native';
import { currenciesLabel } from '../../utils/currencies';
import { CurrencyItem } from '../CurrencyItem';
import { useCurrency } from './hooks/useCurrency';

interface CurrencySelectorProps {
    defaultCurrency?: string;
}

export default function CurrencySelector({defaultCurrency, ...props}: CurrencySelectorProps) {
    const [modalVisible, setModalVisible] = useState(false);
    const {DEFAULT_CURRENCY_NAME, changeCurrency, currentCurrencyLabel, currentCurrencyValue } = useCurrency();

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
                        currentCurrencyLabel ? currentCurrencyLabel : 
                            defaultCurrency ? defaultCurrency : DEFAULT_CURRENCY_NAME
                    }
                </Text>
            </Pressable>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                    <View style={styles.modalView}>
                        <Text>Escolha a moeda</Text>
                        <FlatList 
                            data={currenciesLabel}
                            renderItem={({item}) => 
                                <CurrencyItem 
                                    currency={item} 
                                    onPressItem={() => {
                                        changeCurrency(item);
                                        setModalVisible(!modalVisible);
                                    }} 
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
});