import { createStore} from 'redux'

const defaultState = {
  username: "alaa",
  password: "test123",
  loginSuccess: false,
};

function testStore(state=defaultState, action) {
  console.log(" --teststore");
  switch(action.type) {
    case "LOGIN":
      return {...state, username: action.payload.username, loginSuccess: true,};
    case "LOGOUT":
      return {...state, loginSuccess: false,};
    default:
      console.log('...teststore: default action');
      return state;
  }
}
export default createStore(testStore);