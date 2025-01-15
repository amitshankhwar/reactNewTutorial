// import React, { useState } from "react";

// const Form = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleChange(e) {
//     if (e.target.name === "username") {
//       setUsername(e.target.value);
//     } else if (e.target.name === "email") {
//       setEmail(e.target.value);
//     } else if (e.target.name === "password") {
//       setPassword(e.target.value);
//     }
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     console.log({
//       username,
//       email,
//       password,
//     });
//   }

//   return (
//     <div className="formBox">
//       <form action="" className="form">
//         <input
//           name="username"
//           type="text"
//           placeholder="enter your name"
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />
//         <input
//           name="email"
//           type="email"
//           placeholder="enter your email"
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />
//         <input
//           name="password"
//           type="password"
//           placeholder="enter your password"
//           onChange={(e) => {
//             handleChange(e);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={(e) => {
//             handleSubmit(e);
//           }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

//Best way to handle forms in react
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div className="formBox">
      <form action="" className="form">
        <input
          name="username"
          type="text"
          placeholder="enter your name"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="enter your email"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="enter your password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
