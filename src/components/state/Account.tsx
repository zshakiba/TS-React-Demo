import { useState } from "react";

type UserType = {
  name: string;
  email: string;
};

const Account: React.FC = ({}) => {
  const [user, setUser] = useState<null | UserType>(null);

  const handleLogin = () => {
    setUser({
      name: "Saheb",
      email: "user@gmail.com",
    });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        Name: {user?.name} - Email: {user?.email}
      </div>
    </div>
  );
};

export default Account;
