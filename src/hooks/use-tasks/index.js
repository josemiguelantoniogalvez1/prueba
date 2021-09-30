import { useEffect, useState } from "react";
import { TasksService } from "../../services"

export function useTasks() {
  const [state, setState] = useState({
    completedTasks: [],
    pendingTasks: []
  })

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const completedTasks = await TasksService.getTasks("completed")
    const pendingTasks = await TasksService.getTasks("pending")

    setState(prevState => ({
      ...prevState,
      completedTasks,
      pendingTasks
    }))
  }

  return {
    completedTasks: state.completedTasks,
    pendingTasks: state.pendingTasks,
    refetchTasks: loadTasks
  }
}