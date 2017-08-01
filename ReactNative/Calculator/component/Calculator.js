import React, { Component } from 'react';
import CalculatorImg from 'calculator.png';
import logo from './logo.svg';
import './Calculator.css';

class CalculatorApp extends Component{
   


constructor(props){
    super(props)

    this.state={
        calcString:"",
        displayString:""
    }
}
setDisplay(value){
let newDisplay= this.state.displayString  + value);
if (newDisplay <13)
  this.setState({displayString: newDisplay})

}
clear(){
    this.setState({displayString:"",calcString:"'"})
}


operator(op){
    let newCalcString= this.state.calcString + " " +this.state.displayString + " " +op + " ";
    this.setState({calcString:newCalcString,displayString:""});

}
evaluate(expr){
   const divMul = /(-?[0-9.]+)\s*(\/|\\*)\s*(-?[0-9.]+)/;
   const addSub = /(-?[0-9.]+)\s*(\+|-)\s*(-?[0-9.]+)/;

   let match = divMul.exec(expr);
   while(match){
      let x=match[1];
      let op =match[2];
      let y = match[3];
      let result = (match[2]=='*')?x*y:x/y;

       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = divMul.exec(expr);
   }
   match = addSub.exec(expr);
   while(match){
      let x=match[1];
      let op =match[2];
      let y = match[3];
      let result = (match[2]=='+')?x+y:x-y;

       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = addSub.exec(expr);
   }
   console.log("evaluate = " + evaluate);
 return expr;
 

}
calculate(){

  let expr = this.state.calcString + " " + this.state.displayString;
  const parens = /(-?)\(([^()]+)\)/;

   let match = parens.exec(expr);
   while(match){
      let result = evaluate(match[1]);


      if (match[2])
        result  = result.startsWith("-") ? results.substring(1) : "-" + result;

       expr = expr.substring(0, match.index) + result + expr.substring(match.index + match[0].length); 
       match = parens.exec(expr);
   }
 let result = evaluate(expr);
 console.log("result: " + result);
 return result;
}



render(){

return (
      <div id="calculator-container">
        <input id="header-input" onChange={ (e) => { this.updateHeader(e.target.value); }}/>
        <h1 id="header"> {this.state.header} </h1>
        <img className="remove-highlight" src={calculatorImg} alt="calculator" />
        <div id="calculator-mask" className="remove-highlight">

          <div className="output">
            <span className="total"> { this.state.display } </span>
          </div>

          <div className="btn clear" onClick={(e)=>this.clear()}></div>

          <div className="btn zero"   onClick={ () => { this.setDisplay('0'); } }></div>
          <div className="btn one"    onClick={ () => { this.setDisplay('1'); } }></div>
          <div className="btn two"    onClick={ () => { this.setDisplay('2'); } }></div>
          <div className="btn three"  onClick={ () => { this.setDisplay('3'); } }></div>
          <div className="btn four"   onClick={ () => { this.setDisplay('4'); } }></div>
          <div className="btn five"   onClick={ () => { this.setDisplay('5'); } }></div>
          <div className="btn six"    onClick={ () => { this.setDisplay('6'); } }></div>
          <div className="btn seven"  onClick={ () => { this.setDisplay('7'); } }></div>
          <div className="btn eight"  onClick={ () => { this.setDisplay('8'); } }></div>
          <div className="btn nine"   onClick={ () => { this.setDisplay('9'); } }></div>

          <div className="btn equal" onClick={(e)=>this.calculate()}></div>
          <div className="btn multiply" onClick={(e)=>this.operator("*")}></div>
          <div className="btn divide" onClick={(e)=>this.operator("/")}></div>
          <div className="btn subtract" onClick={(e)=>this.operator("-")}></div>
          <div className="btn add" onClick={(e)=>this.operator("/")}></div>
        </div>
      </div>


);


}


}