import reducer from "./reducer";
import { createStore } from "redux";

export default function configureStore() {
  let store = createStore(reducer)
  return store
}
