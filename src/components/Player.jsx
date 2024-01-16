import { useState } from 'react';

export default function({name,symbol,isActive,onChangeName}){

    const [isEditing,setIsEditing] = useState(false);
    const [player,setPlayerName] = useState(name);

    function handleClick(){
        setIsEditing((editing)=>!editing);

        if(isEditing)
        {
            onChangeName(symbol,player);
        }
    }

    function handleNameChange(event){
        setPlayerName(event.target.value);
    }
    let playerName = <span className="player-name">{player}</span>;
    let btnCaption = 'Edit';
    if(isEditing)
    {
        playerName = <input type="text" required value={player} onChange={handleNameChange}></input>
        btnCaption = 'Save';
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{btnCaption}</button>
          </li>
    );
}