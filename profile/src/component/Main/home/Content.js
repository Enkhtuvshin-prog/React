import React from 'react'
import '../content.css';
import {FaCoffee, FaEarlybirds, FaFacebook, FaFileWord, FaGithub, FaHandPaper, FaIdBadge, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaTwitter, FaVoicemail, FaWordpressSimple } from "react-icons/fa";

const IconStyle ={
  color: "black",
  // backgroundColor: "black"
}

const Content = () => {
  return (
    <div className='row mt-5'>
        <div className='col'>
          <img className='w-75 rounded-circle' src="./img/me.jpeg" alt=""/>
        </div>
        <div className='col'>
            <h1>Hi, I'm Enkhtuvshin <FaHandPaper style={{color: "#F4D03F"}}/></h1>
            <h3>I'm a Full Stack Developer.</h3>
            <div>
                <ul>
                    <li><FaCoffee style={{color: "#E59866"}}/>  fueled by coffee </li>
                    <li><FaLocationArrow style={{color: "#3498DB"}}/>  based in the Us </li>
                    <li><FaIdBadge style={{color: "#AF601A"}}/>  Web developer at Amazon </li>
                    <li><FaMailBulk style={{color: "#85C1E9"}}/>  enkhtuvshin@gmail.com </li>
                </ul>
            </div>
            <div className='row fs-2'>
               <a  className='col' href="#" target={"_blank"} rel="">
                  <FaFacebook style={IconStyle} />
              </a>
               <a className='col' href="#" target={"_blank"} rel="">
                  <FaInstagram style={IconStyle}/>
              </a>
               <a className='col' href="#" target={"_blank"} rel="">
                 <FaGithub style={IconStyle}/>
              </a>
               <a className='col' href="#" target={"_blank"} rel="">
                  <FaLinkedin style={IconStyle}/>
              </a>
               <a className='col' href="#" target={"_blank"} rel="">
                 <FaTwitter style={IconStyle}/>
              </a>
            </div>

        </div>


    </div>
  )
}

export default Content;