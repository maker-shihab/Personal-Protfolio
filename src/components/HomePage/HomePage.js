import Helmet from "react-helmet";
import { AiFillStar, AiOutlineCheckCircle } from "react-icons/ai";
import {
  FaBug,
  FaCloudDownloadAlt,
  FaFreeCodeCamp,
  FaHandHoldingHeart,
  FaLaptopCode,
  FaQuoteRight,
  FaRegShareSquare
} from "react-icons/fa";
import {
  MdIncompleteCircle,
  MdOutlineManageAccounts,
  MdOutlineMarkEmailRead
} from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <div className="home-page">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <div className="home_hero">
          <div className="home_hero_illustation">
            <div className="home_hero_illustation_img">
              <img
                src="https://i.ibb.co/8myL0LN/Working.gif"
                alt="header-img"
              />
            </div>
          </div>
          <div className="home_hero_tex">
            <h3 className="text-2xl">Web Designer</h3>
            <h2 className="home_hero_title pt-4 text-4xl font-bold">
              Maker Shihab
            </h2>
            <p className="pt-4">
              I am a Full-Stack Web Developer & Web Designer based in The USA,
              but working Worldwide. I am passionate about designing and
              developing user-friendly websites. I have all the skills to create
              a new high quality website or improve existing websites for
              individuals and organisations, using the latest techniques and
              trends.
            </p>
            <div className="home_hero_btns flex gap-5 mt-7">
              <button className="btn_primary">
                Download CV <FaCloudDownloadAlt />{" "}
              </button>
              <button className="btn_primary">
                Contact <MdOutlineMarkEmailRead />{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="section_devide py-10"></div>
        <div className="works_area">
          <h3 className="section-title">
            What <span>I Do</span>
          </h3>
          <div className="works_items">
            <div className="single_work">
              <div className="single_work_thumb">
                <FaFreeCodeCamp />
              </div>
              <div className="single_work_text pt-16">
                <h3 className="text-2xl font-bold pb-2">
                  Frond-End Development
                </h3>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales.
                </p>
              </div>
            </div>
            <div className="single_work">
              <div className="single_work_thumb">
                <FaLaptopCode />
              </div>
              <div className="single_work_text pt-16">
                <h3 className="text-2xl font-bold pb-2">
                  Frond-End Development
                </h3>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales.
                </p>
              </div>
            </div>
            <div className="single_work">
              <div className="single_work_thumb">
                <FaBug />
              </div>
              <div className="single_work_text pt-16">
                <h3 className="text-2xl font-bold pb-2">
                  Frond-End Development
                </h3>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales.
                </p>
              </div>
            </div>
            <div className="single_work">
              <div className="single_work_thumb">
                <MdOutlineManageAccounts />
              </div>
              <div className="single_work_text pt-16">
                <h3 className="text-2xl font-bold pb-2">
                  Frond-End Development
                </h3>
                <p>
                  Pellentesque pellentesque, ipsum sit amet auctor accumsan,
                  odio tortor bibendum massa, sit amet ultricies ex lectus
                  scelerisque nibh. Ut non sodales.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="section_devide py-10"></div>
        <div className="testmonial_area">
          <h3 className="section-title">Testimonials</h3>
          <div className="testmonial_content">
            <dic className="testmonial_items">
              <div className="single_testmonial">
                <div className="testmonial_header">
                  <div className="testmonila_profile">
                    <div className="profile_img">
                      <img
                        className="h-20 w-20 mx-auto rounded-full"
                        src="https://i.ibb.co/g7vtv4H/profile.jpg"
                        alt="profile"
                      />
                      <span className="rating">
                        5 <AiFillStar />
                      </span>
                    </div>
                    <div className="profile_text">
                      <h3 className="text-xl font-bold flex justify-center items-center gap-3">
                        Maker Shihab{" "}
                        <a href="/" target={"_blank"}>
                          <FaRegShareSquare />
                        </a>
                      </h3>
                      <p className="text-center text-gray-500 ">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="testmonial_devider">
                    <span>HIRED BY</span>
                  </div>
                  <div className="px-5">
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex gap-5 items-center">
                        <img
                          className="h-16 w-16 rounded-full"
                          src="https://i.ibb.co/k8KDZjx/c177-Jul6h-As-WIHt-IB8-Wptp-C5bc-T5-E8t-G91usx7cb7-SQa-LERUev-We1ydcb-GTd69pcx-F.jpg"
                          alt="buyer-profile"
                        />
                        <div className="">
                          <h3>Scott Hiser</h3>
                          <p className="text-sm text-gray-400">
                            on April 25, 2021
                          </p>
                        </div>
                      </div>
                      <div className="text-5xl">
                        <FaQuoteRight />
                      </div>
                    </div>
                    <p>
                      Great freelancer. I really enjoyed working with him. He's
                      very intelligent, competent, and careful. He does high
                      quality work. He speaks good English so communication was
                      easy. Highly recommended.
                    </p>
                  </div>
                </div>
              </div>
            </dic>
            <dic className="testmonial_items">
              <div className="single_testmonial">
                <div className="testmonial_header">
                  <div className="testmonila_profile">
                    <div className="profile_img">
                      <img
                        className="h-20 w-20 mx-auto rounded-full"
                        src="https://i.ibb.co/g7vtv4H/profile.jpg"
                        alt="profile"
                      />
                      <span className="rating">
                        5 <AiFillStar />
                      </span>
                    </div>
                    <div className="profile_text">
                      <h3 className="text-xl font-bold flex justify-center gap-3 items-center">
                        Maker Shihab{" "}
                        <a href="/" target={"_blank"}>
                          <FaRegShareSquare />
                        </a>
                      </h3>
                      <p className="text-center text-gray-500 ">
                        Mern Stack Developer
                      </p>
                    </div>
                  </div>
                  <div className="testmonial_devider">
                    <span>HIRED BY</span>
                  </div>
                  <div className="px-5">
                    <div className="flex justify-between items-center mb-5">
                      <div className="flex gap-5 items-center">
                        <img
                          className="h-16 w-16 rounded-full"
                          src="https://i.ibb.co/5MwdLpF/4282357b-2e5c-427d-972c-57e61df6f212.webp"
                          alt="buyer-profile"
                        />
                        <div className="">
                          <h3>Corse</h3>
                          <p className="text-sm text-gray-400">
                            on August 10, 2021
                          </p>
                        </div>
                      </div>
                      <div className="text-5xl">
                        <FaQuoteRight />
                      </div>
                    </div>
                    <p>
                      Great service, great web developer. Take every note
                      seriously and make pages accurate as the original design!
                      Using high end platforms and communication is perfect. If
                      you order from him, you are going to be satisfied 100%
                    </p>
                  </div>
                </div>
              </div>
            </dic>
          </div>
        </div>
        <div className="section_devide py-10"></div>
        <div className="pricing_area">
          <h3 className="section-title">Pricing</h3>
          <div className="pricing_content block md:flex mt-10">
            <div className="pricing_single">
              <div className="text-center pb-10">
                <h2 className="text-3xl font-bold custome_title">Silver</h2>
                <p className="font-normal text-sm text-gray-300 pt-4">
                  Advanced Features
                </p>
              </div>
              <h2 className="text-4xl text-white text-center font-bold uppercase">
                $100{" "}
                <span className="text-sm font-normal block">Per Month</span>
              </h2>
              <ul className="pt-5">
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
              </ul>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Chose Plan
              </button>
            </div>
            <div className="pricing_single  mt-16 md:mt-0">
              <div className="text-center pb-10">
                <h2 className="text-3xl font-bold custome_title">Pro</h2>
                <p className="font-normal text-sm text-gray-300 pt-4">
                  Advanced Features
                </p>
              </div>
              <h2 className="text-4xl text-white text-center font-bold uppercase">
                $250{" "}
                <span className="text-sm font-normal block">Per Month</span>
              </h2>
              <ul className="pt-5">
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
                <li>
                  <AiOutlineCheckCircle /> Features Details
                </li>
              </ul>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Chose Plan
              </button>
            </div>
          </div>
        </div>
        <div className="section_devide py-10"></div>
        <div className="funfact_area">
          <h3 className="section-title">
            Fun <span>Facts</span>
          </h3>
          <div className="funfact_content">
            <div className="funfact_single">
              <MdIncompleteCircle />
              <h3>Projects Complite</h3>
              <p>250+</p>
            </div>
            <div className="funfact_single">
              <FaHandHoldingHeart />
              <h3>Happy Clients</h3>
              <p>120+</p>
            </div>
            <div className="funfact_single">
              <VscFeedback />
              <h3>Positive Feadback</h3>
              <p>100%</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
