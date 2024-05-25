import { DOWNLOADS, FOOTER_LINK, SOCIAL_MEDIA } from "../../utils/constants";
import { logo } from "../../utils/assets";

const Info = () => {
  return (
    <div className="bot-info">
      <div className="container max-w-6xl mx-auto mt-10 mb-14">
        <div className="row grid grid-cols-7 gap-16">
          <div className="col col-start-1 col-end-3">
            <div className="footer-info__cards inline-block">
              <img src={logo.Logo} alt="Logo" />
              <p className="my-4">
                Best information about the company gies here but now lorem
                ipsum is
              </p>
              <div className="footer-info-card__socials flex flex-row gap-2">
                {SOCIAL_MEDIA.map((index) => (
                  <div key={index.id} className="footer-info-card-socials__icons p-2 bg-slate-400 text-white inline-block rounded-full">
                    <a href={index.link} target="_blank">
                      {index.icon && <index.icon />}
                    </a>
                  </div>
                ))}

              </div>
            </div>
          </div>

          {FOOTER_LINK.map(({ id, title, links }) =>
          (
            <div key={id} className="col">
              <div className="footer-info__cards">
                <ul className="[&>*:first-child]:text-black [&>*:first-child]:font-medium [&>*:first-child]:pb-2 [&>*:not(:first-child)]:mb-1 text-gray-300">
                  <li>{title}</li>
                  {links.map(({ id, name, link }) => (

                    <a href={link} key={id}>
                      <li>{name}</li>
                    </a>
                  ))}
                </ul> </div>
            </div>
          )

          )}




          <div className="col">
            <div className="footer-info__cards">
              <ul className="[&>*:first-child]:text-black [&>*:first-child]:font-medium [&>*:first-child]:pb-2 [&>*:not(:first-child)]:mb-2 text-gray-300">
                <li>Get app</li>
                {DOWNLOADS.map(({ id, image }) => (
                  <li key={id}>
                    <img src={image} alt="" />
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >


  )
}

export default Info
