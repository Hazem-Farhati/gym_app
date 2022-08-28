import logo from './logo.svg';
import './App.css';
import Navbar from './componets/navbar';
import Home from './pages/Home';
import ExerciceListe from './componets/ExerciceListe';
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Footer from './componets/Footer';
import ExerciceListeDetails from './componets/ExerciceListeDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import PostListe from './redux/post/PostListe';
import About from '../src/pages/About'
import PageNotFound from './componets/PageNotFound';

function App() {
  const [exercice, setExrecice] = useState([{
    id : 1,
    poster :"/images/exercice/abdo.jpg" ,
    title :"Abdos",
    video: ` https://www.youtube.com/embed/wX8eSe1SZks?autoplay=1&mute=1 `,
    description: `The abdomen is the part of the body between the thorax (chest) and pelvis, in humans and in other vertebrates. The abdomen is the front part of the abdominal segment of the torso. The area occupied by the abdomen is called the abdominal cavity. In arthropods it is the posterior tagma of the body; it follows the thorax or cephalothorax.`,
    nbr : "10",
    time: "20sec"
  },
  {
    id : 2,
    poster :"/images/exercice/avant-bras.jpg" ,
    title :"The forearm",
    video: ` https://www.youtube.com/embed/0XS0j1Gtobw?autoplay=1&mute=1 `,
    description: `
    The forearm is the region of the upper limb between the elbow and the wrist. The term “forearm” is used in anatomy to distinguish this area from the arm. It is divided into 2 fascial compartments (anterior and posterior). `,
    nbr : "20",
    time: "60sec"
  },
  {
    id : 3,
    poster :"/images/exercice/biceps.jpg" ,
    title :"biceps",
    video: ` https://www.youtube.com/embed/6g57DJntRXk?autoplay=1&mute=1 `,
    description: `The biceps or biceps brachii (Latin: musculus biceps brachii, "two-headed muscle of the arm") is a large muscle that lies on the front of the upper arm between the shoulder and the elbow. Both heads of the muscle arise on the scapula and join to form a single muscle belly which is attached to the upper forearm. While the biceps crosses both the shoulder and elbow joints`,
    nbr : "15",
    time: "50sec"
  },
  {
    id : 4,
    poster :"/images/exercice/bras.jpg" ,
    title :"Arms",
    video: ` https://www.youtube.com/embed/CgAOirqrrtM?autoplay=1&mute=1 `,
    description: `Your arms are the two long parts of your body that are attached to your shoulders and that have your hands at the end.
    `,
    nbr : "30",
    time: "50sec"
  },
  {
    id : 5,
    poster :"/images/exercice/dorsso.jpg" ,
    title :"Back",
    video: ` https://www.youtube.com/embed/w4vU3tzVM70?autoplay=1&mute=1 `,
    description: `Back exercises are any type of exercises performed on muscles within the back or on muscles that affect the back. The back of humans consists of the large posterior area of the body (opposite of the chest),`,
    nbr : "20",
    time: "30sec"
  },
  {
    id : 6,
    poster :"/images/exercice/gainage.jpg" ,
    title :"Gainage ",
    video: ` https://www.youtube.com/embed/kFnH59CIDx8?autoplay=1&mute=1 `,
    description: `Sheathing is a very common exercise in bodybuilding. Doing the plank may seem boring and inefficient, yet the effects on the muscles are numerous. Here's what you need to know about sheathing.`,
    nbr : "30",
    time: "60sec"
  },
  {
    id : 7,
    poster :"/images/exercice/leg.jpg" ,
    title :"Leg",
    video: ` https://www.youtube.com/embed/TC8ui7WkOao?autoplay=1&mute=1 `,
    description: `Strong legs do more than look good. Even the simplest daily movements like walking require leg strength. This means that incorporating leg workouts into your routine is integral to your health.`,
    nbr : "30",
    time: "60sec"
  },
  {
    id : 8,
    poster :"/images/exercice/popmpes.jpg" ,
    title :"Push ups",
    video: ` https://www.youtube.com/embed/AhdtowFDKT0?autoplay=1&mute=1 `,
    description: `a conditioning exercise performed in a prone position by raising and lowering the body with the straightening and bending of the arms while keeping the back straight and supporting the body on the hands and toes`,
    nbr : "10",
    time: "30sec"
  },
  {
    id : 9,
    poster :"/images/exercice/triceps.jpg" ,
    title :"The triceps",
    video: ` https://www.youtube.com/embed/ZrAiIvpZvhM?autoplay=1&mute=1 `,
    description: `The triceps, or triceps brachii (Latin for "three-headed muscle of the arm"), is a large muscle on the back of the upper limb of many vertebrates. It consists of 3 parts: the medial, lateral, and long head.[1] It is the muscle principally responsible for extension of the elbow joint (straightening of the arm).`,
    nbr : "20",
    time: "55sec"
  },
  {
    id : 10,
    poster :"/images/exercice/chest.jpg" ,
    title :"Chest",
    video: ` https://www.youtube.com/embed/ykQlXirszbo?autoplay=1&mute=1 `,
    description: `Most chest days should include pressing movements, like the bench press and overhead press, and their variations. You can also do more pec exercises, pulling exercises, and more dedicated tricep work. Your exact workout will be a function of your training frequency, weekly split, and goals. `,
    nbr : "25",
    time: "30sec"
  },
  
])
const [text, setText] = useState('')
  return (
    <div className="App">
      
    <Navbar setText={setText}/>
    
    <div className='main-cont'>
    <Routes>
      <Route path="/"  element={<Home/>}/>
      <Route path="/exercices" element={<ExerciceListe exercice={exercice} setExrecice={setExrecice} text={text}/>}> </Route>
      <Route path='/ExerciceListeDetails/:id' element={<ExerciceListeDetails exercice={exercice} />}></Route>
      <Route path="/login"  element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/posts"  element={<PostListe text={text}/>}/>
      <Route path="/about"  element={<About/>}/>
      <Route path="*" element={<PageNotFound/>} />

      


    </Routes>
    </div>
    <Footer/>
  </div>
  );
}

export default App;
