import React, {useEffect, useState} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


const DndList = (props) => {
    // console.log("line:700", props);
    // console.log("line:701", props.characters);
  return (
    <div>

      <DragDropContext onDragEnd={props.handleonDragEnd}>
        <h2>Rearrange the Survey Questions:</h2>
        <h5>Drag & Drop the Questions</h5>
        <Droppable droppableId="characters">
          {provided => (
            <ol
              style={{margin: 'auto'}}
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
                    <li
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
                      {' '}
                      {data.name}
                      ,
                      {' '}
                      <strong>Title:</strong>
                      {' '}
                      {data.title}
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ol>
          )}
        </Droppable>
      </DragDropContext>

    </div>
  );
};

export default DndList;
