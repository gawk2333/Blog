import VirbrationIMG from './styles/Vibration.png'
import StoryImg from './styles/Story.png'
import PlantImg from  './styles/plant-tracker.png'
import HihiImg from './styles/hihi.png'

export const projects=[
  {
    name:"The-One-Word-Story",
    photo:StoryImg,
    discription:"This is the first weekend project after I study in EDA, we use node.js,HTML and CSS wrote a simple website. Everyone can type a sentence and we bring all the words in a json file to make it tobe a neverending story. I was the person do the frontend HTML CSS.",
    githuburl:"https://github.com/roa-2021/the-one-word-story",
    weburl:"https://theonewordstory.herokuapp.com/",
  },
  {
    name:"The Daily Vibration",
    photo:VirbrationIMG,
    discription:"This project is a news website used external API,Classic HTML and CSS. My job was mainly pass information from the external API to search the key word from recent news",
    githuburl:"https://github.com/roa-2021/The-Daily-Vibration",
    weburl:"https://thedailyvibration.herokuapp.com/",
  },
  {
    name:"Hihi",
    photo:HihiImg,
    discription:"This is a social media website we cloned from twitter.We used full-stack boilerplate including Sass,React/Redux at the frontend, RESTful API and Thunk middleware to connect sqlite database. My job was mainly at the backend:Setting up the database structure and create api routes.",
    githuburl:"https://github.com/roa-2021/twittr",
    weburl:"https://hihi-app.herokuapp.com/",
  },
  {
    name:"Plant-Tracker",
    photo:PlantImg,
    discription:"Plant-tracker is a website for organizing different species of plants in our room, we can do CRUD actions on both plants and species. It used React/Reux Restful api,thunk middleware and sqlite database. My job was at the frontend pages to set up action creators and reducers to do CRUD actions on plants and species.",
    githuburl:"https://github.com/roa-2021/plant-trackr",
    weburl:"https://plant-trackr.herokuapp.com/",
  },
]