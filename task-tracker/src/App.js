import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'

function App() {
  const [tasks, setTasks] = useState(
    [
        { 
            id: 1,
            text: 'Meeting at Work',
            day: '24 February',
            reminder: true
        },
        { 
            id: 2,
            text: 'Eat Glazures',
            day: '31 March',
            reminder: true
        },
        { 
            id: 3,
            text: 'Run',
            day: '7 Jule',
            reminder: false
        }
    ]
)

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header title='Task Tracker' />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show!'}
    </div>
  );
}

export default App
