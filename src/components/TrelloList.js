import React from "react";
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components";

const ListContainer = styled.div`
    backgroundcolor: #dfe3e6;
    border-radius: 3px; 
    width: 300px;
    padding: 8px;
    margin-right: 80px;  
    margin-left: 16px;
    height: 100%;
`;

const TrelloList = ({ title, cards, listID, index }) => {
  return(
  <Draggable draggableId={String(listID)} index={index}>
    {provided => (
      <ListContainer
      {...provided.draggableProps} 
      ref={provided.innerRef} 
      {...provided.dragHandleProps}>
      <Droppable droppableId={String(listID)}>
    {provided => (
    <div {...provided.droppableProps} ref={provided.innerRef}>
      <h4>{title}</h4>
      {cards.map((card, index) => (
          <TrelloCard 
          key={card.id} 
          index={index}
          text={card.text} 
          id={card.id} 
          />
))}
      <TrelloActionButton listID={listID}/>
      {provided.placeholder}
    </div>
  )}
  </Droppable>
</ListContainer>
    )}
  </Draggable>
  
  );
};


export default TrelloList;