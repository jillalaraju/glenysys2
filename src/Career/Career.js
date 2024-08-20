import "./career.scss";

import mainImg from "./assets/main-img.jpg";
import { FaAngleDown, FaMinus } from "react-icons/fa";

import { useState } from "react";

const Career = () => {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);

  const handleOne = () => {
    setOne(!one);
  };
  const handleTwo = () => {
    setTwo(!two);
  };
  const handleThree = () => {
    setThree(!three);
  };

  return (
    <div className="career-page">
      <div className="main-img-section">
        <img src={mainImg} />
        <div className="main-img-text">Careers</div>
      </div>
      <div>
        <div className="job-box-container">
          <div className="job-container">
            <div
              className={one ? "job-box-active" : "job-box"}
              onClick={handleOne}
            >
              <h4> Cloud Engineer (EXP:2 YEARS) </h4>
              {one ? <FaMinus /> : <FaAngleDown />}
            </div>

            {one ? (
              <div className="job-containers">
                {" "}
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-10-20
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Position : </strong>
                    Cloud Engineer (EXP:2 YEARS)
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Last Date : </strong>
                    03-11-20
                  </p>
                </div>
                <div>
                  <div>
                    <h4 className="heading-text">Job Description : </h4>
                    <p>
                      We hire talent from colleges and universities in our
                      Consulting practices and guide their further development
                      into leaders. Our new hires progress from Associates and
                      Consultants to Engagement Leaders, Directors and
                      ultimately Vice Presidents in various practices. Along the
                      way, they gain experience, knowledge and leadership skills
                      that prepare them for the ultimate goal in consulting
                      careers–a practice leadership responsibility.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="job-containers">
                {" "}
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-10-20
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Position : </strong>
                    Cloud Engineer (EXP:2 YEARS)
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="job-container">
            <div
              className={two ? "job-box-active" : "job-box"}
              onClick={handleTwo}
            >
              <h4> DevOps Engineer (EXP:5 YEARS) </h4>
              {two ? <FaMinus /> : <FaAngleDown />}
            </div>
            {two ? (
              <div className="job-containers">
                {" "}
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-11-20
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Position : </strong>
                    DevOps Engineer (EXP:5 YEARS)
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Last Date : </strong>
                    03-11-20
                  </p>
                </div>
                <div>
                  <div>
                    <h4 className="heading-text">Job Description : </h4>
                    <p>
                      We hire talent from colleges and universities in our
                      Consulting practices and guide their further development
                      into leaders. Our new hires progress from Associates and
                      Consultants to Engagement Leaders, Directors and
                      ultimately Vice Presidents in various practices. Along the
                      way, they gain experience, knowledge and leadership skills
                      that prepare them for the ultimate goal in consulting
                      careers–a practice leadership responsibility.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="job-container">
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-11-20
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Position : </strong>
                    DevOps Engineer (EXP:5 YEARS)
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="job-container">
            <div
              className={three ? "job-box-active" : "job-box"}
              onClick={handleThree}
            >
              <h4> CLoud Analyst (EXP:7 YEARS) </h4>
              {three ? <FaMinus /> : <FaAngleDown />}
            </div>

            {three ? (
              <div className="job-containers">
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-11-20
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Position : </strong>
                    DevOps Engineer (EXP:5 YEARS)
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Last Date : </strong>
                    03-11-20
                  </p>
                </div>
                <div>
                  <div>
                    <h4 className="heading-text">Job Description : </h4>
                    <p>
                      We hire talent from colleges and universities in our
                      Consulting practices and guide their further development
                      into leaders. Our new hires progress from Associates and
                      Consultants to Engagement Leaders, Directors and
                      ultimately Vice Presidents in various practices. Along the
                      way, they gain experience, knowledge and leadership skills
                      that prepare them for the ultimate goal in consulting
                      careers–a practice leadership responsibility.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="job-container">
                <div>
                  <p>
                    <strong>Posted On : </strong>
                    03-11-20
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Position : </strong>
                    DevOps Engineer (EXP:5 YEARS)
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
