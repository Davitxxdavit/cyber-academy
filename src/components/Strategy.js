import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../components/AboutUs.module.css';

const Strategy = () => {

    const [miniSidebar, setMiniSidebar] = useState(false);
                  const [micVisible, setMicVisible] = useState(true);
                  const [sidebarOpen, setSidebarOpen] = useState(false);
                  const [isClicked, setIsClicked] = useState(false);
                
                  const clickAboutUs = () => {
                    return setIsClicked(!isClicked);
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
  return (
    
    <div>
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
          <button className={styles.glowOnHover} type="button">მართვა</button>
        </Link>
        <Link to="/gallery">
          <button className={styles.glowOnHover} type="button">კარიერა</button>
        </Link>
        <Link to="/mentors">
          <button className={styles.glowOnHover} type="button">გუნდი</button>
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

       <div
        className="sidebar"
        style={{
          width: miniSidebar ? "430px" : "90px",
          transition: "width 0.5s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="mic"
          style={{
            display: micVisible ? "block" : "none",
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <div className="mic-shadow"></div>
        </div>

        <div className="inner-side-menu">
        <div 
            className="header-container5"
            id="header"
            style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
          >
            ჩვენ შესახებ
          </div>
          <div className="fix-it-container5">
            <div 
              className="texter1-container5"
              id="number"
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              +995 577 427 000
            </div>
          </div>
          <div className="fix-it-container5">
            <div 
              className="texter2-container5"
              id="addres"
              style={{ marginLeft: miniSidebar ? '20px' : '190px' }}
            >
              <br/>
              ბათუმი, აღმაშენებლის 2 <br/>
              <br/>
              <br/>
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className="fix-it-container5">
            <div className="texter2-container5" style={{ marginLeft: miniSidebar ? "20px" : "190px" }}>
              ბათუმი, აღმაშენებლის 2 <br />
              INFO@ACADEMY.EDU.GE
            </div>
          </div>

          <div className="boxes-in-container5">
            <div className="box1-container5">
              <div className="header-box-container5" style={{ marginLeft: miniSidebar ? "-30px" : "190px" }}>
                MAP
              </div>

              <div className="maper">
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.29081238841826!2d41.612592077053016!3d41.63182261629536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406787a6b8a7e515%3A0xf66f06747969ee30!2sLLC%20Cyber%20Solutions!5e0!3m2!1sru!2sge!4v1706012975837!5m2!1sru!2sge" 
                  width="300" 
                  height="300" 
                  style={{ border: 0, marginLeft: miniSidebar ? '-85px' : '50px' }} 
                  allowFullScreen="" 
                  loading="fast" 
                  referrerPolicy="no-referrer-when-downgrade" 
                  id="maper"
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

        <div className={styles.mainCon}>

        <h1>სტრატეგიული განვითარების გეგმა</h1>
        </div>
    </div>
  )
}

export default Strategy
