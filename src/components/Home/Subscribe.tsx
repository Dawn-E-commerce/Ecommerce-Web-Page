// import { MdOutlineEmail } from "react-icons/md";

const Subscribe = () => (
  <section className="subscribe bg-gray-200">
    <div className="container max-w-6xl mx-auto py-10">
      <div className="row">
        <div className="subscribe__item text-center">
          <h1 className="font-semibold text-xl">Subscribe on our newsletter</h1>
          <p>
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
          <form action="" className="subscribe__form mt-5 flex gap-2 justify-center">
            <div className="inline-flex rounded-lg bg-white items-center gap-1 px-2 border-gray-300 border">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                <path fill="#8B96A5" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z" />
              </svg>
              <input type="text" placeholder="Email" className="focus:outline-none focus:ring-0 " />
            </div>
            <button className="py-2 px-4 bg-blue-600 text-white rounded-lg">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </section>


);

export default Subscribe;
