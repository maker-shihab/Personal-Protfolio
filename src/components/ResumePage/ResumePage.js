import React from "react";
import Helmet from "react-helmet";
import './ResumePage.css';

const ResumePage = () => {
  return (
    <main>
      <Helmet >
        <title>Resume</title>
      </Helmet>
      <div className="resume_area">
        <div className="resume_area_header">
          <h3 className="section-title">Resume</h3>
        </div>
        <div class="resume_content">
          <div class="resume_content_item">
            <div class="resume_content_item-single">
              <h3 class="section_title">Education</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="left-part">
                    <h5 class="item-period">2008</h5>
                    <span class="item-company">University of Studies</span>
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
                    <h5 class="item-period">2007</h5>
                    <span class="item-company">University of Studies</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Graphic Design</h4>
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
            <div class="resume_content_item-single">
              <h3 class="section_title">Experience</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <div class="left-part">
                    <h5 class="item-period">2008</h5>
                    <span class="item-company">University of Studies</span>
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
                    <h5 class="item-period">2007</h5>
                    <span class="item-company">University of Studies</span>
                  </div>
                  <div class="divider"></div>
                  <div class="right-part">
                    <h4 class="item-title">Graphic Design</h4>
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
            <div class="progress">
              <h3 class="section_title">Design Skills</h3>
              <div class="progress_item">
                <div class="progress_title">
                  <h3>Web Design</h3>
                  <span>90%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item print_design">
                <div class="progress_title">
                  <h3>Print Design</h3>
                  <span>65%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item logo_design">
                <div class="progress_title">
                  <h3>Logo Design</h3>
                  <span>80%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item graphic_design">
                <div class="progress_title">
                  <h3>Graphic Design</h3>
                  <span>90%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
            </div>
            <div class="progress coding_progress">
              <h3 class="section_title">Coding Skills</h3>
              <div class="progress_item javascript">
                <div class="progress_title">
                  <h3>JavaScript</h3>
                  <span>95%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item php">
                <div class="progress_title">
                  <h3>PHP</h3>
                  <span>85%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item htmlcss">
                <div class="progress_title">
                  <h3>HTML/CSS</h3>
                  <span>100%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item smarty">
                <div class="progress_title">
                  <h3>Smarty/Twig</h3>
                  <span>75%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
              <div class="progress_item perl">
                <div class="progress_title">
                  <h3>Perl</h3>
                  <span>90%</span>
                </div>
                <div class="progress_bar">
                  <span class="progress_line"></span>
                </div>
              </div>
            </div>
            <div class="progress">
              <h3 class="section_title">Knowledges</h3>
              <ul class="knowleg">
                <li>Marketing</li>
                <li>Print</li>
                <li>Digital Design</li>
                <li>Social Media</li>
                <li>Time Management</li>
                <li>Communication</li>
                <li>Problem-Solving</li>
                <li>Social Networking</li>
                <li>Flexibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResumePage;
