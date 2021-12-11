import './App.css'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";

function App() {

    const [task , setTask] = useState([
        {
            id:1,
            text:"Hahaaahahaha",
            day:100,
            reminder:true
        },
        {
            id:2,
            text:"Hahaaahahaha",
            day:100,
            reminder:true
        },
        {
            id:3,
            text:"Hahaaahahaha",
            day:100,
            reminder:true
        },
    ])

    const deleteTAsk = (id) => {
        setTask(task.filter(el => el.id !== id))
    }

    const toggleReminder = (id) => {
        setTask(task.map(el => el.id === id ? {...el,reminder: !el.reminder}:el))
    }

    const addTask = (el) => {

        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = { id, ...el }
        setTask([...task, newTask])

    }

    return (
        <div className='container'>

            <Header/>
            <AddTask
                addTask={addTask}
            />
            { task.length > 0 ?
                <Tasks
                    task={task}
                    deleteTAsk={deleteTAsk}
                    toggle={toggleReminder}
                />
          : 'No Tasks to Show'  }
        </div>
    );
}

export default App;
