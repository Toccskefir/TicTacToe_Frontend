import {SessionContext} from "./SessionContext";
import React, {PropsWithChildren, useState} from "react";

function SessionContextProvider (props: PropsWithChildren){

    const [sessionId, setSessionId] = useState<string>('');
    const [gameTurn, setGameTurn] = useState<string>('');
    const [winner, setWinner] = useState<string>('');

    function changeSessionId (value: string){
        setSessionId(value);
    }

    return (
        <SessionContext.Provider value={{sessionId,changeSessionId,gameTurn,setGameTurn, winner, setWinner}}>
            {props.children}
        </SessionContext.Provider>

    );
}

export default SessionContextProvider