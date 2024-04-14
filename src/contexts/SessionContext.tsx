import React from "react";

interface SessionProps {
    sessionId: string,
    changeSessionId: (sessionId: string) => (void),
    gameTurn: string,
    setGameTurn: (gameTurn: string) => (void),
    winner: string,
    setWinner: (winner: string) => (void),
}

export const SessionContext = React.createContext<SessionProps>(null as unknown as SessionProps);