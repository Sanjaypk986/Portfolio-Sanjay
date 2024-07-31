import React from 'react';
import './skills.css';
import SkillsCard from '../../components/skillsCard';

const Skills = () => {
  return (
    <main className="flex justify-center items-center ">
      <section className='container mx-auto text-gray-300 p-4'>
        <h2 className="text-xl lg:text-3xl font-semibold text-center my-6">
          <span className="text-custom-green font-semibold mr-2 ">&#8212;</span>
          Crafting Solutions with {" "}
          <span className="text-custom-green font-bold">My Expertise</span>
        </h2>
        <SkillsCard />
      </section>
    </main>
  );
}

export default Skills;
