import React from "react";
import TrelloList from './TrelloList';
import { connect } from "react-redux";

function App() {

  const { lists } = this.props; 
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div styles={styles.listContainer}>
      {lists.map(list => (
        <TrelloList key={list.id} title={list.title} cards={list.cards} />
      ))}
      </div>
    </div>
  );
}

const styles = {
  listContainer: {
    display: "flex", 
    flexDirecion: "row",
  }
};

const mapStateToProps = state =>({
  lists: state.lists
})


export default connect(mapStateToProps) (App); 