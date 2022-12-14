import React from "react";
import Social from "../../Social";

const ModalFour = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/4.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          December 13,2022 <a href="#">Lifestyle</a>
        </span>
        <h3 className="title">Where is located Puerto Penasco?</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            Puerto Peñasco AKA Rocky Point is a trending destination that is located 
            in the Northwestern part of Mexico. The Port of Peñasco is very often 
            called “The Vallarta of the North” because of its incredible beaches and 
            recent development; and is also called “The Mexican Dubai” because of 
            its luxurious and ambitious projects being held.
          </p>
          <p>
            The most common nickname that Puerto Peñasco receives is “Arizona’s Beach” 
            because of its proximity to its neighbor State... being at only 45 minutes 
            away from the border.
          </p>
          <p>
            Puerto Peñasco is a hidden gem, an oasis in the middle of the Pinacate and 
            Altar Desert. Peñasco is a unique destination in northern Mexico that combines 
            both landscapes: awesome views of the dessert with beautiful emerald waters 
            embellished by dramatic and vivid sunsets.
          </p>
        </div>
        {/* End description */}
        <div className="news_share ">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalFour;
