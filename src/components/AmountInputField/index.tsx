import { StyleSheet, TextInput } from "react-native";

export default function AmountInputField({...props}) {
    return <TextInput keyboardType="decimal-pad" style={styles.input} {...props}/>
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        margin: 24,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFF',
        borderColor: '#C3C3C3',
        borderRadius: 16
      },
});