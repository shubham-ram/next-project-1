import { useForm } from "react-hook-form";
import styles from './styles.module.css'
import { useState } from 'react';
import getField from "@/common/form/getField";
import { loginControls, signUpControls } from "../configuration/loginControls";

const FOOTER_TEXT = {
    false: "Already have an account? Log in",
    true: "Don't have an account? Sign Up"
}

function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);

    const {register, handleSubmit, formState:{errors}} = useForm();
    const controls = isLogin ? loginControls : signUpControls;

    const onSubmit = (data)=>{
        console.log(data);
    }

    console.log(errors,'errors');

    return (
        <div className={styles.main}>
            <div className={styles.container}>

                <div className={styles.form_container}>
                    {controls.map((config)=>{
                        const {name, type, rules} = config;
                        const Elements = getField(type)

                        return (
                            <div key={name} className={styles.col}>
                                <Elements key={name} control = {register(name, rules)} {...config} />
                            </div>
                        )
                    })}
                    <button onClick={handleSubmit(onSubmit)}>Submit</button>
                    <p className={styles.footer_txt} onClick={()=>setIsLogin((prev)=>!prev)}>{FOOTER_TEXT[isLogin]}</p>
                </div>

                
            </div>
        </div>
    )
}

export default LoginSignup