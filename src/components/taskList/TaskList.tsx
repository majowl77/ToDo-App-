import React, { useState } from "react";

type TaskList = {
  taskItem: string;
};
export default function TaskList() {
  const [taskList, setTaskList] = useState<TaskList[]>();
  const [taskItem, setTaskItem] = useState("");

  function addNewTask(newTask: string) {
    setTaskList([{ taskItem: newTask }]);
    setTaskItem("");
  }

  return (
    <section>
      <h6> Your To do lsit</h6>
      <form>
        <label> Enter</label>
        <input
          type="text"
          name="taskItem"
          placeholder="write your task"
          value={taskItem}
          onChange={(e) => setTaskItem(e.target.value)}
        />
        <button onClick={() => addNewTask} > + </button>
      </form>

      <div>
        here the list of your task :
        {taskList?.length &&
          taskList.map((task) => <h6 key={task.taskItem}> {task.taskItem}</h6>)}
      </div>
    </section>
  );
}
