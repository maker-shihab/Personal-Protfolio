import React from "react";
import Helmet from "react-helmet";
import "./ResumePage.css";

const ResumePage = () => {
  return (
    <main>
      <Helmet>
        <title>Resume</title>
      </Helmet>
      <div className="resume_area">
        <div className="resume_area_header">
          <h3 className="section-title">
            My Core <span>Skills</span>{" "}
          </h3>
        </div>
        <div class="resume_content pt-6">
          <div class="resume_content_item">
            <div class="resume_content_item-single pt-6">
              <h3 class="text-2xl pb-4">Education</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="left-part">
                    <h5 class="item-period">2017</h5>
                    <span class="item-company">Brothers IT</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Graphic Design</h4>
                    <div>
                      <p>
                        Maecenas finibus nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis ante.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item clearfix">
                  <div class="left-part">
                    <h5 class="item-period">2018</h5>
                    <span class="item-company">FreeCodeCamp</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Frontend Development</h4>
                    <div>
                      <p>
                        Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                        turpis iaculis, feugiat risus quis, aliquet urna.
                        Quisque fringilla mollis risus, eu pulvinar dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item clearfix">
                  <div class="left-part">
                    <h5 class="item-period">2020</h5>
                    <span class="item-company">Coder IT  Solusion</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Web Development</h4>
                    <div>
                      <p>
                        Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                        turpis iaculis, feugiat risus quis, aliquet urna.
                        Quisque fringilla mollis risus, eu pulvinar dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item clearfix">
                  <div class="left-part">
                    <h5 class="item-period">2021</h5>
                    <span class="item-company">LEDP - ICT Division</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Web Development</h4>
                    <div>
                      <p>
                        Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                        turpis iaculis, feugiat risus quis, aliquet urna.
                        Quisque fringilla mollis risus, eu pulvinar dolor.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item clearfix">
                  <div class="left-part">
                    <h5 class="item-period">2021 - 2022</h5>
                    <span class="item-company">Programing Hero</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">MERN Stack Developer</h4>
                    <div>
                      <p>
                        Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                        turpis iaculis, feugiat risus quis, aliquet urna.
                        Quisque fringilla mollis risus, eu pulvinar dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="resume_content_item-single pt-6">
              <h3 class="text-2xl pb-4">Experience</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="left-part">
                    <h5 class="item-period">2020</h5>
                    <span class="item-company"><a href="/">Fiverr Marketplace</a></span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Frontend Development</h4>
                    <div>
                      <p>
                        Maecenas finibus nec sem ut imperdiet. Ut tincidunt est
                        ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis ante.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="timeline-item clearfix">
                  <div class="left-part">
                    <h5 class="item-period">2021</h5>
                    <span class="item-company">Upwork  Marketplace</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Frontend Development</h4>
                    <div>
                      <p>
                        Aliquam tincidunt malesuada tortor vitae iaculis. In eu
                        turpis iaculis, feugiat risus quis, aliquet urna.
                        Quisque fringilla mollis risus, eu pulvinar dolor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="resume_content_item progress_content">
            <div class="progress pt-6">
              <h3 class="text-2xl pb-4">Design Skills</h3>
              <div class="progress_item">
                <div class="progress_title">
                  <h3>Convert PSD</h3>
                  <span>95%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item print_design">
                <div class="progress_title">
                  <h3>UI / UX</h3>
                  <span>65%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item logo_design">
                <div class="progress_title">
                  <h3>Web Design</h3>
                  <span>80%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item graphic_design">
                <div class="progress_title">
                  <h3>Mail Template</h3>
                  <span>90%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
            </div>
            <div class="progress coding_progress pt-6">
              <h3 class="text-2xl pb-4">Coding Skills</h3>
              <div class="progress_item javascript">
                <div class="progress_title">
                  <h3>JavaScript</h3>
                  <span>75%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item react">
                <div class="progress_title">
                  <h3>React.js</h3>
                  <span>65%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item express">
                <div class="progress_title">
                  <h3>Express</h3>
                  <span>20%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item MongoDB">
                <div class="progress_title">
                  <h3>MongoDB</h3>
                  <span>25%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
            </div>
            <div class="progress pt-6">
              <h3 class="text-2xl pb-4">Knowledges</h3>
              <ul class="knowleg">
                <li>Front End Developer</li>
                <li>PHP</li>
                <li>WordPress</li>
                <li>Responsive</li>
                <li>AJAX</li>
                <li>Tailwind</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Bootstrap</li>
                <li>Layout Mobile friendly</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
