//! Icons
import { BiShieldQuarter } from 'react-icons/bi';
import {
  FaFacebookF,
  FaHeart,
  FaLinkedinIn,
  FaSearch,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { HiOutlineArchive } from 'react-icons/hi';
import { ImInstagram } from 'react-icons/im';
import { IoMdCart } from 'react-icons/io';
import { MdOutlineMessage, MdOutlineSend } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';
//! Market
import { Market } from './assets';
//! Country
import { Country } from './assets';
//! Banner
import { Banner } from './assets';
//! Product
import { Product } from './assets';
const HEADER_NAV = Object.freeze([
  {
    id: 1,
    name: 'All category',
    icon: GiHamburgerMenu,
  },
  { id: 2, name: 'Hot offers' },
  { id: 3, name: 'Gift boxes' },
  { id: 4, name: 'Projects' },
  { id: 5, name: 'Menu item' },
  { id: 6, name: 'Help', icon: RiArrowDropDownLine },
]);

const DEAL_PRODUCTS = Object.freeze([
  { id: 1, image: Product.SmartWatch, title: 'Smart watches', sale: '25' },
  { id: 2, image: Product.SmartWatch, title: 'Laptops', sale: '15' },
  { id: 3, image: Product.SmartWatch, title: 'GoPro cameras', sale: '40' },
  { id: 4, image: Product.SmartWatch, title: 'Headphones', sale: '25' },
  { id: 5, image: Product.SmartWatch, title: 'Canon camreras', sale: '25' },
]);
const HEADER_UTILS = Object.freeze([
  { icon: FaUserAlt, title: 'Profile' },
  { icon: MdOutlineMessage, title: 'Message' },
  { icon: FaHeart, title: 'Orders' },
  { icon: IoMdCart, title: 'My Cart' },
]);
const SOCIAL_MEDIA = Object.freeze([
  { id: 'social-media-1', icon: FaFacebookF, link: 'https://www.facebook.com' },
  { id: 'social-media-2', icon: FaTwitter, link: 'https://twitter.com' },
  {
    id: 'social-media-4',
    icon: FaLinkedinIn,
    link: 'https://www.linkedin.com',
  },
  {
    id: 'social-media-3',
    icon: ImInstagram,
    link: 'https://www.instagram.com/',
  },
  { id: 'social-media-5', icon: FaYoutube, link: 'https://www.youtube.com' },
]);

const ITEM_PRODUCT = Object.freeze({
  banner: { banner: Banner.bannerItem1, title: 'Home and outdoor' },
  product: [
    { id: 1, name: 'Soft chairs', price: 19, image: Product.Blender },
    { id: 2, name: 'Soft chairs', price: 19, image: Product.Blender },
    { id: 3, name: 'Kitchen dishes', price: 19, image: Product.Blender },
    { id: 4, name: 'Smart watches', price: 19, image: Product.Blender },
    { id: 5, name: 'Kitchen mixer', price: 19, image: Product.Blender },
    { id: 6, name: 'Blenders', price: 19, image: Product.Blender },
    { id: 7, name: 'Home appliance', price: 19, image: Product.Blender },
    { id: 8, name: 'Coffee maker', price: 19, image: Product.Blender },
  ],
});
const ITEM_PRODUCT_2 = Object.freeze([
  {
    id: 1,
    banner: { banner: Banner.bannerItem1, title: 'Home and outdoor' },
    product: [
      { id: 1, name: 'Soft chairs', price: 19, image: Product.Blender },
      { id: 2, name: 'Soft chairs', price: 19, image: Product.Kettle },
      { id: 3, name: 'Kitchen dishes', price: 19, image: Product.ShortJean },
      { id: 4, name: 'Smart watches', price: 19, image: Product.SmartWatch },
      { id: 5, name: 'Kitchen mixer', price: 19, image: Product.Wallet },
      { id: 6, name: 'Blenders', price: 19, image: Product.Headphone },
      { id: 7, name: 'Home appliance', price: 19, image: Product.Shirt },
      { id: 8, name: 'Coffee maker', price: 19, image: Product.Bag },
    ],
  },
  {
    id: 2,
    banner: {
      banner: Banner.bannerItem2,
      title: 'Consumer electronics and gadgets',
    },
    product: [
      { id: 1, name: 'Smart watches', price: 19, image: Product.Vest },
      { id: 2, name: 'Cameras', price: 19, image: Product.Kettle },
      { id: 3, name: 'Headphones', price: 19, image: Product.Shirt },
      { id: 4, name: 'Smart watches', price: 19, image: Product.SmartWatch },
      { id: 5, name: 'Gaming set', price: 19, image: Product.Wallet },
      { id: 6, name: 'Laptops & PC', price: 19, image: Product.ShortJean },
      { id: 7, name: 'Smartphones', price: 19, image: Product.Headphone },
      { id: 8, name: 'Electric kattle', price: 19, image: Product.Bag },
    ],
  },
]);
const CATEGORY_NAV = Object.freeze([
  {
    id: 1,
    name: 'Automobiles',
  },
  {
    id: 2,
    name: 'Clothes and wear',
  },
  {
    id: 3,
    name: 'Home interiors',
  },
  {
    id: 4,
    name: 'Computer and tech',
  },
  {
    id: 5,
    name: 'Tools, equipments',
  },
  {
    id: 6,
    name: 'Sports and outdoor',
  },
  {
    id: 7,
    name: 'Animal and pets',
  },
  {
    id: 8,
    name: 'Machinery tools',
  },
  {
    id: 9,
    name: 'More category',
  },
]);

const RECOMMENDED_PRODUCT = Object.freeze([
  {
    id: 1,
    image: Product.Jacket,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 2,
    image: Product.Shirt,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 3,
    image: Product.Bag,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 4,
    image: Product.SmartWatch,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 5,
    image: Product.Vest,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 6,
    image: Product.Wallet,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 7,
    image: Product.Kettle,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 8,
    image: Product.Blender,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 9,
    image: Product.ShortJean,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
  {
    id: 10,
    image: Product.Headphone,
    price: 10.3,
    description: 'T-shirts with multiple colors, for men',
  },
]);

const SERVICES = Object.freeze([
  {
    id: 1,
    title: 'Source from Industry Hubs',
    icon: FaSearch,
    img: Banner.service1,
  },
  {
    id: 2,
    title: 'Customize Your Products',
    icon: HiOutlineArchive,
    img: Banner.service2,
  },
  {
    id: 3,
    title: 'Fast, reliable shipping by ocean or air',
    icon: MdOutlineSend,
    img: Banner.service3,
  },
  {
    id: 4,
    title: 'Product monitoring and inspection',
    icon: BiShieldQuarter,
    img: Banner.service4,
  },
]);

const REGION = Object.freeze([
  { name: 'Arabic Emirates', subtitle: 'shopname.ae', icon: Country.UAE },
  { name: 'Australia', subtitle: 'shopname.ae', icon: Country.Australia },
  { name: 'United States', subtitle: 'shopname.ae', icon: Country.UAE },
  { name: 'Russia', subtitle: 'shopname.ru', icon: Country.Russia },
  { name: 'Italy', subtitle: 'shopname.it', icon: Country.Italy },
  { name: 'Denmark', subtitle: 'denmark.com.dk', icon: Country.Denmark },
  { name: 'France', subtitle: 'shopname.com.fr', icon: Country.France },
  { name: 'Arabic Emirates', subtitle: 'shopname.ae', icon: Country.UAE },
  { name: 'China', subtitle: 'shopname.ae', icon: Country.China },
  { name: 'Great Britain', subtitle: 'shopname.co.uk', icon: Country.England },
]);

const DOWNLOADS = Object.freeze([
  {
    id: 1,
    image: Market.googlePlay,
  },
  {
    id: 2,
    image: Market.appStore,
  },
]);

const FOOTER_LINK = Object.freeze([
  {
    id: 1,
    title: 'About',
    links: [
      {
        name: 'About Us',
        link: '',
      },
      {
        name: 'Find store',
        link: '',
      },
      {
        name: 'Categories',
        link: '',
      },
      {
        name: 'Blogs',
        link: '',
      },
    ],
  },
  {
    id: 2,
    title: 'Partnership',
    links: [
      {
        name: 'About Us',
        link: '',
      },
      {
        name: 'Find store',
        link: '',
      },
      {
        name: 'Categories',
        link: '',
      },
      {
        name: 'Blogs',
        link: '',
      },
    ],
  },
  {
    id: 3,
    title: 'Information',
    links: [
      {
        name: 'Help Center',
        link: '',
      },
      {
        name: 'Money Refund',
        link: '',
      },
      {
        name: 'Shipping',
        link: '',
      },
      {
        name: 'Contact us',
        link: '',
      },
    ],
  },
  {
    id: 4,
    title: 'For users',
    links: [
      {
        name: 'Login',
        link: '',
      },
      {
        name: 'Register',
        link: '',
      },
      {
        name: 'Settings',
        link: '',
      },
      {
        name: 'My Orders',
        link: '',
      },
    ],
  },
]);

export {
  CATEGORY_NAV,
  DEAL_PRODUCTS,
  DOWNLOADS,
  ITEM_PRODUCT,
  ITEM_PRODUCT_2,
  FOOTER_LINK,
  HEADER_NAV,
  HEADER_UTILS,
  RECOMMENDED_PRODUCT,
  REGION,
  SERVICES,
  SOCIAL_MEDIA,
};
