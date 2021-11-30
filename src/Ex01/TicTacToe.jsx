import { render } from '@testing-library/react';
import React from 'react';
import "./TicTacToe.css";

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square"
//                     onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }
// 함수컴포넌트로 변경함. 더이상 클래스의 특성을 유지할 필요가 없기 때문에.

function Square(e) {
    return (
        <button className="square" onClick={e.onClick}>
            {e.value}
        </button>
    );
}

class Board extends React.Component {
    constructor(e) {
        super (e);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    squareTemp (i) {
        return <Square value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}/>;
                // 전통방식으로 이벤트를 다뤄주는 함수 앞에는 handle[function명]으로 작성한다.
    }

    render () {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = "승자 : " + winner;
        } else {
            status = "다음 플레이어 : " + (this.state.xIsNext ? "X" : "O");
        }
        return (
            <>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.squareTemp(0)}
                    {this.squareTemp(1)}
                    {this.squareTemp(2)}
                </div>
                <div className="board-row">
                    {this.squareTemp(3)}
                    {this.squareTemp(4)}
                    {this.squareTemp(5)}
                </div>
                <div className="board-row">
                    {this.squareTemp(6)}
                    {this.squareTemp(7)}
                    {this.squareTemp(8)}
                </div>
            </>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default <Game />;