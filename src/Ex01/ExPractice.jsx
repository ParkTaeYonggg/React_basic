import React from "react";

function ProtoT (e) {
    return (
        <button className="protoBtn" onClick={e.onClick}>
            {e.value}
        </button>
    );
}
class ChkSlice extends React.Component {
    constructor(i) {
        super(i);
        this.state = { 
            squares : Array(9).fill(null),
            nextTurn: false,
        };
    }
handleAlertFn(e) {
   let temp = this.state.squares.slice();
   temp[e] = this.state.nextTurn ? "X" : "O";
   this.setState({
       squares: temp,
       nextTurn: !this.state.nextTurn,
   });
}
passAttr (e) {
    return (
        <ProtoT value={this.state.squares[e]}
                onClick={() => this.handleAlertFn(e)}/>
    );
}
    render(){

        return (
            <div>
                <h1>{this.state.squares}</h1>
                <button onClick={() => this.alertFn()}>버튼</button>
                <hr></hr>
                {this.passAttr(0)}
                {this.passAttr(1)}
                {this.passAttr(2)}
                <br></br>
                {this.passAttr(3)}
                {this.passAttr(4)}
                {this.passAttr(5)}
                <br></br>
                {this.passAttr(6)}
                {this.passAttr(7)}
                {this.passAttr(8)}
            </div>
        );
    }
}
class Main extends React.Component {
    render() {
        const ele = React.createElement(
            "h2",
            {classNam: "createdElement"},
            "A created element!!!!"
        );
        return (
            <>
                <ChkSlice />
                {ele}
            </>
        );
    }
}
export default <Main />;