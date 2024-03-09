import React from 'react'
import styles from './styles.module.css';
import formControls, { newFormControls, appendControls } from '../configuration/formControls';
import getField from '@/common/form/getField';
import useNestedForm from '../hook/useNestedForm';
import FormItem from './FormItem';
import Button from '@/common/component/Button';
import { useState } from 'react';

function NestedForm() {
    const [controlsState, setControlsState] = useState(newFormControls);

    const { formHook, onSubmit, onError } = useNestedForm();
    const { register, handleSubmit } = formHook;

    const addGrp = () => {
        setControlsState((prev) => {
            const length = prev[0].controls.length
            return ([
                {
                    ...prev[0],
                    controls: [
                        ...prev[0].controls,
                        {
                            ...appendControls,
                            name: `info_${length}`
                        }
                    ]
                }
            ])
        })
    }

    console.log(controlsState, 'controlsState');

    return (
        <div className={styles.container}>NestedForm
            <div className={styles.formContainer}>
                {controlsState.map((control, index) => {
                    const { name, label, type, rules } = control;

                    const Element = getField(type)

                    if (type === 'fieldArray') {
                        return (
                            <FormItem key={name}
                                formhook={formHook}
                                {...control}
                                nestedLevel={0}
                                setControlsState={setControlsState}
                            />
                        )
                    }

                    return (
                        <div key={name} className={styles.form_col}>
                            <p className={styles.label}>{label}</p>
                            <Element
                                key={name}
                                {...control}
                                {...register(name, rules)}
                            />
                        </div>
                    )
                })}
                <Button className={styles.cndBtn} onClick={addGrp}>Condition Group</Button>
                <Button onClick={handleSubmit(onSubmit, onError)}>Submit</Button>
            </div>
        </div>
    )
}

export default NestedForm