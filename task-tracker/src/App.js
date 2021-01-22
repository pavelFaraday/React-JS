import { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'

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

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
      : 'No tasks to show!'}
    </div>
  );
}

export default App
