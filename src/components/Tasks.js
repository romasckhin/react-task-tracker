import Task from "./Task";

const Tasks = ({task,deleteTAsk,toggle}) => {


    return (

        <div>

            {task.map(el =>
                <Task
                    key={el.id}
                    task={el}
                    deleteTAsk={deleteTAsk}
                    toggle={toggle}
                />)}

        </div>
    );
};

export default Tasks;