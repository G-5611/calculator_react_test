import React from "react";

import { ButtonNumberstyle } from "./styles"


interface Props {
  title: string;
  onClick_function: any;
}

interface State { }

export class ButtonNumber extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <ButtonNumberstyle onClick={this.props.onClick_function}>{this.props.title}</ButtonNumberstyle>
    );
  }
}