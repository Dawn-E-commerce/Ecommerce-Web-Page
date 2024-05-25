import { ITEM_PRODUCT_2 } from "../../utils/constants";
const Items = () => {
  return (
    <>

      {ITEM_PRODUCT_2.map(({ id, banner, product }) => (
        <section className="items bg-gray-100 py-5">
          <div className="container max-w-6xl mx-auto rounded-lg border-2 border-gray-300 bg-white">
            <div key={id} className="row flex flex-row">

              <div className="col max-w-[280px]">
                <div className="items__banner min-h-full  pt-5 pb-32 pl-4 pr-32 bg-[url('../../assets/images/banner/bannerItem1.png')] bg-cover" style={{ backgroundImage: `url( ${banner.banner})` }}>
                  <h1 className="font-semibold text-xl max-w-[155px]">
                    {banner.title}
                  </h1>
                  <button className="bg-white mt-4 px-4 py-2 font-semibold rounded-md">
                    Source now
                  </button>
                </div>
              </div>
              <div className="col grow">
                <div className="items__card grid grid-cols-4">
                  {product.map((index) => (
                    <div key={index.id} className="items-card__boxes flex justify-between border-2 border-gray-300 pt-5 pl-4">
                      <div className="items-card-boxes-title pb-12">
                        <h1 className="max-w-[140px] text-no">{index.name}</h1>
                        <p className="pt-2 text-gray-300">From <br />USD {index.price}</p>
                      </div>
                      <div className="items-card-boxes__img self-end size-24">
                        <img src={index.image} alt="" className="size-full" />
                      </div>
                    </div>

                  ))}

                </div>
              </div >
            </div>
          </div>
        </section>
      ))}




    </>
  );
};

export default Items;
