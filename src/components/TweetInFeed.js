import React from "react";
import './TweetInFeed.css';
import golf from "../images/golf.png";
import canoe from "../images/canoe.png"
import { defaultImgs } from "../defaultimgs";
import { Icon } from "web3uikit";


const TweetInFeed = () => {
  

  return (
    <>
    <div className="feedTweet">
    <img src={defaultImgs[0]} className="profilePic"></img>
    <div className="completeTweet">
      <div className="who">
        Pranav
        <div className="accWhen">0x45155CB2 . 1h</div>
      </div>
      <div className="tweetContent">
        gm world 
        <img src={golf} className="tweetImg"></img>
      </div>
      <div className="interactions">
        <div className="interactionNums">
          <Icon fill="#3f3f3f" size={20} svg="messageCircle"/>
        </div>
        <div className="interactionNums">
          <Icon fill="#3f3f3f" size={20} svg="star"/>
        </div>
        <div className="interactionNums">
          <Icon fill="#3f3f3f" size={20} svg="matic"/>
        </div>
      </div>

    </div>
    </div>

    <div className="feedTweet">
  
    </div>
    </>
  );
};

export default TweetInFeed;

