import React from "react";
import Social from "../../Social";

const ModalOne = () => {
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
        <h3 className="title">What are the steps to buy RE in Mexico?</h3>
      </div>
      {/* End details */}

      <div className="main_content">
        <div className="descriptions">
          <p>
            <strong>Choosing a Certified Real Estate Advisor</strong>
            <br />
            I strongly recommend working with an AMPI-affiliated Real Estate Advisor 
            If you are wanting to purchase real estate in Puerto Peñasco.
          </p>
          <p>
            <strong>Making an Offer in Rocky Point</strong>
            <br />
            Once you find your dream property, you can make an offer on it and your 
            real estate advisor will write up the details on an AMPI-approved form. 
            Your offer will either be rejected, counter-offered or accepted. 
            If accepted, you will secure your offer with an escrow deposit which 
            is held by an Escrow Company. 
          </p>
          <p>
            <strong>Rocky Point Escrow Company</strong>
            <br />
            All transactions will use an escrow company for the purpose of securing 
            your deposit payment and ultimately your remaining purchase payment. 
            The escrow company will distribute funds the day of your closing to 
            all entitled parties. 
          </p>
          <p>
            <strong>After-Offer Activity</strong>
            <br />
            Once your offer is accepted and escrow deposit made a flurry of activity 
            will begin in preparation for your closing. You will be contacted by 
            your assigned closing coordinator that was agreed to in your 
            offer-to-purchase by the buyer and seller’s agents. 
          </p>
          <p>
            <strong>The Closing</strong>
            <br />
            A real estate closing in Mexico is conducted by a Notario who will oversee 
            the signing of all legal documents. A Notario in Mexico is a real estate 
            attorney whose responsibility is to register the sale and are legally 
            responsible and held accountable to ensure the deed title is clean and 
            recorded in the public registry. 
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

export default ModalOne;
