import { DEAL_PRODUCTS } from "../../utils/constants";

const Sales = () => {
  return (
    <section className="sales bg-gray-100">
      <div className="container max-w-6xl mx-auto rounded-lg border-2 border-gray-300 bg-white">
        <div className="row flex flex-row">
          <div className="col">
            <div className="sales__times pt-5 pl-5 pr-16 pb-24">
              <h1 className="font-semibold text-xl">Deals and offers</h1>
              <p className="text-gray-400 mb-5">Hygiene equipments</p>
              <div>
                <div className="sale-times-timers flex flex-row gap-2 [&>*]:bg-slate-700 text-white [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:p-2 [&>*]:rounded-md [&>*>h1]:font-semibold [&>*>h1]:text-base [&>*>p]:text-xs [&>*]:min-w-10">
                  <div className="sale-times-timers-items">
                    <h1>04</h1>
                    <p>Days</p>
                  </div>
                  <div className="sale-times-timers-items">
                    <h1>13</h1>
                    <p>Hour</p>
                  </div>
                  <div className="sale-times-timers-items">
                    <h1>34</h1>
                    <p>Min</p>
                  </div>
                  <div className="sale-times-timers-items">
                    <h1>56</h1>
                    <p>Sec</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="sales__cards min-h-full flex flex-row [&>*]:border-l-2 [&>*]:pt-2 [&>*]:px-5 [&>*]:pb-4 [&>*]:text-center">
              {DEAL_PRODUCTS.map((index) => (
                <a key={index.id} href="#" className="sale-cards__items block">
                  <div className="sale-cards__img">
                    <img src={index.image} alt="" />
                  </div>
                  <div className="sale-cards__title mt-3">
                    <h1 className="font-semibold mt-3 mb-2">{index.title}</h1>
                    <p className="text-red-500 font-semibold bg-red-200 rounded-full inline-block py-1 px-3">
                      -{index.sale}%
                    </p>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Sales;
