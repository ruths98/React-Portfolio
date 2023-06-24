import React from 'react';
import Project from './project';

import planner from '../images/planner.png'
import  quiz from '../images/quiz.png'
import pocketPlant from '../images/pocketPlant.png'
import prework from '../images/prework-ss.png'
import  rave from '../images/rave-reviews.png'


// const plannerUrl = 'https://ruths98.github.io/Hourly-Planner/'
// const quizUrl = 'https://ruths98.github.io/Coding-Quiz-Challenge/'
// const pocketPlantUrl = 'https://pocket-plant.herokuapp.com/'
// const preWorkUrl = 'https://ruths98.github.io/Prework-study-guide-final/'
// const raveUrl = 'https://moxufo.github.io/Rave-Reviews/'

export default function Portfolio() {

const website = [//potentially uneccessary, put project info the the returned div.

{
  img: planner,
  title: 'Hourly Planner',
  href: 'https://ruths98.github.io/Hourly-Planner/',
  description: 'Plan your day hour by hour and changes color depending on the time'
},   
{
  img: quiz,
  title: 'Coding Quiz Website',
  href: 'https://ruths98.github.io/Coding-Quiz-Challenge/',
  description: 'Test your coding knowledge'
},
    {
        img: pocketPlant,
        title: 'Pocket Plant',
        href: 'https://pocket-plant.herokuapp.com/',
        description: 'A website for keeping track of plants you like and tips you need.'
    },
    {
      img: prework,
      title: 'Pre-work Study-guide',
      href: 'https://ruths98.github.io/Prework-study-guide-final/',
      description: 'A studyguide site for bootcamp'
    },
    {
      img: rave,
      title: 'Rave Reviews',
      href: 'https://moxufo.github.io/Rave-Reviews/',
      description: `Group Project using API's to create a website for travelers`
    }
]

  return (
    <div>
      {website.map(project => (
        <Project img = {project.img} title = {project.title} href={project.href} description={project.description} />
      ))}
        

    </div>
  );
}
