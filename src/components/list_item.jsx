import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }
  render(){
    return <li>{this.props.title}</li>
  }
}

export default ListItem;
