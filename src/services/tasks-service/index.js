const defaultTasks = [
  { task_id: "1", title: "Ir al banco", completed: false },
  { task_id: "2", title: "Revisar balance general", completed: false },
  { task_id: "3", title: "Ajustar métricas de diseño", completed: false },

  { task_id: "4", title: "Terminar la prueba", completed: true },
  { task_id: "5", title: "Debuggear código", completed: true },
  { task_id: "6", title: "Realizar pruebas unitarias", completed: true },
]

/**
 * 
 * @param {"completed" | "pending"} status 
 * @returns 
 */
async function getTasks(status) {
  if (status) {
    const completed = status === "completed"
    return defaultTasks.filter(task => task.completed === completed)
  }

  return defaultTasks
}


export const TasksService = {
  getTasks
}