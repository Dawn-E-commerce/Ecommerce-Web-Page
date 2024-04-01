import { RiArrowDropDownLine } from 'react-icons/ri';
import st from './Header.module.scss';
const TopHeader = () => (
  <>
    <div className={`${st.header_top} `}>
      <div className={`${st.header_top_title} flex items-center`}>
        <div className='ml-auto'>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a href='#' className={`${st.header_top_link}`}>
            ShopNow
          </a>
        </div>
        <div className={`${st.header_top_select} flex items-center`}>
          English
          <RiArrowDropDownLine className='size-8' />
        </div>
      </div>
    </div>
  </>
);

export default TopHeader;
