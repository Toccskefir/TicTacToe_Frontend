import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {SessionContext} from "../contexts/SessionContext";

interface GameBoardProps {
    onSelectSquare: (rowIndex: number, columnIndex: number) => void;
    activePlayer: string;
    gameBoard: string[][];
    setGameBoard: any;
    winner?: string;
}

function GameBoard(props: GameBoardProps) {

    const {sessionId} = useContext(SessionContext)

    const [inMatch, setInMatch] = useState(false)

    function updateGameBoard() {
        axios.get('/game/' + sessionId).then((res) => {console.log(res.data); setInMatch(true); if(typeof res.data === 'object') {
            props.setGameBoard(res.data) } else {setInMatch(false)}
        }).catch((e) =>console.log(e))
    }

    useEffect(() => {
        const interval = setInterval(() => {
            updateGameBoard();

            return () => clearInterval(interval)
        }, 1000);

    }, []);

    return (
        <ol id="game-board">
            {props.gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button
                            onClick={() => {props.onSelectSquare(rowIndex, columnIndex); axios.post('/game/' + sessionId + '/play',{ x: rowIndex, y: columnIndex}).then((res)=>console.log(res.data)).catch(() =>console.log())}}
                            disabled={playerSymbol != '' || !!props.winner}>
                            {playerSymbol}
                        </button>
                    </li>)}
                </ol>
            </li>)}
        </ol>
    );

}

export default GameBoard;