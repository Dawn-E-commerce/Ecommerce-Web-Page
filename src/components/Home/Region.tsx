import { REGION } from "../../utils/constants.ts";

const Region = () => {
  return (
    <section className="region bg-gray-100">
      <div className="container max-w-6xl mx-auto">
        <h1 className="region__title font-semibold text-2xl">
          Suppliers by region
        </h1>
        <div className="row pb-12 pt-6 grid grid-cols-5 gap-y-5 gap-x-2">
          {REGION.map((item, index) => (
            <>
              <div key={index} className="col">
                <div className="region__items">
                  <div className="region__card flex flex-row items-center gap-3">
                    <div className="region-card__img min-w-max">
                      <img src={item.icon} alt="" className="" />
                    </div>
                    <div className="region-card__title flex flex-col">
                      <h1>{item.name}</h1>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}


        </div>
      </div>
    </section>


  );
};

export default Region;
