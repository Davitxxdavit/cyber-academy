import React, { useState } from 'react';
import styles from "./curses.module.css";
import { Link } from 'react-router-dom';
import courseImage from "../asets/course-4.jpg"; // Adjust the path as needed
import syllabusPdf from "../asets/silabus-rast.docx"; // Make sure you have this PDF file in your assets
import { motion } from 'motion/react';
import { ReactTyped } from 'react-typed';
import lari from '../asets/lari.png';
import calendar from '../asets/calendar.png';
import rightArrow from '../asets/right-arrow-svgrepo-com.svg';
import up from '../asets/up.svg';
import down from '../asets/down.svg';
import mentor from '../asets/mentors3.jpeg';
function App() {
  const [miniSidebar, setMiniSidebar] = useState(false);
  const [micVisible, setMicVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
const [arrowDown, setArrowDown] = useState(false);
  const [arrowDown1, setArrowDown1] = useState(false);
  const [arrowDown2, setArrowDown2] = useState(false);
  const [arrowDown3, setArrowDown3] = useState(false);
const [arrowDown4, setArrowDown4] = useState(false);
const [arrowDown5, setArrowDown5] = useState(false);
const [isClicked, setIsClicked] = useState(false);

  const clickAboutUs = () => {
    return setIsClicked(!isClicked);
  }

  const collapse = () => {
    setArrowDown(!arrowDown);
  }

    const collapse4 = () => {
    setArrowDown4(!arrowDown4);
  }

     const collapse5 = () => {
    setArrowDown5(!arrowDown5);
  }


  const collapse1 = () => {
    setArrowDown1(!arrowDown1);
  }

  const collapse2 = () => {
    setArrowDown2(!arrowDown2);
  }

  const collapse3 = () => {
    setArrowDown3(!arrowDown3);
  }



  const handleMouseEnter = () => {
    setMiniSidebar(true);
    setMicVisible(false);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setMiniSidebar(false);
      setMicVisible(true);
    }, 300);
  };

  const openNav = () => {
    setSidebarOpen(true);
  };

  const closeNav = () => {
    setSidebarOpen(false);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  const handleDownloadSyllabus = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = syllabusPdf;
    link.download = 'Office_Syllabus.docx'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleRegistration = () => {
    // Add registration functionality here
    console.log("Registration button clicked");
    // You might want to redirect to a registration page or open a modal
  };

  return (
    <div className={styles.app}>
      <div id="mySidebar2" className={styles.sidebar2} style={{ width: sidebarOpen ? '250px' : '0' }}>
        <button className={styles.closebtn} onClick={closeNav}>☰</button>
        <Link to="/">მთავარი</Link>
        <Link to="/gallery">კარიერა</Link>
        <Link to="/mentors">გუნდი</Link>
        <div className={styles.mobileAboutUs}>
                           <p onClick={clickAboutUs}>ჩვენს შესახებ</p>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/mission">მისია,ხედვა,ღირებულებები</Link>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/norms">მარეგურილებერი ნორმები</Link>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/quality">ხარისხის უზრუნველყოფა</Link>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/strategy">სტრატეგიული განვითარების გეგმა</Link>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/plan">სამოქმედო გეგმა</Link>
                           <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/finance">ფინანსური საქმიანობის შესახებ</Link>
                            <Link style={
                            {
                              display: isClicked ? 'block' : 'none'
                            }
                           } className={styles.linkDisplayMobile} to="/AboutUs">ჩვენს შესახებ</Link>
        </div>
      </div>
      
      <div id="main2" style={{ marginLeft: sidebarOpen ? '250px' : '0' }}>
        <button 
          className={styles.openbtn} 
          id="openBtn" 
          onClick={openNav} 
          style={{ display: sidebarOpen ? 'none' : 'block' }}
        >
          ☰
        </button>  
      </div>

      <div className={styles.container}>
        <Link to="/">
          <button className={styles["glow-on-hover"]} type="button">მართვა</button>
        </Link>
        <Link to="/gallery">
          <button className={styles["glow-on-hover"]} type="button">კარიერა</button>
        </Link>
        <Link to="/mentors">
          <button className={styles["glow-on-hover"]} type="button">გუნდი</button>
        </Link>
          <div className={styles.aboutUs}>
                           <p >ჩვენს შესახებ</p>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/mission">მისია,ხედვა,ღირებულებები</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/norms">მარეგურილებერი ნორმები</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/quality">ხარისხის უზრუნველყოფა</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/strategy">სტრატეგიული განვითარების გეგმა</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/plan">სამოქმედო გეგმა</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/finance">ფინანსური საქმიანობის შესახებ</Link>
                           <hr/>
                           <Link className={styles.linkDisplay} to="/AboutUs">ჩვენს შესახებ</Link>
                           <hr/>
                        </div>
      </div>



<div className={styles.mainEdited}>
        <div className={styles.mainInnerEdited}>
            <motion.div
          
              initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
             className={styles.leftFirst}>
             <img src={courseImage} alt='#' />
             </motion.div>
            <div className={styles.rightFirst}>
              <ReactTyped className={styles.title}
              
              strings={[
                'საოფისე პროგრამული უზრუნველყოფა',
                'საოფისე პროგრამული უზრუნველყოფა'
                ]}
                typeSpeed={90}
                backSpeed={100}
                showCursor={false}
              loop
              />
              {/* <h1>ვებ ტექნოლოგიები</h1> */}
              <p>
                გსურთ შეისწავლოთ დღევანდელობის ყველაზე მოთხოვნადი საოფისე პროგრამები? მაშინ შემოგვიერთდით.
გსურთ შეისწავლოთ დღევანდელობის ყველაზე მოთხოვნადი საოფისე პროგრამები? მაშინ შემოგვიერთდით.
გსურთ შეისწავლოთ დღევანდელობის ყველაზე მოთხოვნადი საოფისე პროგრამები? მაშინ შემოგვიერთდით.
გსურთ შეისწავლოთ დღევანდელობის ყველაზე მოთხოვნადი საოფისე პროგრამები? მაშინ შემოგვიერთდით.
მიმდინარე კურსის ფარგლებში თქვენ შეისწავლით საოფისე პროგრამებს, გაეცნობით მათ რეალურ შესაძლებლობებს და შეძლებთ გამოიყენოთ ის ნებისმიერ საქმეში.

              </p>

                <hr/>

              <ul>
                <li>კურსი მოიცავს რამდენიმე მიმართულებას:</li>
                <li>საოფისე პროგრამები (Microsoft Word, Microsoft Excel, Microsoft PowerPoint და დამატებითი პროგრამები).</li>
                <li>საფოსტო სერვისების მართებული გამოყენება.</li>
                <li>არ გამოტოვო შესაძლებლობა მარტივად შეისწავლო დაპროგრამების საფუძვლები.</li>
                <li>გრაფიკულ ობიექტებთან მუშაობა</li>
                <li>ხელმისაწვდომი ადგილები-30</li>
                <li>დარგობრივი ინგლისური ენა</li>
              </ul>
            </div>
        </div>
        <div className={styles.sectionRegistration}>
          <div className={styles.sectionRegistrationInner}>
            <div className={styles.iconsContainer}>
              <img alt='#' className={styles.calendarImg} src={calendar} />
              <span>ხანგრძლივობა</span>
            </div>
            <span className={styles.spanN}>3 თვე</span>
          </div>
          <div className={styles.sectionRegistrationInner}>
           <div className={styles.iconsContainer}>
              <img alt='#' src={lari} />
              <span>ფასი</span>
           </div>
           <span className={styles.spanN}>750ლ</span>
          </div>
          <div>
          
            <motion.button 
            whileHover={{scale: 1.1 }}
            whileTap={{scale: 0.9 }}
            onClick={handleRegistration}
            className={styles.regBTN}>რეგისტრაცია</motion.button>
          </div>
        </div>


        <div className={styles.secondSection}>
          <div className={styles.mentor}>
            <h2>მენტორი</h2>
            <img alt='#' src={mentor} />
            <span>ზურაბ მესხიძე</span>
            <p>ვებ დეველოპერი</p>
          </div>
          <div className={styles.syllabusContainer}>
            <h2 className={styles.syllabusH2}>სილაბუსი</h2>
            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse}>
              <span className={styles.listTitle}>თემატიკა I</span> 
              <img alt='#' src={arrowDown ? up : down} />
              </div>
              <ul style={{
                display: arrowDown ? 'block' : 'none',
              }}>
                <li>ვექტორული რედაქტორის ინტერფეისის გაცნობა</li>
                <li>დოკუმენტის პარამეტრების განხილვა</li>
                <li>არსებული დოკუმენტის რედაქტირება</li>
                <li>არსებული დოკუმენტის შენახვა/ფაილის ფორმატები</li>
                <li>პირველი შედეგის შეფასება</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse1}>
              <span className={styles.listTitle}>თემატიკა II</span> 
              <img alt='#' src={arrowDown1 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown1 ? 'block' : 'none',
              }}>
                <li>ვექტორული ობიექტების გეომეტრიულ ფიგურებთან მუშაობა</li>
                <li>ფუნჯების ტიპების გამოყენება</li>
                <li>სიმბოლოებთან მუშაობა</li>
                <li>ტექსტებთან მუშაობა</li>
                <li>მეორე შედეგის შეფასება</li>
              </ul>
              
            </div>


            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse2}>
              <span className={styles.listTitle}>თემატიკაIII</span> 
              <img alt='#' src={arrowDown2 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown2 ? 'block' : 'none',
              }}>
                <li>ვექტორული ობიექტების ტრანსფორმაციის გაცნობა</li>
                <li>დეფორმაციის ხელსაწყოების გამოყენება</li>
                <li>ხელსაწყოების სახეების გამოყენება</li>
                <li>ვექტორული ობიექტების სწორების რეჟიმები</li>
                <li>Pathfinder-ის ლოგიკური ოპერაციების განხილვა</li>
                <li>მესამე შედეგის შეფასება</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse3}>
              <span className={styles.listTitle}>თემატიკაIV</span> 
              <img alt='#' src={arrowDown3 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown3 ? 'block' : 'none',
              }}>
                <li>დამატებითი ეფექტების შექმნა და გამოყენება</li>
                <li>გადადინების ეფექტი სამგანზომილებიანი ეფექტი</li>
                <li>გრაფიკული ეფექტების გამოყენება</li>
                <li>გრაფიკული სტილების გამოყენება</li>
                <li>მეოთხე შედეგის შეფასება</li>
              </ul>
              
            </div>

              <div>
              <div className={styles.syllabusContainerInner} onClick={collapse4}>
              <span className={styles.listTitle}>თემატიკაV</span> 
              <img alt='#' src={arrowDown4 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown4 ? 'block' : 'none',
              }}>
                <li>რასტრული გამოსახულების ტრასირება</li>
                <li>ტრასირების სახეობები და პარამეტრები</li>
                <li>მეხუთე შედეგის შეფასება</li>
              </ul>
              
            </div>

            
            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse5}>
              <span className={styles.listTitle}>თემატიკაVI</span> 
              <img alt='#' src={arrowDown5 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown5 ? 'block' : 'none',
              }}>
                <li>დოკუმენტის მომზადება დასაბეჭდად</li>
                <li>დოკუმენტის ჭრის ხაზების გაცნობა</li>
                <li>დოკუმენტში ფერთა მოდელების განხილვა</li>
                <li>დოკუმენტში ფონტების კონვერტაცია</li>
                <li>კომბინირებული დავალების შესრულება</li>
              </ul>
              
            </div>


            <button
            onClick={handleDownloadSyllabus}
             className={styles.sylBTN}>სილაბუსი <img src={rightArrow}  alt='#' /><img className={styles.displayNone} src={rightArrow}  alt='#' /></button>
          </div> 
        </div>
      </div>




      <div
        className={styles.sidebar}
        style={{
          width: miniSidebar ? "430px" : "90px",
          transition: "width 0.5s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={styles.mic}
          style={{
            display: micVisible ? "block" : "none",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className={styles['mic-shadow']}></div>
        </div>

        <div className={styles['inner-side-menu']}>
          <div 
            className={styles['header-container5']}
            id={styles.header}
            style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
          >
            ჩვენ შესახებ
          </div>
          <div className={styles['fix-it-container5']}>
            <div 
              className={styles['texter1-container5']}
              id={styles.number}
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              +995 577 427 000
            </div>
          </div>
          <div className={styles['fix-it-container5']}>
            <div 
              className={styles['texter2-container5']}
              id={styles.addres}
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              <br/>
              ბათუმი, აღმაშენებლის 2 <br/>
              <br/>
              <br/>
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className={styles['fix-it-container5']}>
            <div className={styles['texter2-container5']} style={{ marginLeft: miniSidebar ? "20px" : "190px" }}>
              ბათუმი, აღმაშენებლის 2 <br />
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className={styles['boxes-in-container5']}>
            <div className={styles['box1-container5']}>
              <div className={styles['header-box-container5']} style={{ marginLeft: miniSidebar ? "-30px" : "190px" }}>
                MAP
              </div>

              <div className={styles.maper}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.29081238841826!2d41.612592077053016!3d41.63182261629536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a6b8a7e515%3A0xf66f06747969ee30!2sLLC%20Cyber%20Solutions!5e0!3m2!1sru!2sge!4v1706012975837!5m2!1sru!2sge" 
                  width="300" 
                  height="300" 
                  style={{ border: 0, marginLeft: miniSidebar ? '-85px' : '50px' }} 
                  allowFullScreen="" 
                  loading="fast" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  id={styles.maper}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id={styles.main}
        style={{
          marginLeft: miniSidebar ? "430px" : "90px",
          transition: "margin-left 0.5s ease-in-out",
        }}
      ></div>
    </div>
  );
}

export default App;