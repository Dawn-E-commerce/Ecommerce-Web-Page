import { SERVICES } from "../../utils/constants.ts";

const Services = () => {
  return (
    <section className="services bg-gray-100 pb-[30px]">
      <div className="container max-w-6xl mx-auto ">
        <h1 className="services__title font-semibold text-2xl">Our extra services</h1>
        <div className="row pt-[24px] flex flex-row gap-5" >
          {SERVICES.map((index) => (
            <div key={index.id} className="col ">
              <div className="services__items min-w-[250px] min-h-[200px] relative">
                <div className="services__img max-h-[120px] max-w-[280px] overflow-hidden  ">
                  <img src={index.img} alt="" className="brightness-50" />
                </div>
                <div className="p-4 bg-blue-100 rounded-full inline-block absolute border-2 border-white bottom-1/4 left-3/4">
                  {index.icon && <index.icon className="size-6" />}
                </div>
                <div className="services__title border-x border-b bg-white rounded-br-lg rounded-bl-lg">
                  <h1 className="pt-4 ml-5 pb-5 max-w-[175px] font-semibold">{index.title}</h1>
                </div>
              </div>
            </div>
          ))}


        </div >
      </div>
    </section>

  );
};

export default Services;
