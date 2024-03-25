import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <form className="login-form">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}


export default LoginPage;
