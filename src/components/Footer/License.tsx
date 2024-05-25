import { Country } from "../../utils/assets"
const License = () => {
  return (
    <div className="bot-license bg-gray-300">
      <div className="container max-w-6xl mx-auto py-6">
        <div className="row flex flex-row justify-between">
          <div className="col">
            <div className="footer-copyright__title">© 2023 Ecommerce.</div>
          </div>
          <div className="col">
            <div className="footer-copyright__country flex flex-row gap-2">
              <img src={ Country.USA} className="size-[25px]" />English
              <button className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



  )
}

export default License