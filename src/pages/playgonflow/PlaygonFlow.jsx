import "./playgonflow.css";

export default function PlaygonFlow() {
  return (

    <div className="playgonflow">
        <img className="rightbarAd" src="assets/motion_picturePub/cod.jpeg" width="200" height="300" alt="" />
      <div className="playgonFlowWrapper">
        <div className="playgonFlowLeft">
          <h3 className="playgonFlowLogo">Playgon</h3>
          <span className="playgonFlowDesc">
            Connect with friends and the world around you on Playgon.
          </span>
        </div>
        <div className="playgonFlowRight">
          <div className="playgonFlowBox">
              <button className="playgonFlowRegisterButton">
                          Create a New Account
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
