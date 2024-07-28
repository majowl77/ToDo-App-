import React, { useState } from "react";

type TaskList = {
  taskItem: string;
};
export default function TaskList() {
  let [taskList, setTaskList] = useState<TaskList[]>([]);
  const [taskItem, setTaskItem] = useState("");

  function addNewTask(e: React.FormEvent<HTMLFormElement>) {
    setTaskList((prevTaskList) => [...prevTaskList, { taskItem: taskItem }]);
    setTaskItem("");
    e.preventDefault();
  }

  function deleteTask(taskItem: string) {
    taskList = taskList.filter((task) => task.taskItem != taskItem);
    if (taskList) {
      console.log("task was delete it");
    }
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.taskItem !== taskItem)
    );
  }

  return (
    <section>
      <h6> Your To do lsit</h6>
      <form onSubmit={addNewTask}>
        <label> Enter</label>
        <input
          type="text"
          name="taskItem"
          placeholder="write your task"
          value={taskItem}
          onChange={(e) => setTaskItem(e.target.value)}
        />
        <button type="submit"> + </button>
      </form>

      <div>
        here the list of your task :
        {taskList?.length &&
          taskList.map((task) => (
            <div key={task.taskItem}>
              <h6> {task.taskItem}</h6>
              <button onClick={() => deleteTask(task.taskItem)}>Delete</button>
            </div>
          ))}
      </div>
    </section>
  );
}
