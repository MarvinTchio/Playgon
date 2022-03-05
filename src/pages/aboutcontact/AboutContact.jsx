import Topbar from "../../components/topbar/Topbar";
import "./aboutcontact.css"

export default function AboutContact() {
  return (
    <>
      <Topbar />
      <div className="aboutContactContainer">
      <h3 className="contact">Contact email</h3>
                <span className="contactInfo">
                  Contact us at: marvin.tchio@playgon.com.
                </span>
                <img className="shareProfileImg" src="/assets/person/3.jpeg" alt="" />

      </div>
    </>
  );
}