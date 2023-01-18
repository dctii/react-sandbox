import useLocalStorage from "../hooks/useLocalStorage"

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '')
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  const onSubmit = (ev) => {
    ev.preventDefault()
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString()
    }
    setTasks([...tasks, taskObj])
  }

  const handleClear = (ev) => {
    ev.preventDefault()
    window.localStorage.clear()
    window.location.reload(true)
  }

  

  return (
    <>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input 
            type="text" 
            value={task} 
            onChange={(ev) => setTask (ev.target.value)} 
          />
          <button type="submit" className="btn btn-primary mx-1">
            Submit
          </button>
        </div>
      </form>

      <hr />
      <button  onClick={handleClear} className="btn btn-danger my-3">
            Clear List
      </button>
      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </>
  )
}

export default CustomHookExample2