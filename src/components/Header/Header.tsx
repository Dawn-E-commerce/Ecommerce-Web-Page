
import TopHeader from './TopHeader.tsx';
import { CiSearch } from 'react-icons/ci';
import { navLinks } from '../../utils/constants.ts';
import LogoHeader from '../../assets/images/LogoHeader.svg';
import st from './Header.module.scss';
const Header = () => (
  <header>
    <TopHeader />
    <div
      className={`header-bottom flex flex-row justify-between mx-[135px] ${st.header_bottom} `}
    >
      <div className='header-nav'>
        <a href='#'>
          <img src={LogoHeader} alt='Logo Header' />
        </a>
      </div>
      <div className='header-nav'>
        <ul className='flex '>
          {navLinks.map((index) => {
            return (
              <a href='#' key={index.id} className={`${st.header_bot_list}`}>
                <li className={`mx-[24px] font-normal `}>{index.title}</li>
              </a>
            );
          })}
        </ul>
      </div>
      <div
        className={`header-nav flex items-center gap-[34px] ${st.header_form}`}
      >
        <input
          type='text'
          name=''
          id=''
          placeholder='What are you looking for?'
          className={`${st.header_form_input}`}
        />
        <CiSearch className={`${st.header_form_icon} size-6`} />
      </div>
    </div>
  </header>
);

export default Header;
