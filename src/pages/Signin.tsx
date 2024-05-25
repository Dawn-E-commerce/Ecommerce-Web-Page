
const Signin = () => {
  return (
    <>

      <section className="signin mt-14 mb-56 w-full">
        <div className="signin-row flex">
          <div className="signin-col basis-3/5">
            <img src="../../src/assets/images/banner/bannerAuthen.png" alt="banner" className="min-w-full min-h-min" />
          </div>
          <div className="signin-col basis-2/6">
            <div className="signin-col__form my-20 ml-32 mr-4">
              <h1 className="font-medium text-4xl">Log in to Exclusive</h1>
              <p className="mt-6 mb-12">Enter your details below</p>
              <form className="flex flex-col"  >
                <div className="mb-10">
                  <input className=" focus:outline-none focus:ring-0 border-b-2 py-2 min-w-full mb-5" type="text" placeholder="Email or Phone Number" />


                </div>
                <div className="mb-10">
                  <input className=" focus:outline-none focus:ring-0 border-b-2 py-2 min-w-full mb-5" type="text" placeholder="Password" />


                </div>
                <div className="flex justify-between items-center">
                  <button className="py-4 px-12 text-white bg-blue-500 hover:bg-blue-700 rounded font-sans font-medium ease-in-out transition">
                    Log in
                  </button>
                  <a className="text-blue-500 hover:text-blue-700" href="http://localhost:3002/authentication/signin/index.html">Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section >
    </>);
};

export default Signin;
