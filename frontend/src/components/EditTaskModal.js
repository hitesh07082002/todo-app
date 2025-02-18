// src/components/EditTaskModal.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../api/axios';

function EditTaskModal({ task, onClose, refreshTasks }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [deadline, setDeadline] = useState(task.deadline);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/tasks/${task._id}`, {
        title,
        description,
        status,
        deadline,
      });
      toast.success('Task updated successfully');
      refreshTasks(true);  // ✅ Silent refresh
      onClose();           // ✅ Close Modal
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  return (
    <div className="modal" style={{
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '2rem',
      borderRadius: '10px',
      boxShadow: '0px 0px 15px rgba(0,0,0,0.2)'
    }}>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Title" 
          required 
        />
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="ACTIVE">ACTIVE</option>
          <option value="IN_PROGRESS">IN_PROGRESS</option>
          <option value="COMPLETE">COMPLETE</option>
          <option value="EXPIRED">EXPIRED</option>
        </select>
        <input 
          type="date" 
          value={deadline} 
          onChange={(e) => setDeadline(e.target.value)} 
          required 
        />
        <div style={{ marginTop: '1rem' }}>
          <button type="submit" style={{ marginRight: '0.5rem' }}>Save</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditTaskModal;
