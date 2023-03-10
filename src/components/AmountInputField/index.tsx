import { StyleSheet, TextInput, TextInputProps } from "react-native";

export default function AmountInputField({...props}: TextInputProps) {
    return <TextInput 
            placeholderTextColor={'#00000095'} 
            keyboardType="decimal-pad" 
            style={styles.input} 
            inputMode='decimal'
            {...props}
        />
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#FFF',
        borderColor: '#26874E',
        borderRadius: 16,
        color: '#26874E',
        fontWeight: 'bold',
        textAlign: 'center',
      },
});