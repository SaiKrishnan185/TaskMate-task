import './AddTask.css'

export const AddTask = ({taskList, setTasklist, task, setTask}) => {

    const handleSubmit = (event) => {
        event.preventDefault();

        if (task.id){
            const date = new Date();
            if (event.target.task.value){
            const updateTask = taskList.map((todo) => (
                todo.id === task.id ? {id:task.id ,name:event.target.task.value ,time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
            ))
            setTasklist(updateTask);
            setTask({})
            }
            // event.target.task.value = "";
            
        }
        else{
            const date = new Date();
            if (event.target.task.value){
                const newTask = {id: date.getTime() ,name:event.target.task.value ,time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`};
                setTasklist([...taskList, newTask]);
                setTask({})
                // event.target.task.value = "";
            }
        }
        
    }

  return (
    <section className="AddTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name='task' value={task.name || ""} autoComplete='off' placeholder=' Add Task' maxLength="25" onChange={event => setTask({...task,name: event.target.value})} />
            <button type='submit'>{task.id ? "Update" : "Add"}</button>
        </form>
    </section>
  )
}
