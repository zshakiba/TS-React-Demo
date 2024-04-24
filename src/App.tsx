import { Private } from "./components/ComponentProps/Private";
import { Profile } from "./components/ComponentProps/Profile";
import { Parent } from "./components/challenge-6/List";
import List from "./components/generics/List";
import TaskHeader from "./components/props/TaskHeader";
import TaskList from "./components/props/TaskList";
import User from "./components/props/User";
import DarkModeProvier from "./components/useContext/DarkModeContext";
import ToggleTheme from "./components/useContext/ToggleTheme";
import UserContextProvider from "./components/useContext/UserContext";

const user = {
  firstName: "Saheb",
  lastName: "Mohamadi",
};

const tasks = [
  {
    id: 1,
    title: "Task #1",
  },
  {
    id: 2,
    title: "Task #2",
  },
  {
    id: 3,
    title: "Task #2",
  },
];

function App() {
  return (
    <UserContextProvider>
      <DarkModeProvier>
        <ToggleTheme />
        <TaskHeader name="Saheb" numOfTasks={3} />
        <User user={user} />
        <TaskList tasksList={tasks} />
        {/* <List<string>
          items={["Saheb", "Ali"]}
          onClick={(item) => console.log(item)}
        /> */}
        {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
        <List<{ id: number; name: string }>
          items={[
            { id: 1, name: "Saheb" },
            { id: 2, name: "Ali" },
          ]}
          onClick={(item) => console.log(item)}
        />
        <Parent />
        <Private isLoggedIn={true} component={Profile} />
      </DarkModeProvier>
    </UserContextProvider>
  );
}

export default App;

// props => 1. type of props 2. name of props
// state
// event
// custom hooks, ...
