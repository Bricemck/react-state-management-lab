// src/App.jsx
import { useState } from 'react';

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const handleAddToTeam = (fighter) => {
  if (money >= fighter.price) {
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
  } else {
    alert("not enough money!")
  }
}
const handleRemoveFromTeam = (fighter) => {
  setTeam(team.filter(member => member.id !== fighter.id));
  setMoney(money + fighter.price);
  setZombieFighters([...zombieFighters, fighter]);
};
const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]
)

  return (
    <>
    <h1>Zombie Butt Kicking Squad</h1>
    {team.length === 0 ? (
      <p>Pick some team members</p>
    ) : (
      <ul>
        {team.map((member, index) => (
          <li key={index}>
            {member.name}: 
            {/* {member.img} */}
            ${member.price}, 
            Str: {member.strength}, 
            Agl: {member.agility}, 
            <button onClick={() => handleRemoveFromTeam(member)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
    <h3>Money: ${money}</h3>

      
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
          <img src={fighter.img} alt={fighter.name} width="100" />
          <h2>{fighter.name}</h2>
          <p>Price: ${fighter.price}</p>
          <p>Strength: {fighter.strength}</p>
          <p>Agility: {fighter.agility}</p>
          <button onClick={() => handleAddToTeam(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      </>
  );
};

export default App;

