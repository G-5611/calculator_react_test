import React from "react";

interface Props {
  onClick_function: any; 
  title: string;
}

interface State {}

export class ButtonOp extends React.Component<Props, State> {
  constructor(props: Props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <button onClick={this.props.onClick_function}>{this.props.title}</button>
    );
  }
}