import styles from './styles.module.css'
import getField from "@/common/form/getField";
import { toast } from 'react-toastify';
import useAuthentication from "../hook/useAuthentication";

const FOOTER_TEXT = {
    false: "Already have an account? Log in",
    true: "Don't have an account? Sign Up"
}

function LoginSignup() {
    const { isLogin, setIsLogin,formHook, controls, submitHandler } = useAuthentication();

    const {register, handleSubmit, formState: {errors}} = formHook || {};

    // const onSubmit = (data)=>{
    //     console.log(data,'data');
    //     loginUser(data)
    //     toast.success('Checking', {
    //         position: toast.POSITION.TOP_CENTER,
    //         theme: "colored",
    //         hideProgressBar: true,
    //         pauseOnHover: false,
    //         autoClose:1000
    //     })
    // }

    return (
        <div className={styles.main}>
            <div className={styles.container}>

                <div className={styles.form_container}>
                    {controls.map((config)=>{
                        const {name, type, rules} = config;
                        const Elements = getField(type)

                        return (
                            <div key={name} className={styles.col}>
                                <Elements 
                                    key={name} 
                                    {...config}  
                                    {...register(name, rules)} 
                                />
                                <p className={styles.error}>
                                    {errors?.[name]?.message || errors?.[name]?.type}
                                </p>
                            </div>
                        )
                    })}
                    <button onClick={handleSubmit(submitHandler)}>Submit</button>

                    <p 
                        className={styles.footer_txt}
                        onClick={()=>setIsLogin((prev)=>!prev)}
                    >
                        {FOOTER_TEXT[isLogin]}
                    </p>
                </div>

                
            </div>
        </div>
    )
}

export default LoginSignup