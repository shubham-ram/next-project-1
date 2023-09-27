
import React, { useState,useEffect } from 'react'
import List from './List'
import styles from './styles.module.css';
import useGetTask from '../hooks/useGetTask';

const DEFAULT_TASK = {
    pending_task : ['Study1', 'Game1'],
    in_progress_task : ['Study2', 'Game2'],
    completed : ['Study3', 'Game3']
}

const TASK_LIST = ['pending_task', 'in_progress_task', 'completed'];

function ToDoList() {
    const [taskList, setTaskList] = useState(DEFAULT_TASK);

    const {getTask} = useGetTask();

    useEffect(()=>{
        getTask()
    },[])

    return (
        <div className={styles.container}>
            <h1>ToDoList</h1>

            <div className={styles.list_container}>
                {TASK_LIST.map((list)=>(
                    <List key={list} title={list} taskList={taskList[list]} setTaskList={setTaskList} />
                ))}
            </div>
        </div>
    )
}

export default ToDoList