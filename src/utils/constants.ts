// import { facebook, linkedin, twitter, instagram } from '../assets/images';
import facebook from '../assets/images/facebook.svg';
import twitter from '../assets/images/twitter.svg';
import instagram from '../assets/images/instagram.svg';
import linkedin from '../assets/images/linkedin.svg';
import qrCode from '../assets/images/Qr Code.png';
import googlePlay from '../assets/images/GooglePlay.png';
import appStore from '../assets/images/AppStore.png';
export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'contact', title: 'Contact' },
  { id: 'about', title: 'About' },
  { id: 'signUp', title: 'Sign Up' },
];
export const socialMedia = Object.freeze([
  { id: 'social-media-1', icon: facebook, link: 'https://www.facebook.com' },
  { id: 'social-media-2', icon: twitter, link: 'https://twitter.com' },
  { id: 'social-media-3', icon: instagram, link: 'https://www.instagram.com/' },
  { id: 'social-media-4', icon: linkedin, link: 'https://www.linkedin.com' },
]);
export const downloads = Object.freeze([
  {
    image: qrCode,
  },
  {
    image: googlePlay,
  },
  {
    image: appStore,
  },
]);
export const footerLink = Object.freeze([
  {
    title: 'Support',
    links: [
      {
        name: '111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.',
        link: '',
      },
      {
        name: 'exclusive@gmail.com',
        link: '',
      },
      {
        name: '+88015-88888-9999',
        link: '',
      },
    ],
  },
  {
    title: 'Quick Link',
    links: [
      {
        name: 'Privacy Policy',
        link: '',
      },
      {
        name: 'Terms Of Use',
        link: '',
      },
      {
        name: 'FAQ',
        link: '',
      },
      {
        name: 'Contact',
        link: '',
      },
    ],
  },
  {
    title: 'Account',
    links: [
      {
        name: 'My Account',
        link: '',
      },
      {
        name: 'Login / Register',
        link: '',
      },
      {
        name: 'Cart',
        link: '',
      },
      {
        name: 'Wishlist',
        link: '',
      },
      {
        name: 'Shop',
        link: '',
      },
    ],
  },
]);
