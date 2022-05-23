import React, {useState} from 'react';
import {connect} from "redux";
import { actionCreators, addToDo } from '../store';

function Home({toDos, addToDo}) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }
  return (
    <>
    <h1>hi</h1>
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={onChange}/>
      <button>Add</button>
    </form>
    <ul></ul>
    </>
  );
}
//store와 component connect 하는 방법
function mapStateToProps(state) {
  return {
    toDos: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    //addToDo라는 함수가 실행되면 dispatch 실행
    addToDo: (text) => dispatch(actionCreators.addToDo(text))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);