type TaskHeaderProps = {
  name: string;
  numOfTasks: number;
};

export default function TaskHeader(props: TaskHeaderProps) {
  return (
    <h2>
      `Hi {props.name}, You have {props.numOfTasks} uncompleted tasks.`
    </h2>
  );
}
