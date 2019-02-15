import React, { Component } from 'react';
import {connect} from 'react-redux';
class Userinfo extends Component {
    render() {
      
      return (
          <h1>{this.props.Userclick.name}</h1>
          
    );
    }
    
  }

  const mapStateToProps=(state)=>({
    
    Userclick : state.Userclick
    
}
);

export default connect(mapStateToProps)(Userinfo);