import React, { useState } from 'react';
import styles from "./curses.module.css";
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';
import calendar from '../asets/calendar.png'; // Adjust the path as needed
import syllabusPdf from "../asets/silabus-3dDesign.docx"; // Make sure you have this PDF file in your assets
import lari from '../asets/lari.png';
import up from '../asets/up.svg';
import down from '../asets/down.svg';
import sofia from '../asets/mentorsofio.jpg';
import { motion } from 'motion/react';
import rightArrow from '../asets/right-arrow-svgrepo-com.svg';
import courseImage from '../asets/3ddesign.jpg';
function ThreeDDesign() {
  const [miniSidebar, setMiniSidebar] = useState(false);
  const [micVisible, setMicVisible] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [quantity, setQuantity] = useState(1);
  const [arrowDown, setArrowDown] = useState(false);
  const [arrowDown1, setArrowDown1] = useState(false);
  const [arrowDown2, setArrowDown2] = useState(false);
  const [arrowDown3, setArrowDown3] = useState(false);
  const [arrowDown4, setArrowDown4] = useState(false);
  const [arrowDown5, setArrowDown5] = useState(false);
  const [arrowDown6, setArrowDown6] = useState(false);
  const [arrowDown7, setArrowDown7] = useState(false);
  const [arrowDown8, setArrowDown8] = useState(false);
  const [arrowDown9, setArrowDown9] = useState(false);
  const [arrowDown10, setArrowDown10] = useState(false);
  const [arrowDown11, setArrowDown11] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
    const clickAboutUs = () => {
      return setIsClicked(!isClicked);
    }




  const collapse = () => {
    setArrowDown(!arrowDown);
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

  const collapse4 = () => {
    setArrowDown4(!arrowDown4);
  }

  const collapse5 = () => {
    setArrowDown5(!arrowDown5);
  }

  const collapse6 = () => {
    setArrowDown6(!arrowDown6);
  }

  const collapse7 = () => {
    setArrowDown7(!arrowDown7);
  }

  const collapse8 = () => {
    setArrowDown8(!arrowDown8);
  }

  const collapse9 = () => {
    setArrowDown9(!arrowDown9);
  }

  const collapse10 = () => {
    setArrowDown10(!arrowDown10);
  }

  const collapse11 = () => {
    setArrowDown11(!arrowDown11);
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

  // const incrementQuantity = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1);
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     setQuantity(prevQuantity => prevQuantity - 1);
  //   }
  // };

  const handleDownloadSyllabus = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = syllabusPdf;
    link.download = '3D Design_Syllabus.docx'; // Ensure the correct file format
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
                '3D Design and Modeling',
                '3D Design and Modeling',
                ]}
                typeSpeed={90}
                backSpeed={100}
                showCursor={false}
              loop
              />
              {/* <h1>ვებ ტექნოლოგიები</h1> */}
              <p> 3D მოდელირების კურსი CLO პროგრამით 👗 CLO პროგრამის საფუძვლებს — ინტერფეისი, ინსტრუმენტები და სამუშაო გარემო

✂️ ტანსაცმლის ციფრული კონსტრუქცია — ნაჭრის დეტალების შექმნა, შეკერვა და ფორმის მორგება

🎨 ტექსტურები და ფერები — რეალისტური ვიზუალის შექმნა და სტილის მორგება

🧵 სამოსის განვითარების ეტაპები — ესკიზიდან დასრულებულ 3D მოდელამდე

📸 პრეზენტაცია და რენდერი — პროფესიონალური ვიზუალის შექმნა პორტფოლიოსთვის ან წარმოებისთვის

კურსის ბოლოს, სტუდენტები შეძლებენ შექმნან სრულფასოვანი 3D სამოსის დიზაინი, რომელიც მზად იქნება ვიზუალიზაციისთვის, პროტოტიპირებისთვის ან წარმოებისთვის.            </p>

                <hr/>

              <ul>
                <li>კურსი შეიცავს</li>
                <li>შექმნა სამოსი ციფრულად</li>
                <li>იმუშაო მასალებთან რეალისტურად</li>
                <li>დაინერგოს თანამედროვე ინოვაციური თექნოლოგიები მოდის ინდუსტრიაში</li>
                <li>ჩაერთო მოთხოვნად სფეროში, საქართველოში და გლობალურად</li>
                
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
           <span className={styles.spanN}>1200ლ</span>
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
            <img alt='#' src={sofia} style={{
              width: '200px',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '50%'
            }} />
            <span>სოფიო დუმბაძე</span>
            <p>მოდის მენეჯერი</p>
          </div>
          <div className={styles.syllabusContainer}>
            <h2 className={styles.syllabusH2}>სილაბუსი</h2>
            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse}>
              <span className={styles.listTitle}>პროგრამის ინტერფეისის და საბაზისო ფუნქციების დაუფლება</span> 
              <img alt='#' src={arrowDown ? up : down} />
              </div>
              <ul style={{
                display: arrowDown ? 'block' : 'none',
              }}>
                <li>პროგრამის ინტერფეისის და საბაზისო ფუნქციების დაუფლება</li>
                <li>ძირითადი ინსტრუმენტების პანელების და მენიუების იდენტიფიცირება.</li>
                <li>პროგრამაში შემოქმედებითი სამუშაო პროცესის ორგანიზება.</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse1}>
              <span className={styles.listTitle}>ავატარებისა(ქალი,კაცი,ბავშვი)  და მანეკენების მართვა</span> 
              <img alt='#' src={arrowDown1 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown1 ? 'block' : 'none',
              }}>
                <li>სხვადასხვა ზომის და ფორმის მანეკენების გამოყენება.</li>
                <li>მანეკენების პოზიციონირება და ანიმაცია.</li>
                <li>სხეულის ზომების კონფიგურაცია სხვადასხვა სტანდარტების მიხედვით.</li>
                
              </ul>
              
            </div>


            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse2}>
              <span className={styles.listTitle}>სწავლის შედეგები:	ქსოვილების, მასალებისა და ტექსტურების გამოყენება</span> 
              <img alt='#' src={arrowDown2 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown2 ? 'block' : 'none',
              }}>
                <li>სხვადასხვა ქსოვილის ფიზიკური თვისებების სიმულაცია</li>
                <li>მასალების შექმნა და მოდიფიცირება</li>
                <li>ტექსტურების და პრინტების გამოყენება სამოსის დიზაინში</li>
                <li>ქსოვილის ფიზიკური პარამეტრების მორგება რეალისტური შედეგებისთვის</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse3}>
              <span className={styles.listTitle}>2D თარგების შექმნა და დამუშავება</span> 
              <img alt='#' src={arrowDown3 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown3 ? 'block' : 'none',
              }}>
                <li>2D თარგების შექმნა და იმპორტირება სხვადსხვა მეთოდის გამოყენებით</li>
                <li>3D კალმის გამოყენებით თარგის მიღების მეთოდი </li>
                <li>სამოსის ელემენტების სამგანზომილებიან მანეკენზე სიმულაცია</li>
                <li>სამოსის ნაწილების შეერთება და მოდიფიცირება</li>
              </ul>
              
            </div>
            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse4}>
              <span className={styles.listTitle}>ქვედაკაბის დამუშავება</span> 
              <img alt='#' src={arrowDown4 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown4 ? 'block' : 'none',
              }}>
                <li>ქვედაკაბის კონსტრუქციული ნახაზის აგება</li>
                <li>კერვის ფუქნციის გამოყენებით ქვედაკაბის დეტალების შეერთება </li>
                <li>სიმულაცია </li>
                <li>ქსოვილის შერჩევა/პრინტირება</li>
                <li>მოდელირება</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse5}>
              <span className={styles.listTitle}>კაბის დამუშავება</span> 
              <img alt='#' src={arrowDown5 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown5 ? 'block' : 'none',
              }}>
                <li>კაბის კონსტრუქციული ნახაზის აგება</li>
                <li>კერვის ფუქნციის გამოყენებით კაბის დეტალების შეერთება</li>
                <li>სიმულაცია </li>
                <li>ქსოვილის შერჩევა/პრინტირება</li>
                <li>მოდელირება</li>
              </ul>
              
            </div>

              
            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse6}>
              <span className={styles.listTitle}>საბაზისო ნახაზის მიხედვით სხვადსხვა ტიპის სამოსის შექმნა</span> 
              <img alt='#' src={arrowDown6 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown6 ? 'block' : 'none',
              }}>
                <li>დეტალური სამოსის ელემენტების (ჯიბეები, საყელოები, ღილები) დამატება</li>
                <li>ტექნიკურ ნახაზებში სტანდარტული სიმბოლოების აღნიშვნა</li>
                <li>თარგის გრადაცია </li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse7}>
              <span className={styles.listTitle}>სწავლის შედეგები:	მამაკაცის სამოსის დამუშავება</span> 
              <img alt='#' src={arrowDown7 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown7 ? 'block' : 'none',
              }}>
                <li>მამაკაცის საბაზისო სამოსის მოდელირება</li>
                <li>დეტალური სამოსის ელემენტების (ჯიბეები, საყელოები, ღილები) დამატება</li>
                <li>ქსოვილის შერჩევა/პრინტირება</li>
                <li>სიმულაცია</li>
              </ul>
              
            </div>

            <div>
              <div className={styles.syllabusContainerInner} onClick={collapse8}>
              <span className={styles.listTitle}>ბავშვის სამოსის დამუშავება</span> 
              <img alt='#' src={arrowDown8 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown8 ? 'block' : 'none',
              }}>
                <li>ბავშვის საბაზისო სამოსის მოდელირება</li>
                <li>დეტალური სამოსის ელემენტების (ჯიბეები, საყელოები, ღილები) დამატება</li>
                <li>ქსოვილის შერჩევა/პრინტირება</li>
                <li>სიმულაცია</li>
              </ul>
              
            </div>

                <div>
              <div className={styles.syllabusContainerInner} onClick={collapse9}>
              <span className={styles.listTitle}>სწავლის შედეგები:	სამგანზომილებიანი მოდელირება</span> 
              <img alt='#' src={arrowDown9 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown9 ? 'block' : 'none',
              }}>
                <li>2D თარგების 3D სივრცეში გადატანას და ვირტუალურ მანეკენზე მორგება.</li>
                <li>სწორად განთავსება დეტალების (ნაკერები, ღილები, ელვა შესაკრავები)  3D მოდელზე.</li>
                <li>სხვადასხვა სირთულის ტანსაცმლის ელემენტების (პერანგი, შარვალი, ქურთუკი, კაბა) მოდელირება.</li>
              </ul>
              
            </div>

              <div>
              <div className={styles.syllabusContainerInner} onClick={collapse10}>
              <span className={styles.listTitle}>რენდერინგი და პრეზენტაციის მომზადება</span> 
              <img alt='#' src={arrowDown10 ? up : down} />
              </div>
              <ul style={{
                display: arrowDown10 ? 'block' : 'none',
              }}>
                <li>მაღალი ხარისხის სურათების და ვიზუალიზაციების შექმნა.</li>
                <li>განათების და რენდერის პარამეტრების ოპტიმიზაცია.</li>
                <li>სხვადასხვა პერსპექტივიდან გამოსახულებების შექმნა.</li>
                <li>პრეზენტაციისთვის ანიმაციების მომზადება.</li>
              </ul>
              
            </div>

            <button
            onClick={handleDownloadSyllabus}
             className={styles.sylBTN}>სილაბუსი <img src={rightArrow}  alt='#' /><img className={styles.displayNone} src={rightArrow}  alt='#' /></button>
          </div>

          
        </div>



      </div>






{/* --------------------------------- */}


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

export default ThreeDDesign;