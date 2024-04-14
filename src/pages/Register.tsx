const Register = () => {
  return (
    <section className="section-form py-7">
      <div className="section-form-register">
        <div className="section-form-img">
          <img src="" alt="" />
        </div>
        <div className="section-form-input">
          <form>
            <h1>Create an account</h1>
            <p>Enter your details below</p>
            <input type="text" />
            <input type="text" />
            <input type="password" />
            <button>Create Account</button>
            <a href="#">Sign up with Google</a>
            <p>
              Already have account? <a href="#">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
