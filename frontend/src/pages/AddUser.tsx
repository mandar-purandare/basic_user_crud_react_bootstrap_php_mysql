import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

type response = { data: { success: boolean; message: string; error: string } };

function AddUser() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    created_by: "Mandar",
  });

  const goTo = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (formState.name && formState.email && formState.password) {
      const response: response = await axios.post(
        "http://localhost:80/basic_user_crud_react_bootstrap_php_mysql/backend/src/users.php",
        formState
      );
      if (response?.data?.success) {
        alert(response?.data.message);
        setFormState({
          name: "",
          email: "",
          password: "",
          dob: "",
          created_by: "Mandar",
        });
      } else {
        alert(response?.data.error);
      }
    } else {
      alert("All fields are mandatory");
    }
  };
  return (
    <>
    <div style={{display:'flex', justifyContent:'end', marginBottom:'100px'}}>
    <button onClick={() => goTo('/userList')} className="btn btn-primary">
        Users List
      </button>
    </div>
    <h1 style={{marginBottom:'100px'}}>Add New User</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Name
        </label>
        <input
          name="name"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={formState.name}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          Enter your full name
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={formState.email}
          onChange={handleChange}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          D.O.B
        </label>
        <input
          name="dob"
          type="date"
          className="form-control"
          id="exampleInputPassword1"
          value={formState.dob}
          onChange={handleChange}
        />
      </div>
      {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
}

export default AddUser;
