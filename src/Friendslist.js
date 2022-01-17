import React from 'react';

import "./Friendslist.css";

const Friendslist = (props) => {

    const[state, setState] = React.useState([
        {
          id:1,  
          name: "Oscar",
          img:
            "https://fairfield.pl/wp-content/uploads/2020/09/DSC_0366-scaled-e1600929070291.jpg",
          message: "Whats up 💌",
        },
        {
          id:2,  
          name: "Dad",
          img:
            "data:image/jpeg;base64,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",
          message: "Hows it going!",
        },
        {
          id:3,
          name: "Cristina",
          img: 
            "https://www.instyle.es/medio/2020/06/27/cristina-pedroche-tarta-queso_4aeeb946_812x456.jpg",
          message: "Tot bé?",
        },
        {
          id:4,
          name: "Lotti",
          img: 
            "https://www.researchgate.net/profile/Marc_Hye-Knudsen/publication/337651327/figure/fig3/AS:830913936121856@1575116728100/Oh-hi-Mark-The-emotion-in-Tommy-Wiseaus-delivery-of-this-line-is-so-incongruous_Q640.jpg",
          message: "świrki",
          }
      ]);

      

const openChat = (f) => {
    props.openChat(f);
}      

    return (
        <div className='friend'>
            {state.map((f) => (
                <div className='friendlist' key={f.id} onClick={()=>openChat(f)}>
                <div className='friendlistimg'>
                <img src={f.img} />
                <span className='s'></span>
                </div>
                <div className='friendlistname'> {f.name} </div>
                </div>
            ))}
            
        </div>
    )
}

export default Friendslist
