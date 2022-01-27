import {useState, useCallback} from 'react';

export const useControlledInput = (initialValue) => {

    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, []);

    const handleReset = useCallback(() => {
        setInputValue(initialValue);
    }, []);

    return {inputValue, handleChange, handleReset};
};
