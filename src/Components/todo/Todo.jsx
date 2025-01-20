import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdFileDownloadDone } from "react-icons/md";
import Button from "../Buttons/Button";
import Input from "../Input/Input";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './todo.module.css'

const Todo = () => {
  const [task, setTask] = useState({ title: "", status: false });
  const [todo, setTodo] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSubmit = () => {
    if (task.title) {
      setTodo((previousTodo) => [...previousTodo, task]);
      setTask({ title: "", status: false });
    }
  };

  const handleDelete = (index) => {
    setTodo((previousTodo) => previousTodo.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    const updatedTask = prompt("Edit task:", todo[index].title);
    if (updatedTask) {
      setTodo((previousTodo) =>
        previousTodo.map((item, i) =>
          i === index ? { ...item, title: updatedTask } : item
        )
      );
    }
  };

  const handleComplete = (index) => {
    setTodo((previousTodo) =>
      previousTodo.map((item, i) =>
        i === index ? { ...item, status: true } : item
      )
    );
  };

  const handleDeleteFilteredTasks = () => {
    if (filter === "pending") {
      setTodo((previousTodo) => previousTodo.filter((task) => task.status));
    } else if (filter === "completed") {
      setTodo((previousTodo) => previousTodo.filter((task) => !task.status));
    } else if (filter === "all") {
      setTodo([]); // Clear all tasks for "all"
    }
  };

  const filteredTodo = todo.filter((item) => {
    if (filter === "pending") return !item.status;
    if (filter === "completed") return item.status;
    return true;
  });

  return (
    <div className="container mt-4 text-center">
      <Input
        onchange={(e) => {
          setTask({ ...task, title: e.target.value });
        }}
        type="text"
        placeholder="Enter Task"
        value={task.title}
      />
      <Button color="green" icon={<IoIosAdd />} handleFunction={handleSubmit} />

    
      <div className={styles.dropdown}>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending Tasks</option>
          <option value="completed">Completed Tasks</option>
        </select>
        <Button
          color="red"
          backgroundColor="white"
          icon={<MdDeleteOutline />}
        //   label={`Delete All ${filter === "all" ? "Tasks" : filter === "pending" ? "Pending Tasks" : "Completed Tasks"}`}
          handleFunction={handleDeleteFilteredTasks}
        />
      </div>

      <div className="mt-3">
        
      </div>

      <div className="row mt-4">
        {filteredTodo.map((item, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="card">
              <div className="card-header">
                <span className={`badge ${item.status ? "bg-success" : "bg-warning"} ms-2`}>
                  {item.status ? "Completed" : "Pending"}
                </span>
              </div>
              <p className="card-text">{item.title}</p>
              <div className="card-body d-flex justify-content-between">
                <Button
                  color="yellow"
                  icon={<CiEdit />}
                  handleFunction={() => handleEdit(index)}
                />
                <Button
                  color="red"
                  icon={<MdDeleteOutline />}
                  handleFunction={() => handleDelete(index)}
                />
                <Button
                  color="green"
                  icon={<MdFileDownloadDone />}
                  handleFunction={() => handleComplete(index)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
