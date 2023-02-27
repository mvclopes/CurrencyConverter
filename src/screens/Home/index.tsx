import { useState } from "react";
import { Button, Image, ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Components
import AmountInputField from "../../components/AmountInputField";
import { MONEY_BACKGROUND, MONEY_EXCHANGE_ICON } from "../../../asset/images";

export default function Home() {
    const [fromCurrency, setFromCurrency] = useState<number>()
    const [toCurrency, setToCurrency] = useState<number>()

    return(
        <ImageBackground blurRadius={4} style={styles.container} source={MONEY_BACKGROUND}>
            <SafeAreaView>
                <Text style={styles.title}>Conversor de moedas</Text>

                <AmountInputField
                    onChangeText={setFromCurrency}
                    value={fromCurrency}
                    placeholder='Moeda a ser convertida'
                />

                <TouchableOpacity onPress={() => console.log('Change currency')}>
                    <Image style={styles.image} source={MONEY_EXCHANGE_ICON}/>
                </TouchableOpacity>
                
                <AmountInputField
                    onChangeText={setToCurrency}
                    value={toCurrency}
                    placeholder='Moeda convertida'
                />

                <View style={styles.containerButton}>
                    <Button
                        onPress={() => console.log(`from: ${fromCurrency} - to: ${toCurrency}`)}
                        title="Converter moeda"
                        color="#841584"
                        accessibilityLabel="Botão de converter moedas"
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
    title: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 24,
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