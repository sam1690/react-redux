export default function(state={}, action){
   
    switch(action.type){
      case "userclicked" :
      
      return action.payload;
      default:
      return state;
    }

}