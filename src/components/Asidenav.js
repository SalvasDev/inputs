  import React from 'react';
  

  const Asidenav = () => {
    return (
        <div className="container__gral">   
            <aside>
                <div className="aside__container">              
                    <h1 className="logo">Dev<span>Challenges.io</span></h1>
                    <div className="nav"> 
                        <button type='button' className="link-button">Typography</button>
                        <button type='button' className="link-button">Grid</button>
                        <button type='button' className="link-button">Buttons</button>
                        <button type='button' className="link-button nav__active">Inputs</button>
                    </div>

                </div>
            </aside>
        </div>

      );
  }

  export default Asidenav;
  
 