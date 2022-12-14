import React from "react";
import Social from "../../Social";

const ModalTwo = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/2.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* End image */}

      <div className="news_details">
        <span>
          December 12,2022 <a href="#">Lifestyle</a>
        </span>
        <h3 className="title"> Why to buy Real Estate in Puerto Penasco?</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            You can own the home of your dreams in here and for much less than it 
            would cost you most anywhere in the U.S. or Canada.  The real estate 
            market offers endless possibilities for your retirement : in one hand 
            You can buy land and build the house you always wanted to own, or you 
            can opt for an already made modern home in the city, or a villa in one 
            of our gorgeous  gated communities. We also have awesome developments 
            that have it all for you to have the best life ever.
          </p>
          <p>
            For example, You can retire on a <a href="https://internationalliving.com/countries/mexico/beachfront/">beachfront</a>, golf course community 
            with all amenities (like Las Conchas, Islas del Mar, Laguna Shores 
            or many others). You can also retire in a beach front condo 
            (we have the best you could think of in Sandy Beach and Playa Azul) 
            or in a modern comfortable  house in the city— the possibilities are 
            limitless if you have an open heart. 
          </p>
        </div>
        {/* End description */}
        <div className="news_share">
          <span>Share:</span>
          <Social />
        </div>
        {/* End news share */}
      </div>
    </div>
  );
};

export default ModalTwo;
