import React from 'react'
import { useForm } from 'react-hook-form'
import { appendControls, newFormControls } from '../configuration/formControls';

const addControls = ({ controls, nestedLevel }) => {
    let updateControls = controls;
    updateControls.controls.push({
        ...appendControls,
        name: `test_${nestedLevel}`
    })
    return updateControls;
}

const useNestedForm = () => {
    const formHook = useForm();

    const onSubmit = (data) => {
        console.log(data, 'data');
    }

    const onError = (err) => {
        console.log(err, ' errr');
    }

    const getControls = ({ add, controls, nestedLevel }) => {
        if (add) {
            return addControls({ controls, nestedLevel })
        }

        return newFormControls
    }

    return {
        formHook,
        onSubmit, onError,
        getControls


    }
}

export default useNestedForm