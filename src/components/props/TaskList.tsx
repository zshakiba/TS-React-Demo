type Props = {
  tasksList: {
    id: number;
    title: string;
  }[];
};

function TaskList({ tasksList }: Props) {
  return (
    <div>
      <h2>TasksList</h2>
      <ul>
        {tasksList.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default TaskList;
