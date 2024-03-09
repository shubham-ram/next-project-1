import React from 'react'
import { useFieldArray } from 'react-hook-form'
import Child from './child';
import Button from '@/common/component/Button';
import styles from './styles.module.css'
import { newFormControls } from '../../configuration/formControls'

function FormItem({ formhook, name, controls, defaultValues, nestedLevel, setControlsState }) {
    const { control } = formhook || {};

    const { fields, append, remove } = useFieldArray({
        control,
        name
    });

    const grpHandler = () => {
        setControlsState((prev) => {
            return ([
                {
                    ...prev[0],
                    controls: [
                        ...prev[0].controls,
                        {
                            ...newFormControls[0],
                            name: `info_${nestedLevel}`
                        }
                    ]
                }
            ])
        })
    }

    return (
        <div className={styles.field_container}>
            {fields.map((field, index) => {
                return (
                    <Child
                        key={field.id}
                        parentName={name}
                        field={field}
                        index={index}
                        formHook={formhook}
                        controls={controls}
                        remove={remove}
                        append={append}
                        nestedLevel={nestedLevel}
                        setControlsState={setControlsState}
                    />
                )
            })}
            <div className={styles.add_btn}>
                <Button size='sm' onClick={() => append(defaultValues)}>Add {nestedLevel}</Button>
            </div>
        </div>
    )
}

export default FormItem