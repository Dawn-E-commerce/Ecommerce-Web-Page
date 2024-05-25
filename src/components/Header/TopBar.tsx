import { Link } from "react-router-dom"
import { logo } from "../../utils/assets"
import { HEADER_UTILS } from "../../utils/constants"
const TopBar = () => {
  return (
    <section className="top-bar">
      <div className="container max-w-6xl mx-auto">
        <div className="row flex flex-row justify-between my-5 items-center">
          <div className="col">
            <img className="top-bar__image" src={logo.Logo} />
          </div>
          <div className="col basis-3/6">
            <div className="top-bar__search border-2 border-blue-500 rounded-md pl-2 flex justify-between">
              <input type="text" placeholder="Search" className="grow focus:outline-none focus:ring-0" />
              <select className="py-2 pl-2 mr-2 text-gray-500 border-blue-500 border-l-2 focus:outline-none focus:ring-0 grow-1">
                <option selected>All category</option>
              </select>
              <button className="py-2 px-6 bg-blue-500 text-white">Search</button>
            </div>
          </div>
          <div className="col">
            <div className="top-bar__links flex flex-row gap-4">
              {HEADER_UTILS.map((index) => (
                <div key={index.id} className="top-bar-links__items">
                  <Link to={`${index.path}`} className="flex flex-col items-center text-gray-500">
                    {index.icon && <index.icon className="size-[25px]" />}
                    {index.title}</Link>
                </div>
              ))}


            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default TopBar