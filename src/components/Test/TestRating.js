import React from 'react';

const TestRating = (props) => {
    return (
        <div className="form-container">
            {props.elements5.map((element, index) => (
                <div key={index} className="element-container">
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={element.name}
                            onChange={(e) => props.onElementChange5(e, index)}
                        />
                    </label>

                    <label>
                        Title:
                        <input
                            type="text"
                            name="title"
                            value={element.title}
                            onChange={(e) => props.onElementChange5(e, index)}
                        />
                    </label>

                    <label>
                        Minimum Rating:
                        <input
                            type="number"
                            name="rateMin"
                            value={element.rateMin}
                            onChange={(e) => props.onElementChange5(e, index)}
                        />
                    </label>

                    <label>
                        Maximum Rating:
                        <input
                            type="number"
                            name="rateMax"
                            value={element.rateMax}
                            onChange={(e) => props.onElementChange5(e, index)}
                        />
                    </label>

                    <label className="checkbox-label">
                        Is Required:
                        <input
                            type="checkbox"
                            name="isRequired"
                            checked={element.isRequired}
                            onChange={(e) => props.onElementChange5(e, index)}
                        />
                    </label>

                    <button type="button" onClick={() => props.onDeleteElement5(index)}>
                        Delete
                    </button>
                </div>
            ))}

            <button type="button" onClick={props.onAddElement5}>
                Add Rating Element
            </button>

            <button type="submit">Submit</button>

        </div>
    );
};

export default TestRating;
