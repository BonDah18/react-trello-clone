import React from "react";
import TrelloCard from './TrelloCard';

export default function TrelloList({title}) {
  return(
    <div style={styles.container}>
      <h4>{title}</h4>
      <TrelloCard />
    </div>
  );
};

const styles = {
  container: {
    backgroundcolor: "#ccc",
    borderRadius: 3, 
    width: 300
  }
};