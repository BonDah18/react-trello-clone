import React from "react";
import TrelloList from './TrelloList';
import { connect } from "react-redux";

function App() {

  const { lists } = this.props; 
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {lists.mpa(list => (
        <TrelloList title={list.title} cards={list.cards} />
      ))}
    </div>
  );
}

const mapStateToProps = state =>({
  lists: state.lists
})


export default connect(mapStateToProps) (App); 