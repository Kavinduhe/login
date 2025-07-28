// src/components/UserToggle.js
import useTheme from '../hooks/useUser';

const UserToggle = () => {
  const { user, toggleUser } = useUser();

  return (
    <div style={{  }}>
      <p>Current User: {user}</p>
      <button onClick={toggleUser}>Toggle User</button>
    </div>
  );
};

export default UserToggle; 