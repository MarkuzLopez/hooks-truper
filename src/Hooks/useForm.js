import React, { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [valuesForm, setValuesForm] = useState(initialState);

    const onChangeForm = ({target}) => { 
        
        setValuesForm({ 
            ...valuesForm,
            [target.name]: target.value
        });
    }

    return [valuesForm, onChangeForm];
}
