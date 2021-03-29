import React, {useState} from "react";
// import login from "../img/login.png";

const LoginPage = () => {

    const [user, setUser] = useState({});
  
    //  Check input values
    const handleChange = (e) => {
      const target = e.target;
      const value = target.value;
     
      setUser({
        ...user,
        [target.name]: value
     });
    };
  
    // Submit a new product
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(user);
    };
  
  return (
    <>
     <div className="login-page-background">
      <section className="login-page p-5 my-5 mx-auto card w-75 shadow">
        <header>
          <h1 className="brand">Enjoy our services today!</h1>
          <p className="lead">Please login</p>
        </header>
        <main>
          <form className="form pr-4" onSubmit={handleSubmit} method="POST">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />{" "}
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              minLength="8"
              placeholder="Password"
              onChange={handleChange}
            />{" "}
            <button type="submit" className="w-100 my-4 btn login-btn" value="Login">Login</button>
          </form>
        </main>
      </section>
      </div>
    </>
  );
};

export default LoginPage;
