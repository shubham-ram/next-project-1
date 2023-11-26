import  {  useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

const useTimer = () => {
    const timerRef = useRef('');

    const [timer, setTimer] = useState({
        hr: 1,
        min: 1,
        sec: 30
    });

    const formHook = useForm({
        defaultValues:{
            hour: 0,
            minute: 0,
            second: 0
        }
    });


    const stopTimer = ()=>{
        if(timerRef.current){
            clearInterval(timerRef.current);
        }
    }


    const startTimer = ()=>{
        if(timerRef.current){
            clearInterval(timerRef.current);
        }

        let timer = setInterval(()=>{
            setTimer((prev)=>{
                const {hr: prevHr, min: prevMin, sec: prevSec} = prev;
                let hr=prevHr, min=prevMin, sec = prevSec -1;

                if(prevHr === 0  && prevMin === 0 && prevSec === 0){
                    stopTimer();
                    return { hr: prevHr, min: prevMin, sec: prevSec }
                }

                if( prevSec === 0 && prevMin > 0){
                    sec = 59;
                    min = prevMin - 1;
                }

                if( prevMin === 0 && prevSec === 0 && prevHr > 0){
                    sec = 59;
                    min = 59;
                    hr = prevHr - 1;
                }

                return {
                    hr, min, sec
                }

            })
        },1000)

        timerRef.current = timer;
    }

    const startHandler = (data)=>{
        if( timerRef.current === ''){
            reStartHandler(data);
            return;
        }

        startTimer();
    }

    const reStartHandler = (data)=>{
        const { hour, minute, second } = data || {}

        setTimer({
            hr: hour,
            min: minute,
            sec: second
        })

        startTimer();
    }



    return { formHook, stopTimer, timer, reStartHandler, startHandler };
}

export default useTimer