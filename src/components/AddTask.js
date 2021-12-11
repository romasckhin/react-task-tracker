import React, {useState} from 'react';

const AddTask = ({addTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a task')
            return
        }
        addTask({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={event => setText(event.target.value)}/>
            </div>

            <div className="form-control">
                <label>Day & Time</label>
                <input type="text" placeholder='Add Day & Time' value={day}
                       onChange={event => setDay(event.target.value)}/>
            </div>

            <div className="form-control form-control-check">
                <label>Set reminder</label>
                <input checked={reminder} type="checkbox" value={reminder}
                       onChange={event => setReminder(event.currentTarget.checked)}/>
            </div>

            <input className='btn btn-block' type="submit" value='Save Task'/>
        </form>
    );
};

export default AddTask;