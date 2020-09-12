import { CONSTANTS } from "../actions";

let listID = 2;
  let cardID = 5;

const initialState = [
  {
      title: "Last Episode",
      id: `list-${0}`,
      cards: [
        {
            id: `card-${0}`,
            text: "we created a static list and static card"
        },
        {
          id: `card-${1}`, 
          text: "we used a mix between material UI React and styled component"
        }
      ]
  },
    {
      title: "This Episode",
      id: `list-${1}`,
      cards: [
        {
            id: `list-${2}`,
            text: "we will create our first reducer"
        },
        {
          id: 3, 
          text: "and render many cards on our list with static data"
        },
        {
          id: 4,
          text: "we will also make some little changes I forgot in the last episode (link tags for roboto font and icons,..)"
        }
      ]
    }
  
];


const listsReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.ADD_LIST:
        const newList = {
          title: action.payload,
          card: [],
          id: `list-${listID}`
        }
        listID += 1;
        return [...state, newList];

        case CONSTANTS.ADD_CARD: {
          const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`
          }
          cardID += 1;

          const newState = state.map(list => {
            if(listid === action.payload.listID) {
              return {
                ...list, 
                cards: [list.cards, newCard]
              }
            } else {
              return list
            }
          });

          return newState;
        }

          case CONSTANTS.DRAG_HAPPENED:
            const {
              droppableIdStart, 
              droppableIdEnd,
              droppableIdIndexStart,
              droppableIdIndexEnd, 
              draggableId
            } = action.payload;
            const newState = [...state];

            //draggable lists around
            if(type === "list") {
              const list = newState.splice(droppableIdIndexStart, 1);
              newState.splice(droppableIdIndexEnd, 0, ...list);
              return newState;
            }


            //if in the same list
            if(droppableIdStart === droppableIdEnd) {
            const list = state.find(list => droppableIdStart === list.id);
            const card = list.card.splice(droppableIdIndexStart, 1)
            list.card.splice(droppableIdIndexEnd, 0, ...card)  
            }


          //other listID
          if(droppableIdStart !== droppableIdEnd) {
            // find the lsit where drag happened
            const listStart = state.find(list => droppableIdStart === list.id)

            //pull out the card from this list 
            const card = listStart.cards.splice(droppableIdIndexStart, 1);

            // find the lsit where drag ended 
            const listEnd = state.find(list => droppableIdEnd === list.id);

            // put the card in the new list 
            listEnd.cards.splice(droppableIdIndexEnd, 0, ...card)
          }
            return newState;
            


      default: 
      return state;
    }
};

export default listsReducer; 