import {useState} from "react";

interface PlayerProps {
    playerName: string,
    playerSymbol: string,
    isActive: boolean;
    onNameChange: (playerSymbol: string, newPlayerName: string) => void;
}

function Player(props: PlayerProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(props.playerName);

    function handleEditing() {
        setIsEditing(editing => !editing); //always use like this
        //setEditing(!isEditing)  not like this
        if(isEditing) {
            props.onNameChange(props.playerSymbol, name);
        }
    }

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <li className={props.isActive ? 'active' : undefined}>
            <span className='player'>
                {!isEditing && <span className='player-name'>{name}</span>}
                {isEditing && <input type='text' required defaultValue={props.playerName} onChange={handleNameChange}/>}
                <span className='player-symbol'>{props.playerSymbol}</span>
            </span>
            <button onClick={handleEditing}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}

export default Player;