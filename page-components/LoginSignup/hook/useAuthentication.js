import { useState } from "react";
import { loginControls, signUpControls } from "../configuration/loginControls";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const useAuthentication = () => {
    const [isLogin, setIsLogin] = useState(true);

    const formHook = useForm();
    const { setError } = formHook

    const controls = isLogin ? loginControls : signUpControls;


    const registerUser = async ({ data })=>{
        try {
            const {name, email, password} = data || {};

            const resp = await fetch('/api/register',{
                method:"post",
                body : JSON.stringify({
                    name,
                    email,
                    password,
                })
            })

            await resp.json();

            toast.success('User Created SuccessFully', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                pauseOnHover: false,
            })

        } catch (error) {
            console.log(error);

            toast.error('Failed to create user', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                pauseOnHover: false,
            })
        }
    }
    
    const loginHandler=(data)=>{

    }

    const registerHandler = (data)=>{
        const {password, confirm_password } = data || {};

        if(password !== confirm_password){
            setError('confirm_password', {
                type: 'custom',
                message: "Password mismatch"
            });

            toast.error("Password Mismatch", {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                pauseOnHover: false,
            });

            return;
        }

        registerUser({ data });
    }

    const submitHandler = (data)=>{
        if(isLogin){
            loginHandler(data);
            return
        }

        registerHandler(data);
    }

    return {
        formHook, controls, isLogin, setIsLogin, submitHandler
    }
}

export default useAuthentication