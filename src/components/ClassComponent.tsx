import * as React from "react";
import { TypeA } from "../App";
interface LifeCycleProps {
  a: TypeA;
}

interface LifeCycleState {
  text: string;
  count: number;
}

class LifeCycleDemo extends React.Component<LifeCycleProps, LifeCycleState> {
  constructor(props: LifeCycleProps) {
    super(props);
    this.state = {
      text: "",
      count: 0,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps(
    nextProps: LifeCycleProps,
    prevState: LifeCycleState
  ) {
    if (nextProps.a.text !== prevState.text) {
      return { text: nextProps.a.text };
    }
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(
    nextProps: LifeCycleProps,
    nextState: LifeCycleState
  ): boolean {
    return nextState.count % 2 === 0;
  }

  getSnapshotBeforeUpdate(
    prevProps: LifeCycleProps,
    prevState: LifeCycleState
  ): null {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(
    prevProps: LifeCycleProps,
    prevState: LifeCycleState,
    snapshot: null
  ): void {
    if (prevState.count !== this.state.count) {
      console.log(
        `count change from ${this.state.count} to ${prevState.count} `
      );
    }
  }

  componentWillUnmount(): void {
    console.log("componentWillUnmount");
  }

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render(): React.ReactNode {
    console.log("render");
    return (
      <div
        style={{ padding: "20px", border: "1px solid gray", marginTop: "10px" }}
      >
        <input
          type="text"
          placeholder="Введите текст"
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <div>Вы ввели: {this.state.text}</div>

        <button onClick={this.incrementCount}>Увеличить</button>
        <div>Счётчик: {this.state.count}</div>
      </div>
    );
  }
}

export default LifeCycleDemo;
