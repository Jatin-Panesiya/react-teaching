import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import PrimaryButton from "../common/PrimaryButton/PrimaryButton";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editId, setEditId] = useState(null);

    const handleTaskAdd = () => {
        const taskObj = {
            id: uuidv4(),
            task,
            isDone: false
        }

        setTodos([...todos, taskObj]);
        setTask("")
    }

    const handleDeletetTask = (id) => {
        const filteredData = todos.filter((ele) => ele?.id !== id);
        setTodos(filteredData);
    }

    const handleTaskUpdate = () => {
        const updatedData = todos.map((ele) => {
            if (ele.id === editId) {
                return { id: ele.id, task }
            }
            return ele
        })

        setTodos(updatedData)
        setEditId(null);
        setTask("");
    }

    const handleTaskDone = (id) => {
        const updatedData = todos.map((ele) => {
            if (id === ele.id) {
                return { id: ele.id, task: ele.task, isDone: !ele.isDone }
            }
            return ele
        })
        setTodos(updatedData)
    }

    return (
        <div>
            <div className="flex gap-5 m-5 items-center">
                <PrimaryButton text="Add" onclickFn={handleTaskAdd} />
                <input type="text" className="m-5 border px-3 rounded" placeholder="Add Task" value={task} onChange={(event) => { setTask(event.target.value) }} />
                {
                    editId ?
                        (<div className="flex gap-5">
                            <button className="px-5 py-2 rounded bg-green-300 cursor-pointer" onClick={handleTaskUpdate}>Update</button>
                            <button className="px-5 py-2 rounded bg-green-300 cursor-pointer" onClick={() => { setEditId(null); setTask(''); }}>Cancle</button>
                        </div>) :
                        (<PrimaryButton text="Add" onclickFn={handleTaskAdd} />)
                    //  <button className="px-5 py-2 rounded bg-green-300 cursor-pointer" onClick={handleTaskAdd}>Add</button>
                }
            </div>
            <div>
                {
                    todos.map((ele) => (
                        <div key={ele.id} className="flex m-5 gap-5">
                            <div className={`${ele.isDone ? "line-through" : ""}`}>{ele.task}</div>
                            <PrimaryButton text="Delete" onclickFn={() => handleDeletetTask(ele.id)} />
                            <PrimaryButton text="Edit" onclickFn={() => { setEditId(ele.id); setTask(ele.task) }} />
                            <PrimaryButton text={ele?.isDone ? "Not Done" : "Done"} onclickFn={() => handleTaskDone(ele.id)} />
                        </div>
                    ))
                }
            </div>

            <div>
                Completed Task : {todos.filter((ele) => ele.isDone).length}
            </div>
            <div>
                Pending Task : {todos.filter((ele) => !ele.isDone).length}
            </div>
            <div>
                Total Task : {todos.length}
            </div>
        </div>
    )
}

export default Todo
