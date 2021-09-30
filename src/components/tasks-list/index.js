
import React from 'react'
import { Checkbox } from '@mui/material'

export function TasksList(props = { tasks: [], todo: false }) {
  return (
    <ul className="tasks-list">
      {props.tasks?.map(task => (
        <li
          key={task.task_id}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}>
          {props.todo && <Checkbox />}
          {!props.todo && <span style={{ height: "42px" }} />}
          {task.title}
        </li>
      ))}
    </ul>
  )
}
