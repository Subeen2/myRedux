import React from "react";
import { useDispatch } from "redux";
import { actionCreators } from "../store";

function ToDo({ id, text }) {
const dispatch = useDispatch();

const onClick = () => {
dispatch(actionCreators.deleteToDo(id));
}

return {text}
DEL
;
}
export default ToDo;