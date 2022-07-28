import React, { Fragment } from 'react';
import Asidenav from './components/Asidenav';
import Input from './components/Input';
import Footer from './components/Footer'

function App() {
  return (
    
     <Fragment>

        <div className="container__gral">
          <Asidenav /> 
          <div className="container">
            <header>
              <h1 className="title">Inputs</h1>
            </header>
            
            <div className="row">
              <div className="column">
                <Input  nameType='text' inputName= '<Input />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global' placeh='Placeholder' />
              </div>
            </div>

            <div className="row">
              <div className="column">
                <Input  nameType='text' inputName= '<Input error />' nameDiv='inputWithLabelError' nameLab='labError' nameClass='input__global-error' placeh='Placeholder'/>
              </div>                
           </div>

            <div className="row">
              <div className="column">
                <Input disabled='disabled'  nameType='text' inputName='<Input disabled />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__disabled' placeh='Placeholder' />
              </div>        
            </div>

            <div className="row">
              <div className="column">
                <Input nameType='text' fit__text='Some interesting text' inputName= '<Input helperText=”Some interesting text” />' nameDiv='inputWithLabelError' nameLab='lab' nameClass='input__global-error-off' placeh='Placeholder'/>
              </div>                
            </div>
            
              <div className="row__icons">
              <div className="column">
                <Input iconTel='tel' nameType='text' inputName= '<Input startIcon />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__icon-tel' placeh='Placeholder' />
              </div>

              <div className="column">
                <Input iconLock='lock' nameType='text' inputName= '<Input endIcon />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global' placeh='Placeholder' />
              </div>
            </div>        

              <div className="row">
                <div className="column">
                  <Input value__input='Text' nameType='text' inputName= '<Input value=”text” />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global' placeh='Placeholder' />
                </div>   
              </div>

              <div className="row">
              <div className="column">
                <Input  nameType='text' inputName= '<Input size=”sm” />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global input__small' placeh='Placeholder' />
              </div>

                <div className="column">
                <Input  nameType='text' inputName= '<Input size=”md” />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global input__med' placeh='Placeholder' />
              </div>
            </div>

              <div className="row__full">
                <div className="column">
                <Input  nameType='text' inputName= '<Input fullWidth />' nameDiv='inputWithLabel'  nameLab='lab' nameClass='input__global input__full' placeh='Placeholder' value__input='Text' />
              </div>
            </div>

             <div className="row">
              <div className="column">
                <Input inputName= '<Input multiline row=”4” />' typein='true' nameDiv='inputWithLabel' nameLab='lab' nameClass='input__global input__multiline' placeh='Placeholder' />
              </div>
            </div>
            
            <Footer autor='Salvador Sánchez'/> 

          </div>

        </div>       

  
    </Fragment>

  );
}

export default App;


