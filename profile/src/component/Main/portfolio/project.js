import React from 'react';
import './project.css'
import Button from 'react-bootstrap/esm/Button'
import { RiSafariFill, RiArrowDownCircleFill } from "react-icons/ri";

const data = [
    { imageUrl: "./img/mock1.png", title: 'Project 1' },
    { imageUrl: "./img/mock2.png", title: 'Project 2' },
    { imageUrl: "./img/mock3.png", title: 'Project 3' },
    { imageUrl: "./img/mock4.png", title: 'Project 4' },
    { imageUrl: "./img/mock5.png", title: 'Project 5' },
];
const ProjectData = (props) => {
    return (
        <>
            <div className='col-6'>
                <img className='projectImg' src={props.img} alt="" />
                <h2>{props.title}</h2>
                <div>
                    <Button variant="outline-dark" className='m-2'> <RiSafariFill /> Live Demo</Button><br />
                    <Button variant="outline-dark" > <RiArrowDownCircleFill /> Source Code </Button>
                </div>
            </div>

        </>
    )
}

const Project = () => {

    return (
        <div className='row text-center m-0'>

            {
              data.map((project, index)=> <ProjectData key={index} img = {project.imageUrl} title={project.title} />)
            }

        </div>
    )
}

export default Project