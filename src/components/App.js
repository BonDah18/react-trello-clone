import React from "react";
import TrelloList from './TrelloList';
import { connect } from "react-redux";
import TrelloActionButton from './TrelloActionButton';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex,
  flexDirection: row;
`;

function App() {

  onDragEnd = (result) => {
    const {destination, source, draggableID, type} = result;

    if(!destiantion) {
      return;
    }

    this.props.dispatch(
      sort(
      source.droppableId,
      destination.draggableID,
      source.index, 
      destination.index,
      draggableID,
      type
      ));
      
  };

  const { lists } = this.props; 
  return (
    <DragDropContext onDragEnd={this.onDragEnd}>
    <div>
      <h1>Hello FastTrackers!</h1>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
      {provided => (
        <ListContainer {...provided.droppableProps} 
        ref={provided.innerRef}>
        {lists.map((list, index) => (
        <TrelloList 
        listID={list.id}
        key={list.id} 
        title={list.title} 
        cards={list.cards} 
        index={index}
        />
      ))}
      {provided.placeholder}
      <TrelloActionButton list />
      </ListContainer>
      )}
      </Droppable>
    </div>
    </DragDropContext>
  );
}


const mapStateToProps = state => ({
  lists: state.lists
})


export default connect(mapStateToProps) (App); 