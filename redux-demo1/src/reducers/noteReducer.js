const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
]

const noteReducer = (state = initialState, action) => {
  // action definition in reducer 
  if (action.type === "NEW_NOTE") {
    return state.concat(action.payload);
  }
  if (action.type === "TOGGLE_IMPORTANCE") {
    const id = action.payload.id;
    const noteToChange = state.find((n) => n.id === id);
    const changedNote = {
      ...noteToChange,
      important: !noteToChange.important,
    };
    return state.map((note) => (note.id !== id ? note : changedNote));
  }

  return state;
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

// action creator
export const createNote = (content) => {
  return {
    type: "NEW_NOTE",
    payload: {
      content,
      important: false,
      id: generateId(),
    },
  };
};

export const toggleImportanceOf = (id) => {
  return {
    type: "TOGGLE_IMPORTANCE",
    payload: { id },
  };
};
export default noteReducer;