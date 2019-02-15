import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Userclicked from '../actions/Userclicked'
import Userinfo from './userinfo';



class UserDisplay extends Component {
    render() {
      
      return (
          <div>
        <h1>{this.props.Users.map((item, i)=><li key={i} onClick={()=>{this.props.Userclicked(item)}}>{item.name}</li>)}</h1>
         <Userinfo/>
        </div> 
    );
    }
    
  }

  const mapStateToProps=(state)=>({
    
        Users : state.User
        
  }
    );

  const matchDispatchToProps=(dispatch)=>{
      return bindActionCreators({Userclicked:Userclicked},dispatch)
  }  

  
  export default connect(mapStateToProps, matchDispatchToProps)(UserDisplay);