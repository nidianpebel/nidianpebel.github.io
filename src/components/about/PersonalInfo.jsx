import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Nidian " },
  { meta: "last name", metaInfo: "Perez" },
  // { meta: "Age", metaInfo: "30 Years" },
  { meta: "Nationality", metaInfo: "Mexico" },
  // { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Puerto Peñasco" },
  { meta: "phone", metaInfo: "+52 638 156 1763" },
  { meta: "Email", metaInfo: "hola@nidianperez.com" },
  // { meta: "Skype", metaInfo: " rokers.nelson" },
  { meta: "langages", metaInfo: "Espanish, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
