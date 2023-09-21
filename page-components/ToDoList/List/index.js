import React from 'react'
import styles from './styles.module.css'
import { startCase } from 'lodash';
function List({ taskList = [], title = '', setTaskList }) {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{startCase(title)}</h2>

            <div className={styles.list_container}>
                {taskList.map((ele) => (
                    <div key={ele} className={styles.col} draggable
                        onDragStart={(e) => {
                            e.dataTransfer.setData("dataEle", ele);
                            e.dataTransfer.setData("prevTask", title);
                        }}
                       
                        onDragOver={(e) => {
                            e.preventDefault();
                            console.log('dragOver', e);
                        }}

                        onDrop={(e) => {
                            const data = e.dataTransfer.getData("dataEle");
                            const prevTaskTitle = e.dataTransfer.getData("prevTask");

                            setTaskList((prev) => {
                                const prevTask = prev[prevTaskTitle].filter((ele)=> ele !== data);

                                return ({
                                    ...prev,
                                    [title]: [...prev[title], data],
                                    [prevTaskTitle]: prevTask
                                })
                            });
                            e.preventDefault();
                        }}

                    >
                        {ele}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List