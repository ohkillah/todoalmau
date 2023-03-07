import React from "react";
import "./actions.css";

const ActionSet = ({ add, set }) => {
  const [label, setLabel] = React.useState("");
  return (
    <div className="addnewtodo">
      <div className="action">
        <div className="action-header">
          <text className="action-title">New To Do</text>
        </div>
        <div className="action-body">
          <input
            onChange={(e) => setLabel(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Write your new task"
          />
        </div>
        <div className="action-footer">
          <button
            onClick={() => add(label)}
            type="button"
            className="btn btn-success"
          >
            Add
          </button>
          <button
            onClick={() => set(false)}
            type="button"
            className="btn btn-danger"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionSet;
