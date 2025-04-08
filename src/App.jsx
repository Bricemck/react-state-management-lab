// src/App.jsx
//Brings in the useState hook from React to manage dynamic state of team members, money, etc.
import { useState } from 'react';

//Defines main functional component.  Everything inside will be what the app displays and handles.

const App = () => {

  // Holds the list of characters the player adds to their squad. Starts empty.
const [team, setTeam] = useState([]);

// I hope this is self explanatory....  It's money.  
const [money, setMoney] = useState(100);

//Checks to see if player has enough money to buy fighter.
//If yes, add the fighter to team. 
//Subtract from money total.
//removes the fighter from zombieFighters so they can't be picked again.
const handleAddToTeam = (fighter) => {
  if (money >= fighter.price) {
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    // .filter method creates a new array that contains only fighters passed inside of it.
    //used f for each zombie fighter in the zombieFighters array.
    //f.id !== fighter.id means 'only keep fighters whose id does NOT match the one we added.
    //'Go through the zombie fighters list, and make a new list that 
    //leaves out the one I just added to the team'
    setZombieFighters(zombieFighters.filter(f => f.id !== fighter.id));
    //Alert if money is too low.
  } else {
    alert("not enough money!")
  }
}

//Similar to Add, but remove.  I'm so tired...
const handleRemoveFromTeam = (fighter) => {
  setTeam(team.filter(f => f.id !== fighter.id));
  setMoney(money + fighter.price);
  setZombieFighters([...zombieFighters, fighter]);
};

//Starting roster of available fighters.
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

//Return the html that will display the app on the page.
  return (
    <>
    {/* Title */}
    <h1>Zombie Butt Kicking Squad</h1>
    {/* Conditional render of the team display.  
    If the team has nothing it displays text prompting us to pick. */}
    {team.length === 0 ? (
      <p>Pick some team members</p>
    ) : (
      <ul>
        {/* Shows each fighter's info. */}
        {team.map((member, index) => (
          <li key={index}>
            {member.name}: 
            {/* broken images. */}
            {/* {member.img} */}
            ${member.price}, 
            Str: {member.strength}, 
            Agl: {member.agility}, 
            <button onClick={() => handleRemoveFromTeam(member)}>Remove</button>
          </li>
        ))}
      </ul>
    )}

    {/* Display current money value */}
    {/* React and the add & remove fighter logic allows thr value to be updated in real time */}
    <h3>Money: ${money}</h3>

    {/* Loops through available fighters, displays information. 
    Add button that triggers above handleAddToTeam logic. */}
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

