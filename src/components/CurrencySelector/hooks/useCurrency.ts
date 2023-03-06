import { useState } from "react";
import { currencies } from "../../../utils/currencies";

const DEFAULT_CURRENCY_NAME = 'Real';
const DEFAULT_CURRENCY_VALUE = 1;

export const useCurrency = () => {
    const [currentCurrencyLabel, setCurrentCurrencyLabel] = useState<string>();
    const [currentCurrencyValue, setCurrentCurrencyValue] = useState<number>(DEFAULT_CURRENCY_VALUE);

    function changeCurrency(currency: string) {
        let value: number = currencies.get(currency) ? currencies.get(currency) as number : DEFAULT_CURRENCY_VALUE;
        setCurrentCurrencyLabel(currency);
        setCurrentCurrencyValue(value);
        console.log(`currency: ${currency} value: ${value}`);
    }


    return {
        DEFAULT_CURRENCY_NAME,
        currentCurrencyLabel,
        currentCurrencyValue,
        changeCurrency
    }
}