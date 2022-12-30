import React from "react";
import { Link } from "react-router-dom";
import './Profile.css';
import { defaultImgs } from "../defaultimgs";
import TweetInFeed from "../components/TweetInFeed";

const Profile = () => {
  

  return (
    <>
    <div className="pageIdentify">Profile </div>
    <img className="profileBanner" src={defaultImgs[1]}></img>
    <div className="pfpContainer">
      <img className="profilePFP" src={defaultImgs[0]}></img>
      <div className="profileName">Pranav</div>
      <div className="profileWallet">0x5CB2</div>
      <Link to="/settings">
        <div className="profileEdit">Edit Profile</div>
      </Link>
      <div className="profileBio">
        CS student 
      </div>
      <div className="profileTabs">
        <div className="profileTab">
          Your Tweets
        </div>
      </div>
    </div>
    <TweetInFeed Profile={true}></TweetInFeed>
    </>
  );
};

export default Profile;

