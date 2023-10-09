import React from 'react'
import styles from './styles.module.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { decrementCounter, incrementCounter } from '@/store/action/counter'

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state)=>state)


  return (
    <div className={styles.container}>
        <h1>Counter</h1>

        <div className={styles.flex_box}>
            <p>{counter}</p>
            <div className={styles.footer}>
                <button onClick={()=>dispatch(incrementCounter(1))}>Increment</button>
                <button onClick={()=>dispatch(decrementCounter(1))}>Decrement</button>
            </div>

            <div className={styles.footer}>
                <button onClick={()=>dispatch(incrementCounter(2))}>Increment by 2</button>
                <button onClick={()=>dispatch(decrementCounter(2))}>Decrement by 2</button>
            </div>
        </div>
    </div>
  )
}

export default Counter