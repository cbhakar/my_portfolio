import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              CHANDRA
              <br />
              <span>BHAKAR</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Senior AI Engineer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">GenAI</div>
              <div className="landing-h2-2">Consultant</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Consultant</div>
              <div className="landing-h2-info-1">GenAI</div>
            </h2>
            <div className="landing-freelance-tags">
              <span>Open to:</span> Freelance • Contract • Remote
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
