import React from "react";

import { ButtonNumber } from "./ButtonNumber";
import { ButtonOp } from "./ButtonOp";

interface Props {}

interface State {
  visor_text: string;
  first_number: number;
  second_number: number;
  operator: string;
}

export class App extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)

    this.state = {
      visor_text: "0",
      first_number: 0,
      second_number: 0,
      operator: ""
    }
  }

  display = (value: string) => {
    const fullValor = this.state.visor_text + value;
    const initialValue = value;
    this.setState({
      visor_text: this.state.visor_text === "0" ? initialValue : fullValor
    });
  }

  prepare_OP = (operator: string) => {
    this.setState({
      first_number: parseInt( this.state.visor_text,10),
      operator: operator,
      visor_text: "0"
    });
  }

  run_OP = () => {
    let result = 0;
    const second_number = parseInt(this.state.visor_text,10);
    if (this.state.operator === "+"){
      result = this.state.first_number + second_number
    }
    if (this.state.operator === "-"){
      result = this.state.first_number - second_number
    }
    if (this.state.operator === "*"){
      result = this.state.first_number * second_number
    }
    if (this.state.operator === "/"){
      result = this.state.first_number / second_number
    }

    this.setState({
      second_number: second_number,
      visor_text: result.toString()
    })
  }

  run_OP_alt = () => {
    const second_number = parseInt(this.state.visor_text, 10);
    const results: any = {
      "+": this.state.first_number + second_number,
      "-": this.state.first_number - second_number,
      "*": this.state.first_number * second_number,
      "/": this.state.first_number / second_number,
      "default": "0"
    };

    this.setState({
      second_number: second_number,
      visor_text: (results[this.state.operator] || results.default).toString()
    });
  }

  clear_OP = () => {
    this.setState({
      visor_text: "0",
      first_number: 0,
      second_number: 0,
      operator: ""
    })
  }

  renderButtonNumber = () => {
    let allButtons: any[] = [];

    for (let i = 0; i < 10; i++){
      allButtons.push(
        <ButtonNumber
          title={i.toString()}
          onClick_function={() => this.display(i.toString())}
        />
      );
    }

    return(
      allButtons
    );
  }

  renderOpButton = () => {
    const ops = [
      "+", "-", "*", "/"
    ];

    return ops.map((op: string, index: number) => {
      return(
        <ButtonOp title={op} onClick_function={() => this.prepare_OP(op)}/>
      );
    });
  }

  render() {
    return (
      <div style={{"width": "200px","height": "400px","border": "3px solid #000 "}}>
        <div style={{"width": "193px","height": "100px","border": "2px solid #9b9b9b", "position": "relative", "top": "4px", "left": "2px"}}>
          {this.state.visor_text}
        </div>
        {this.renderButtonNumber()}
        {this.renderOpButton()}
        <ButtonOp title={"="} onClick_function={this.run_OP}/>
        <ButtonOp title={"C"} onClick_function={this.clear_OP}/>
      </div>
    );
  }
}
