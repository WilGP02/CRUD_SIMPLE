import { combineReducers } from "redux";
import person from "./person.reducer";

const rootReducers = combineReducers({
  person
});

export default rootReducers;