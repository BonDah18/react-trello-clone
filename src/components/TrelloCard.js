import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {Draggalbe} from "react-beautiful-dnd";
import sytled from "styled-components";

const CardContainer = styled.div`
  margin-b ottom: 8px;
`

function TrelloCard({text, id, index}) {
  return(
    <Draggable draggableid={String(id)} index={index}>
    {provided => (
      <CardContainer
      ref={provided.innerRef} 
      {...provided.draggableProps} 
      {...provided.dragHandleProps}>
      
        <Card>
          <CardContent>
            <Typography gutterBottom>
            {text}
            </Typography>
            </CardContent>
         </Card>
        </CardContainer>
    )}
    
    </Draggable>
  );
};

export default TrelloCard; 