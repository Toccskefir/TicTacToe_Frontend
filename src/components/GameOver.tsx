interface GameOverProps {
    winner ?: string;
    onRestart: () => void;
}

function GameOver(props: GameOverProps) {
    return (
        <div id='game-over'>
            <h2>Game Over!</h2>
            {props.winner && <p>{props.winner} won!</p>}
            {!props.winner && <p>It's a draw</p>}
            <p><button onClick={props.onRestart}>Rematch!</button></p>
        </div>
    );
}

export default GameOver;