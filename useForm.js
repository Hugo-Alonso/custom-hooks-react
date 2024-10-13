import React, { useState } from "react";

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState({});

    const onInputChange = ({target}) => {
        // console.log(event.target.value)
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value 
        })
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}