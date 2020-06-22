import React, { useState } from 'react';
import './styles.css';
import Square from './Square';
import  {WinningLogic}  from './Helper';
import RefreshIcon from '@material-ui/icons/Refresh';
import Grid from '@material-ui/core/Grid';




function Game () {


    const[squares, setSquares] = useState(Array(9).fill(null));
    const[isXNext, setisXNext] = useState(true);

    const winninginfo = WinningLogic(squares);
    const winner = winninginfo.winner;
    const winnerLightup = winninginfo.line;

    let status ="";
    
    if(winner) {

        status = "Woohoo!! the winner is " + winner;
    }
        else if(winninginfo.isDraw) {

            status = "It is a Draw :P ";
        }

        else {
            
    
           status = "Next Player Is  " + (isXNext ? 'X' : 'O') ;

        }
    
    const refreshMaze = () => {

        setSquares(Array(9).fill(null));
        setisXNext(true);

    }

    const renderSquare = (i) => {
        

        return(<Square onClick ={ () =>{


             const nextSquare = squares.slice();
             nextSquare[i] = isXNext ? 'X' : 'O';
     
             setisXNext(!isXNext);
             setSquares(nextSquare);
             //console.log(squares);

        } }
        
        
            value = {squares[i]}
            highlightWinner = {winnerLightup && winnerLightup.includes(i)}
            enable = {winner ? false : true } 
            
        
        />);
        
         
       
    }


        return (
            
            <div>
          
            <h1>Tic-Tac-Toe</h1>
            <Grid xs={12} md={3} className="center-grid">
            <div className="status">{ status }</div>
            <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            </div>
            <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            </div>
            <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
            </div>
            <RefreshIcon onClick ={refreshMaze} className="highlight" /> 
            </Grid>
            <h5>Copyright © 2020</h5>
            </div>
            
        

        )

}


export default Game;