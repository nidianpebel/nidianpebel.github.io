import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11836.773252627649!2d-113.54065190130639!3d31.318534951321652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x812ba5b44ea74411%3A0x4349796169c75fb3!2sPuerto%20Pe%C3%B1asco%2C%20Son.!5e0!3m2!1ses!2smx!4v1667687901308!5m2!1ses!2smx"
        ></iframe>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
