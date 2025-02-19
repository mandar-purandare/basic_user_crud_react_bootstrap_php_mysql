import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
  dob: string;
  created_by: string;
  created_at?: string;
  updated_by?: string;
  updated_at?: string;
};

function UserList() {
  const [usersArray, setUsersArray] = useState<User[]>([]);

  const goTo = useNavigate()

  const fetchAllUsers = async () => {
    const response = await axios.get(
      "http://localhost:80/basic_user_crud_react_bootstrap_php_mysql/backend/src/users.php"
    );
    if (response.data.success) {
      setUsersArray([ ...response.data.data]);
    } else {
      alert("Error fetching users");
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const deleteUser = async (id:number) => {
     const response = await axios.delete(`http://localhost:80/basic_user_crud_react_bootstrap_php_mysql/backend/src/users.php?id=${id}`)
     if (response.data.success) {
        alert(response.data.message)
        fetchAllUsers()
      } else {
        alert("Error deleting user");
      }
  }

  return (
    <>
    <div style={{display:'flex', justifyContent:'end', marginBottom:'50px'}}>
    <button onClick={() => goTo('/')} className="btn btn-primary">
        Create New User
      </button>
    </div>
      <div>
        <h1>Users List</h1>
      </div>
      <table className="table table-striped">
        {usersArray && (
          <tbody>
            {usersArray.map((user, idx) => {
              return (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => goTo(`/editUser?id=${user.id}`)}>Edit</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(user.id!)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </>
  );
}

export default UserList;
