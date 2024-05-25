import { CATEGORY_NAV } from "../../utils/constants";
import { Banner } from "../../utils/assets";
const Hero = () => {
  return (
    <section className="hero bg-gray-100 pb-5 pt-8">
      <div className="container max-w-6xl mx-auto bg-white p-5 rounded-lg border-2 border-gray-300">
        <div className="row flex flex-row justify-between">
          <div className="col basis-1/5">
            <ul className="hero__menu flex flex-col justify-between min-h-full [&>li>a]:py-2 [&>li>a]:block [&>li>a]:px-3 min-w-28 hover:[&>li>a]:bg-slate-200 hover:[&>li>a]:rounded-md">
              {CATEGORY_NAV.map((index) => (
                <li key={index.id}><a href="#">{index.name}</a></li>

              ))}


            </ul>
          </div>
          <div className="col grow ml-3 mr-5">
            <div className="hero__banner  bg-cover min-h-full pt-14 pl-11" style={{ backgroundImage: `url(${Banner.banner})` }}>
              <h3 className="text-3xl">Latest trending</h3>
              <h1 className="text-4xl font-bold">Electronic items</h1>
              <button className="mt-4 py-3 px-4 bg-gray-100 rounded-md font-semibold">
                Learn more
              </button>
            </div>
          </div>
          <div className="col">
            <div className="hero__started [&>*]:rounded-lg [&>*:not(:first-child)]:mt-3 [&>*:not(:first-child)]:text-white flex flex-col min-h-full justify-between [&>*]:grow">
              <div className="hero-started__form px-3 pt-2 pb-3 bg-blue-200 [&>*:not(:first-child)]:rounded-lg [&>*:not(:first-child)]:py-2 flex flex-col [&>* ]:font-semibold">
                <div className="hero-started-form__ava flex flex-row items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z" />
                  </svg>
                  <p>Hi, user <br />let’s get stated</p>
                </div>
                <button className="bg-blue-600 text-white mt-3 mb-2">
                  Join now
                </button>
                <button className="bg-white text-blue-600">Log in</button>
              </div>
              <div className="hero-started__banner bg-orange-400 pt-4 pl-4 pr-11 pb-5">
                Get US $10 off<br />
                with a new <br />supplier
              </div>
              <div className="hero-started__banner bg-cyan-400 pt-4 pl-4 pr-10 pb-5">
                Send quotes with <br />
                supplier <br />
                preferences
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Hero;
