const SignupLogin = () => {
    return (
      <div>
        <h1>Signup / Login</h1>
  
        <section>
          <h2>Signup</h2>
          <form>
            <label htmlFor="signup-email">Email: </label>
            <input type="email" id="signup-email" required />
            <br />
            <label htmlFor="signup-password">Password: </label>
            <input type="password" id="signup-password" required />
            <br />
            <button type="submit">Signup</button>
          </form>
        </section>
  
        <section>
          <h2>Login</h2>
          <form>
            <label htmlFor="login-email">Email: </label>
            <input type="email" id="login-email" required />
            <br />
            <label htmlFor="login-password">Password: </label>
            <input type="password" id="login-password" required />
            <br />
            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    );
  };
  
  export default SignupLogin;
  