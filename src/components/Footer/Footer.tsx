import BotFooter from './BotFooter.tsx';
import st from './Footer.module.scss';
import LogoFooter from '../../assets/images/LogoFooter.svg';
import iconSend from '../../assets/images/send.svg';
import { downloads, footerLink, socialMedia } from '../../utils/constants.ts';
const Footer = () => (
  <>
    <footer className={`${st.footer}`}>
      <div className={`${st.top_footer}`}>
        <div className={`${st.top_footer_col} grid grid-cols-5 gap-[87px]`}>
          <div className={`${st.top_footer_row} w-fit`}>
            <div className={`${st.top_footer_title}`}>
              <img src={LogoFooter} />
            </div>
            <div className={`${st.top_footer_content}`}>
              <h1 className={`${st.top_footer_title}`}>Subscribe</h1>
              <p className={`${st.top_footer_content} mb-[16px]`}>
                Get 10% off your first order
              </p>
              <div className={`${st.top_footer_form} flex justify-between `}>
                <input placeholder='Enter your email' />
                <img src={iconSend} alt='' />
              </div>
            </div>
          </div>

          {footerLink.map(({ links, title }, index) => {
            return (
              <div className={`${st.top_footer_row}`}>
                <h1 className={`${st.top_footer_title}`} key={index}>
                  {title}
                </h1>
                <div
                  className={`${st.top_footer_content} flex flex-col gap-[16px]`}
                >
                  {links.map(({ link, name }) => {
                    return <a href={link}>{name}</a>;
                  })}
                </div>
              </div>
            );
          })}

          <div className={`${st.top_footer_row}`}>
            <h1 className={`${st.top_footer_title}`}>Download App</h1>
            <div className={`${st.top_footer_content} `}>
              <p className='text-[12px] text-gray-500 mb-[8px]'>
                Save $3 with App New User Only
              </p>

              <div className={`grid grid-cols-2 ${st.top_footer_download}`}>
                {downloads.map((item, index) => {
                  return (
                    <a href='' key={index}>
                      <img src={item.image} />
                    </a>
                  );
                })}
              </div>
              <div className='flex flex-row justify-between mt-[24px]'>
                {socialMedia.map((item) => {
                  return (
                    <a href={item.link}>
                      <img src={item.icon} alt={item.id} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <BotFooter />
    </footer>
  </>
);

export default Footer;
