import React from 'react';

class Button extends React.Component {
  constructor(props){
    super(props);

    this.toggleIsPink = this.toggleIsPink.bind(this);

    this.state = {
      isPink: false
    };
  }
  toggleIsPink(){
    this.setState( {isPink: !this.state.isPink} );
  }
  render(){
    let btnClass = "";

    this.state.isPink ? btnClass="hotpink" : btnClass="green";

    return <button onClick={this.toggleIsPink} className={`btn ${btnClass}`}>Click Me</button>
  }
}

export default Button;
