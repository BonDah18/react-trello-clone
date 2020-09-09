import React from "react";
import TrelloList from './TrelloList';
import { connect } from "react-redux";
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext } from "react-beautiful-dnd";

function App() {

  onDragEnd = () => {
    //TODO: reordering logic
  }

  const { lists } = this.props; 
  return (
    <DragDropContext onDragEnd={this.onDragEnd }>
    <div>
      <h1>Hello FastTrackers!</h1>
      <div styles={styles.listContainer}>
      {lists.map(list => (
        <TrelloList 
        listID={list.id}
        key={list.id} 
        title={list.title} 
        cards={list.cards} />
      ))}
      <TrelloActionButton list />
      </div>
    </div>
    </DragDropContext>
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