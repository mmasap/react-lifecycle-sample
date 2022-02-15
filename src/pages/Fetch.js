import { useState, useEffect } from 'react';

const Fetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <table style={{ margin: 'auto' }}>
        <thead>
          <tr>
            <td>name</td>
            <td>mail</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Fetch;
