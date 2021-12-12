import './App.css'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {

    const [showAddTask, setShowAddTask] = useState(false)

    const [task, setTask] = useState([
        {
            id: 1,
            text: "Hahaaahahaha",
            day: 100,
            reminder: true
        },
        {
            id: 2,
            text: "Hahaaahahaha",
            day: 100,
            reminder: true
        },
        {
            id: 3,
            text: "Hahaaahahaha",
            day: 100,
            reminder: true
        },
    ])

    const deleteTAsk = (id) => {
        setTask(task.filter(el => el.id !== id))
    }

    const toggleReminder = (id) => {
        setTask(task.map(el => el.id === id ? {...el, reminder: !el.reminder} : el))
    }

    const addTask = (el) => {

        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...el}
        setTask([...task, newTask])

    }

    const onAdd = () => {
        setShowAddTask(!showAddTask)
    }


    return (
        <Router>
            <div className='container'>

                <Header
                    onAdd={onAdd}
                    showAdd={showAddTask}
                />
                <Routes>
                    <Route path='/' element={
                        <>
                            {showAddTask && <AddTask
                                addTask={addTask}
                            />}
                            {task.length > 0 ?
                                <Tasks
                                    task={task}
                                    deleteTAsk={deleteTAsk}
                                    toggle={toggleReminder}
                                />
                                : 'No Tasks to Show'}
                        </>
                    }/>

                    <Route path='/about' element={<About/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
