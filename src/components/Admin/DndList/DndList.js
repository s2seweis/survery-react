import React from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

const DndList = props => {
  return (
    <div>

      <h2>Rearrange the Survey Questions:</h2>
      <hr className="green-line" />

      <div className="main-bottom">

        <DragDropContext onDragEnd={props.handleonDragEnd}>
          <h5 style={{marginTop: '20px'}}>Drag & Drop the Questions</h5>
          <Droppable droppableId="characters">
            {provided => (
              <div
                style={{margin: 'auto', marginBottom: '20px'}}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {props.characters?.map ((data, index) => (
                  <Draggable
                    key={index}
                    draggableId={`draggable-${index}`}
                    index={index}
                  >
                    {provided => (
                      <div
                        className="li-new"
                        style={{
                          background: 'lightblue',
                          padding: '10px',
                          marginBottom: '10px',
                        }}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <strong>Name:</strong>
                        {data.name}
                        <strong>Title:</strong>
                        {data.title}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </div>
    </div>
  );
};

DndList.propTypes = {
  handleonDragEnd: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf (
    PropTypes.shape ({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default DndList;
