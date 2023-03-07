import React from "react";
import "./item-status-filter.css";

const ItemStatusFilter = ({ filter, onFilter }) => {
  return (
    <div className={"btn-group"}>
      <button
        onClick={() => onFilter("all")}
        type={"button"}
        className={
          filter === "all" ? "btn btn-danger" : "btn btn-outline-danger"
        }
      >
        All list
      </button>
      <button
        onClick={() => onFilter("active")}
        type={"button"}
        className={
          filter === "active" ? "btn btn-info" : "btn btn-outline-info"
        }
      >
        Active list
      </button>
      <button
        onClick={() => onFilter("done")}
        type={"button"}
        className={
          filter === "done" ? "btn btn-success" : "btn btn-outline-success"
        }
      >
        Done
      </button>
    </div>
  );
};
export default ItemStatusFilter;
