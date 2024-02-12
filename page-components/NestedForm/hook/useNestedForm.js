import React from 'react'
import { useForm } from 'react-hook-form'

const useNestedForm = () => {
    const formHook = useForm();

    const onSubmit = (data) => {
        console.log(data, 'data');
    }

    const onError = (err) => {
        console.log(err, ' errr');
    }

    return {
        formHook,
        onSubmit, onError
    }
}

export default useNestedForm