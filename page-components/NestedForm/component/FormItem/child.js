import Button from '@/common/component/Button';
import getField from '@/common/form/getField'
import styles from './styles.module.css';
import FormItem from '.';

function Child({ formHook, controls, remove, index, field, parentName, nestedLevel, setControlsState }) {
    const { register } = formHook;

    return (
        <div className={styles.flex_box}>
            {controls.map((controlItem) => {
                const { name, label, type, rules } = controlItem

                const Element = getField(type);

                if (type === 'fieldArray') {
                    return (
                        <FormItem
                            key={name}
                            formhook={formHook}
                            {...controlItem}
                            nestedLevel={nestedLevel + 1}
                            name={`${parentName}.${index}.${name}`}
                            setControlsState={setControlsState}
                        />
                    )
                }

                return (
                    <div key={`${name}_${field?.id}`} className={styles.flex_col}>
                        <p className={styles.label}>{label}</p>
                        <Element
                            {...controlItem}
                            {...register(`${parentName}.${index}.${name}`, rules)}
                            name={`${parentName}.${index}.${name}`}
                            key={`${parentName}.${index}.${name}`}
                        />
                    </div>
                )
            })}
            <Button size='sm' onClick={() => remove(index, 1)}>Remove {nestedLevel}</Button>
        </div>
    )
}

export default Child