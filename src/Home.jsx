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
           <Product />
           {/* Product */}
         </div>
         <div className="home_row">
           {/* Product */}
           {/* Product */}
           {/* Product */}
         </div>
         <div className="home_row">
           {/* Product */}
         </div>
       </div>
     </div>
   );
}

export default Home;