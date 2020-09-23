import React from 'react';

const StackCard = () => {
  return (
    <div className="card stack-card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"></img> </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div className="stack-card-menu columns">
          <div className="column stack-card-menu-choice">
            Overview
          </div>

          <div className="column stack-card-menu-choice">
            Stackers
          </div>
          <div className="column stack-card-menu-choice">
            Apps
          </div>
          <div className="column stack-card-menu-choice">
            Score
          </div>
        </div>

        {/* <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris. <a>@bulmaio</a>.
          <a href="#">#css</a> <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div> */}

      </div>
    </div>
  );
};

export default StackCard;
