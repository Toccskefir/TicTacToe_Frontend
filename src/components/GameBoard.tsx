import axios from "axios";
import {useContext} from "react";
import {SessionContext} from "../contexts/SessionContext";

interface GameBoardProps {
    onSelectSquare: (rowIndex: number, columnIndex: number) => void;
    activePlayer: string;
    gameBoard: string[][];
    winner?: string;
}

function GameBoard(props: GameBoardProps) {

    const {sessionId} = useContext(SessionContext)

    return (
        <ol id="game-board">
            {props.gameBoard.map((row, rowIndex) => <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button
                            onClick={() => {props.onSelectSquare(rowIndex, columnIndex); axios.post('http://192.168.0.144:3000/game/' + sessionId + '/play',{ x: rowIndex, y: columnIndex}).then((res)=>console.log(res.data)).catch(() =>console.log())}}
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