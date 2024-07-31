import React from 'react';
import './skills.css';
import SkillsCard from '../../components/skillsCard';

const Skills = () => {
  return (
    <main className="flex justify-center items-center ">
      <section className='container mx-auto text-gray-300 p-4'>
        <h2 className="text-xl lg:text-3xl relative font-semibold text-center my-6">
        <span className="absolute inset-x-0 bottom-0 h-1 bg-gray-700 rounded-full mx-auto w-1/4 transform translate-y-2"></span>
          <span className="text-custom-green font-semibold mr-2 ">&#8212;</span>
          My {" "}
          <span className="text-custom-green font-bold"> Expertise</span>
        </h2>
        <SkillsCard />
      </section>
    </main>
  );
}

export default Skills;
