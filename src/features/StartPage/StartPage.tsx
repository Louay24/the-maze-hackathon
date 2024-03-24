import React from "react";
import "./home.scss";
import fire from "../../assets/svgs/fire.svg";
import rightArrow from "../../assets/svgs/right-arrow.svg";
function StartPage() {
    const pic_url: string =
      "https://s3-alpha-sig.figma.com/img/d7e3/369f/72762713ba97779b95dce16b30444d27?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aywGBzoOCKaHLTROUg1J-L1ScD~kPL0HpedKKyLeRMRSEeNFqco0oOU0~cDdiiGrJls082zGA72vdASbm28YY~V3shBdrZDKQ5rjdBkAhc2Bdt0ddVl2m3U3tF7iH2XhMNirQRBWRlNHnnARDZy~o6oBRwn~kuUdziHwFEgniY08wJo2u9-7KR6JCTf8806usdUgtr48BitLID4fwbyFKNux-LAjgO-UsCv70zxnoU5OsnzQ86j4aAFq4vQqa22oHBMrSI~66zmlCI3Km~6tbR9ILTBo~gkwP7q1D977Y7SEcZO4q0Bv73-nJn3MIUK5KVoVbMNAZVJlwnCoWZoO5w__";
    return (
      <div className="main_container">
        <div className="first_container">
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="spacer"
          >
            <div className="circle"></div>
            <h1 id="logo">Wayzello</h1>
          </div>
          <div
            className="spacer"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>
              enhance collaboration, and boost productivity <img src={fire}></img>
            </h1>
            <p>
              Streamline your workflow with our comprehensive task and project
              management platform, designed to simplify project organization, task
              delegation, and progress tracking for teams of all sizes.
            </p>
          </div>
  
          <div className="spacer">
            <button className="primaryButton">About Us</button>
            <button className="secondaryButton" style={{ marginLeft: "40px" }}>
              Get Started <img src={rightArrow} style={{ marginLeft: "10px" }} />
            </button>
          </div>
          <h4>
            Already have an account?{" "}
            <a style={{ color: "inherit" }} href="#">
              click here
            </a>
          </h4>
        </div>
        <div className="second_container">
          <img src={pic_url} alt="logo" className="pic" />
        </div>
      </div>
    );
  }
  
  export default StartPage;
  