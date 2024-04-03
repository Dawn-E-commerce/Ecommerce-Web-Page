import copyright from '../../assets/images/copyright.svg';
import st from './Footer.module.scss';
const BotFooter = () => (
  <div className={`${st.bot_footer}`}>
    <img src={copyright} alt='copyright' /> Copyright Rimel 2022. All right
    reserved
  </div>
);

export default BotFooter;
