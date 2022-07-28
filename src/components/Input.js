import React, {Fragment} from 'react';

const Input = ({ typein, value__input, iconTel, iconLock, disabled, inputName, nameDiv, nameLab, nameClass, placeh, nameType, fit__text}) => {

    return (
    <Fragment>
        <div className={nameDiv}>
            <p className="input__name">{inputName}</p>               
            <label className={nameLab}>Label</label>
            { typein === 'true'
            ? <textarea cols="30" rows="10" className='input__global input__multiline'  placeholder={placeh} />        
            : <input disabled={disabled} className={nameClass} type={nameType} value={value__input} placeholder={placeh}></input>
            }
            <span id={iconTel} class="material-symbols-rounded">call</span>
            <span id={iconLock} class="material-symbols-rounded">lock</span>
            <h5 className="helper">{fit__text}</h5>

        </div>
    </Fragment>

    );
}
 
export default Input;

