import React from "react";
import {
  FiFacebook,
  // FiTwitter,
  FiInstagram,
  // FiDribbble,
  FiLinkedin,
} from "react-icons/fi";

const SocialShare = [
  {
    iconName: <FiFacebook />,
    link: "https://www.facebook.com/Nidian-Perez-Real-Estate-Licensed-Agent-111001218176816/",
  },
  // { iconName: <FiTwitter />, link: "https://twitter.com/" },
  {
    iconName: <FiInstagram />,
    link: "https://www.instagram.com/nidianperezrealtor/",
  },
  // { iconName: <FiDribbble />, link: "https://dribbble.com/" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/nidian-y-perez-01502b245/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
