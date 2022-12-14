import React from "react";
import Social from "../../Social";

const ModalThree = () => {
  return (
    <div className="description_wrap scrollable">
      <div className="image">
        <img src="/img/placeholders/4-3.jpg" alt="thumb" />
        <div
          className="main"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/news/3.jpg"
            })`,
          }}
        ></div>
      </div>
      {/* END IMAGE */}
      <div className="news_details">
        <span>
          December 11,2022 <a href="#">Lifestyle</a>
        </span>
        <h3 className="title">Why to retire in Puerto Penasco?</h3>
      </div>
      {/* End details */}
      <div className="main_content">
        <div className="descriptions">
          <p>
            Puerto Penasco is a great option for people who want to make the 
            transition to move into Mexico full time or retire for its 
            proximity to the border. 
            If Are you considering retiring in some place warm and exotic 
            without giving up life’s conveniences, Then you should definitely 
            consider retiring in Rocky Point.
          </p>
          <p>
            Being only 45 minutes from Lukeville Az, and being a beach destination
            that has it all to  enjoy and relax, thats why Puerto Penasco is becoming
            so popular among American families; and not only families from the other 
            side of the border but also from other northern states. another great 
            reason is because The real estate market offers endless possibilities 
            for your retirement in Mexico.
          </p>
          <p>
            Mexico is also appealing to an increasing number of professionals
            and business people who semi-retire to Mexico while continuing to 
            work and manage their companies…while sitting on a beach with a laptop.
          </p>
        </div>
        {/* END DESCRIPTION */}
        <div className="news_share">
          <span>Share:</span>
          <Social />
          {/* END SOCIAL SHARE */}
        </div>
      </div>
    </div>
  );
};

export default ModalThree;
