import { useUser } from "./UserContext";

const UserAuth: React.FC = ({}) => {
  const { setUser } = useUser();
  const handleLogin = () => {
    setUser({
      email: "user@gmail.com",
      username: "saheb",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h2> User Name is : - User Email is: </h2>
    </div>
  );
};
export default UserAuth;
