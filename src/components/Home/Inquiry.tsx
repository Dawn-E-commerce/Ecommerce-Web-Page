import { Banner } from "../../utils/assets";

const Inquiry = () => {
  return (
    <section className="inquiry bg-gray-100">
      <div className="container max-w-6xl mx-auto bg-cover" style={{ backgroundImage: `url(${Banner.inquiry})` }}>
        <div className="row bg-gradient-to-r from-blue-500 to-cyan-500/[0.6] bg-opacity-50 py-9 px-10 flex justify-between">
          <div className="col max-w-96">
            <div className="inquiry__content">
              <h1 className="inquiry-content___h1 text-white text-3xl font-semibold">
                An easy way to send requests to all suppliers
              </h1>
              <p className="inquiry-content___p text-white mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div className="col max-w-lg">
            <div className="inquiry__form bg-white rounded-md py-6 px-5">
              <h1 className="font-semibold text-2xl pb-4">Send quote to suppliers</h1>
              <form action="" className="grid grid-cols-3 gap-5">
                <input type="text" placeholder="What item you need?" className="col-start-1 col-end-4 border-2 p-2 rounded-md focus:outline-none focus:ring-0 placeholder-gray-950 " />
                <textarea name="" id="" cols={5} rows={3} placeholder="Type more details" className=" col-start-1 col-end-4 border-2 p-2 rounded-md focus:outline-none focus:ring-0 " defaultValue={""} />
                <input type="text" placeholder="Quantity" className="border-2 p-2 rounded-md placeholder-gray-950 focus:outline-none focus:ring-0 " />
                <select name="" id="" className="border-2 p-2 rounded-md ">
                  <option >Pcs</option>
                </select>
                <button className="col-start-1 bg-blue-600 py-2 px-4 text-white rounded-md font-semibold ">Send inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Inquiry;
