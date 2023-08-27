import React from 'react'

const HomePage = () => {
  return (
    <div className="banner home">
      <div className="container">
        {/* my extra design */}
        <ul className="wrapper">
          <div className="sun">
            <div className="star" />
          </div>
          <div className="mercury">
            <div className="planet">
              <div className="shadow" />
            </div>
          </div>
          <div className="venus">
            <div className="planet">
              <div className="shadow" />
            </div>
          </div>
          <div className="earth">
            <div className="planet">
              <div className="shadow" />
            </div>
          </div>
          <div className="mars">
            <div className="planet">
              <div className="shadow" />
            </div>
          </div>
          <div className="jupiter">
            <div className="planet">
              <div className="shadow" />
            </div>
          </div>
        </ul>
        {/*end my design*/}
      </div>
      <div className="banner-col-wrapper">
        <div
          className="banner-colms banner-left"
          style={{ visibility: "hidden" }}
        >
          <span className="flg-img" />
          {/* audo sound effect */}
          <iframe
            src="./images/sound.mp3"
            allow="autoplay"
            style={{ display: "none" }}
            id="iframeAudio"
          ></iframe>
        </div>
        <div className="banner-colms banner-right">
          <span className="name-text">Bhagirath Sheela</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage