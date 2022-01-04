import Form from "./components/Form";

function App() {
  return (
    <div className="container">
      <h1>Sign Up</h1>
      <Form />
      <button type="submit">Create account</button>
      <p>
        Already have an account?{" "}
        <a href="#" className="link">
          Sign in
        </a>
      </p>
    </div>
  );
}

export default App;
