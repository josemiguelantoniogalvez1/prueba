import { useEffect, useState } from "react";
import { TasksService } from "../../services"

export function useTasks() {
  const [state, setState] = useState({
    completedTasks: [],
    pendingTasks: [],
    loading: false
  })

  const setLoading = (loading) => {
    setState(prevState => ({
      ...prevState,
      loading
    }))
  }

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    setLoading(true)
    const completedTasks = await TasksService.getTasks("completed")
    const pendingTasks = await TasksService.getTasks("pending")

    setState(prevState => ({
      ...prevState,
      completedTasks,
      pendingTasks
    }))
    setLoading(false)
  }

  return {
    completedTasks: state.completedTasks,
    pendingTasks: state.pendingTasks,
    loading: state.loading,
    refetchTasks: loadTasks
  }
}