import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
   return (
     <div className="home">
       <div className="home__container">
         <img
           className="home_image"
           src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3740_.jpg"
           alt="home"
         />
         <div className="home_row">
           <Product
             title="The Four Agreements: A Practical Guide to Personal Freedom (A Toltec Wisdom Book) "
             price={14.08}
             rating={4}
             image={
               "https://images-na.ssl-images-amazon.com/images/I/51n1v-iqXBL._SX352_BO1,204,203,200_.jpg"
             }
           />
           <Product
             title="2021 Newest Lenovo Ideapad 3 Laptop, 15.6 Full HD 1080P Non-Touch Display, AMD Ryzen 3 3250U Processor, 8GB DDR4 RAM, 256GB PCIe NVMe SSD, Webcam, Wi-Fi, HDMI, Windows 10 Home, KKE Mousepad, Grey"
             image={
               "https://m.media-amazon.com/images/I/71WTF+xiiHL._AC_UY218_.jpg"
             }
             price={599}
             rating={4}
           />
         </div>
         <div className="home_row">
           <Product
             title="Echo Dot (4th Gen, 2020 release) | Smart speaker with Alexa | Charcoal"
             image={
               "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_UY218_.jpg"
             }
             price={199}
             rating={5}
           />
           <Product
             title="Apple Watch Series 3 (GPS, 42mm) - Silver Aluminum Case with White Sport Band"
             image={
               "https://m.media-amazon.com/images/I/71gsjKxyfjL._AC_UY218_.jpg"
             }
             price={344}
             rating={4}
           />
           <Product
             title="Samsung S21 Ultra 5G with Snapdragon 888 (Phantom Silver, 12GB RAM, 256GB Storage)"
             image={
               "https://m.media-amazon.com/images/I/81J0QOSKU-L._AC_UY218_.jpg"
             }
             price={799}
             rating={4}
           />
         </div>
         <div className="home_row">
           <Product
             title="2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 8-core GPU, 8GB RAM, 512GB SSD) - Space Grey"
             image={
               "https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg"
             }
             price={1199}
             rating={5}
           />
         </div>
       </div>
     </div>
   );
}

export default Home;