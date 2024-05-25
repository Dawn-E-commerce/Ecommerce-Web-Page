import { useForm } from "react-hook-form"
import { User } from "../../interfaces/User"
import instance from "../../services/apis"
import Joi from "joi"
import { useNavigate } from "react-router-dom"
import { joiResolver } from "@hookform/resolvers/joi"
import { Banner } from "../../utils/assets"


const userSchema = Joi.object({
  email: Joi.string().email({ tlds: false }).required().min(5),
  password: Joi.string().min(6)
})
const SignInForm = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<User>({ resolver: joiResolver(userSchema) })
  const onSumbit = (user: User) => {
    (async () => {
      const { data } = await instance.post("/auth/login", user)
      console.log(data);

      const check = confirm("Go to home ?")
      if (check) {
        navigate("/")
      }


    })()
  }
  return (
    <section className="signin mt-14 mb-56 w-full">
      <div className="signin-row flex">
        <div className="signin-col basis-3/5">
          <img src={Banner.bannerAuthen} alt="banner" className="min-w-full min-h-min" />
        </div>
        <div className="signin-col basis-2/6">
          <div className="signin-col__form my-20 ml-32 mr-4">
            <h1 className="font-medium text-4xl">Log in to Exclusive</h1>
            <p className="mt-6 mb-12">Enter your details below</p>
            <form className="flex flex-col" onSubmit={handleSubmit(onSumbit)} >
              <div className="mb-10">
                <input className=" focus:outline-none focus:ring-0 border-b-2 py-2 min-w-full mb-5" type="text" placeholder="Email or Phone Number"  {...register("email", { required: true, minLength: 1 })} />
                {errors.email && <div className="text-red-600 font-bold inline-block'">{errors.email.message}</div>}

              </div>
              <div className="mb-10">
                <input className=" focus:outline-none focus:ring-0 border-b-2 py-2 min-w-full mb-5" type="text" placeholder="Password" {...register("password", { required: true, minLength: 1 })} />
                {errors.password && <div className="text-red-600 font-bold inline-block">{errors.password.message}</div>}

              </div>
              <div className="flex justify-between items-center">
                <button className="py-4 px-12 text-white bg-blue-500 hover:bg-blue-700 rounded font-sans font-medium ease-in-out transition">
                  Log in
                </button>
                <a className="text-blue-500 hover:text-blue-700" href="">Forget Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section >
  );
};

export default SignInForm;
