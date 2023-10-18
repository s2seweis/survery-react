import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialQuestions = [
  { id: '1', content: 'What is your name?' },
  { id: '2', content: 'What is your age?' },
  { id: '3', content: 'Where are you from?' },
  // ...other questions
];

const Form = () => {
  const [questions, setQuestions] = useState(initialQuestions);

  const onDragEnd = (result) => {
    if (!result.destination) return; // Drop outside the list
    const updatedQuestions = Array.from(questions);
    const [reorderedQuestion] = updatedQuestions.splice(result.source.index, 1);
    updatedQuestions.splice(result.destination.index, 0, reorderedQuestion);
    setQuestions(updatedQuestions);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="questions">
        {(provided) => (
          <ul ref={provided.innerRef} {...provided.droppableProps}>
            {questions.map((question, index) => (
              <Draggable key={question.id} draggableId={question.id} index={index}>
                {(provided) => (
                  <li
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {question.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Form;
