import { useDarkMode } from "./DarkModeContext";

type Props = {};
const ToggleTheme = (props: Props) => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  return (
    <div>
      <p>the theme is {isDarkMode ? "Dark" : "Light"}</p>
      <button onClick={toggleDarkMode}>toggle theme</button>
    </div>
  );
};
export default ToggleTheme;
