import React from 'react';
import Experience from '../Experiance/Experience';
import Hero from '../Hero/Hero';
import Knowledge from '../Knowledge/Knowledge';
import Myself from '../Myself/Myself';
import Skill from '../Skill/Skill';

const Resume = () => {
    return (
        <div>
            <Hero></Hero>
            <Myself></Myself>
            <Skill></Skill>
            <Experience></Experience>
            <Knowledge></Knowledge>
        </div>
    );
};

export default Resume;