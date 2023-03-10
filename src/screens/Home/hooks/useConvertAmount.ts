import { useState } from "react"

export default function useConvertAmount() {
    const [fromCurrency, setFromCurrency] = useState<number>(0)
    const [toCurrency, setToCurrency] = useState<number>(0)

    function convertFromAmount(value: string, ratio: number) {
        try {
            var amount = parseFloat(value);
            setFromCurrency(amount >= 0 ? amount : 0);
            setToCurrency(amount >= 0 ? amount * ratio : 0);
        } catch (error) {
            console.error(error);
            zeroStates();
        }
    }

    function convertToAmount(value: string, ratio: number) {
        try {
            var amount = parseFloat(value);
            setFromCurrency(amount >= 0 ? amount / ratio : 0);
            setToCurrency(amount >= 0 ? amount : 0);
        } catch (error) {
            console.error(error);
            zeroStates();
        }
    }

    function zeroStates() {
        setFromCurrency(0);
        setToCurrency(0);
    }

    return {
        fromCurrency: fromCurrency.toString(),
        toCurrency: toCurrency.toString(),
        convertFromAmount,
        convertToAmount
    }
}