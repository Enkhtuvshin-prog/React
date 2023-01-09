// import { Button } from 'bootstrap';
import './about.css'
import Button from 'react-bootstrap/Button';
import React from 'react';
import { AiFillPlusCircle, AiOutlineMinusCircle, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { CgArrowsExpandRight } from "react-icons/cg";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiFigma, SiJavascript } from "react-icons/si";



const Page = () => {
    return (
        <div className=''>
            <div className='about'>
                <div className='Buttons p-2'>
                    <span className="badge text-bg-danger"><AiFillPlusCircle /></span>
                    <span className="badge text-bg-warning"><AiOutlineMinusCircle /></span>
                    <span className="badge text-bg-success"> <CgArrowsExpandRight /></span>
                </div>
                <div className='text'>
                    <p>
                        Enkhtuvshin$ cat about <br />

                        aboutjohn (main) $ Hello! I'm Enkhtuvshin.  I am studing Pinecone acaademy, I enjoy long walks on the mountain, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!
                    </p>

                </div>
            </div>
            <div className=' about'>
                <div className='Buttons p-2'>
                    <span className="badge text-bg-danger"><AiFillPlusCircle /></span>
                    <span className="badge text-bg-warning"><AiOutlineMinusCircle /></span>
                    <span className="badge text-bg-success"> <CgArrowsExpandRight /></span>
                </div>
                <div className='text'>
                    <p style={{ color: "green" }}>
                        Enkhtuvshin$  cd skills/tools
                        skills/tools (main) $ ls
                        Proficient With
                    </p>
                    <ul>
                        <li> <AiFillHtml5/> HTML</li>
                        <li><FaCss3Alt/> CSS</li>
                        <li> <BsFillBootstrapFill/> BOOTSTRAP</li>
                        <li><SiJavascript/> JAVASCRIPT</li>
                        <li> <FaReact/> React</li>
                        <li><AiFillGithub/> GitHub</li>
                        <li><SiFigma/> Figma</li>
                    </ul>

                </div>
            </div>

            <div className=' about'>
                <div className='Buttons p-2'>
                    <span className="badge text-bg-danger"><AiFillPlusCircle /></span>
                    <span className="badge text-bg-warning"><AiOutlineMinusCircle /></span>
                    <span className="badge text-bg-success"> <CgArrowsExpandRight /></span>
                </div>
                <div className='text'>
                    <p style={{ color: "green" }}>
                        Enkhtuvshin$ $ cd hobbies/interests

                        hobbies/interests (main) $ ls
                    </p>
                    <ul>
                        <li>📖 reading</li>
                        <li>🎭 theater</li>
                        <li>🎥 movies</li>
                        <li>🌶 cooking</li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Page