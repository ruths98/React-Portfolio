import React, {useState} from 'react'

// const [tab, setTab] = useState(about)
// useEffect( function isClicked(){
// const clicked = 
// if({target}== clicked)
// })

// const isClicked = ()=> {
// if({target})
// }


export default function Header() {
const [color, setColor] = useState('rgb(12, 67, 48)');
const navStyle = {backgroundColor: color}

    return(
     <header className="header">
  <h2>Ruth Stevens</h2>
  <nav  style={navStyle}> 
    <button onClick={()=> setColor('white')}>portfolio</button>
    <button onClick={()=> setColor('white')}>about </button>
    <button onClick={()=> setColor('white')}>contact </button>
    <button onClick={()=> setColor('white')}>resume</button>
  </nav>
  </header>   
    )
}

//copy and paste from codecademy
 // call useState and assign its return values to `color` and `setColor`
//  const [color, setColor] = useState();

//  const divStyle = {backgroundColor: color};

//   return (
//     <div style={divStyle}>
//       <p>The color is {color}</p>
//       <button onClick={()=>setColor('Aquamarine')}>
//         Aquamarine
//       </button>
//       <button onClick={()=>setColor('BlueViolet')}>
//         BlueViolet
//       </button>
//       <button onClick={()=>setColor('Chartreuse')}>
//         Chartreuse
//       </button>
//       <button onClick={()=>setColor('CornflowerBlue')}>
//         CornflowerBlue
//       </button>
//     </div>
//   );
// }

