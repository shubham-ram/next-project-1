import Button from '@/common/component/Button'
import controls from '../configuration/controls';
import getField from "@/common/form/getField";
import useTimer from '../hooks/useTimer';

import styles from './styles.module.css'

const formatTimeVal = (time)=>{
    if(time > 9) return time;

    return `0${time}`
}

function Timer() {
    const { formHook, timer, startHandler, reStartHandler, stopTimer } = useTimer();

    const { register, handleSubmit, formState:{ errors } } = formHook;


    return (
        <div className={styles.container}>
            <div className={`${styles.row} ${styles.time_container}`}>
                <span>{formatTimeVal(timer.hr)}</span> : 
                <span>{formatTimeVal(timer.min)}</span> : 
                <span>{formatTimeVal(timer.sec)}</span> 
            </div>

            <div className={styles.row}>
                {controls.map((controlItem)=>{
                    const {name, label, type, rules} = controlItem;
                    const Element = getField(type);

                    return (
                        <div key={name} className={styles.col}>
                            <p className={styles.label}>{label}</p>
                            <Element {...controlItem} {...register(name, rules)}/>
                            <p className={styles.errors}>
                                {errors?.[name]?.message || errors?.[name]?.type}
                            </p>
                         </div>
                    )
                })}
                
            </div>

            <div className={styles.footer}>
                <Button onClick={handleSubmit(startHandler)}>Start</Button>
            
                <Button onClick={handleSubmit(reStartHandler)}>Restart</Button>
            
                <Button onClick={stopTimer}>Pause</Button>
            </div>
        </div>
    )
}

export default Timer