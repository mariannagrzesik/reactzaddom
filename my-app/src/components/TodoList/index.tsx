import { ChangeEvent, FormEvent, useState } from 'react';
import { isReturnStatement } from 'typescript';
import './TodoList.scss';

type TodoListItem={
    id: number,
    task: string
}

export const TodoList=()=>{
    const [task, setTask]=useState("");
    const [list, setList]=useState<TodoListItem[]>([]);
    //const list=['costam', 'blablabla', 'djshhg']

    const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        setTask(event.target.value);
    };
    
    const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        const newTask:TodoListItem={
            id: Math.random()*1000,
            task,
        };

        setList((prev)=>([...prev, newTask]));
        setTask("");

    }
    return(
        <div>
            <h1>Todo List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="dodaj task" value={task} onChange={handleChange} />
                <button type='submit'>Dodaj zadanie</button>
            </form>
            <div>
                <ul>
        {list.map(item=>{
            return(
                <li key={item.id}>{item.task}</li>
            )
        })}
                </ul>
            </div>
        </div>
    )
}