import { RECOMMENDED_PRODUCT } from "../../utils/constants";
const Recommended = () => {
  return (
    <section className="recommended bg-gray-100">
      <div className="container max-w-6xl mx-auto">
        <h1 className="recommended__title font-semibold text-2xl">
          Recommended items
        </h1>
        <div className="row pb-8 mt-6 grid grid-cols-5 gap-5">
          {RECOMMENDED_PRODUCT.map((index) => (
            <>
              <div className="col bg-white p-2 border-gray-200 border-2 rounded-lg">
                <div key={index.id} className="recommended__items">
                  <div className="recommended__img">
                    <a href="#">
                      <img src={index.image} alt="" className="min-w-full" />
                    </a>
                  </div>
                  <div className="recommended__title mt-3">
                    <h1 className="font-medium">${index.price}</h1>
                    <p className="text-gray-300 max-w-48">
                      {index.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )

          )}
        </div>
      </div>
    </section>


  );
};

export default Recommended;
