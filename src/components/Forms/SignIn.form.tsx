const SignInForm = () => {
  return (
    <section className="section-form py-7">
      <div className="section-form-login">
        <div className="section-form-img">
          <img src="" alt="" />
        </div>
        <div className="section-form-input">
          <form>
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>
            <input type="text" />
            <input type="password" />
            <button>Log In</button>
            <a href="#">Forget Password?</a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInForm;
