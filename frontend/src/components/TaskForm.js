// src/components/TaskForm.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import API from '../api/axios';

function TaskForm({ refreshTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/tasks', { title, description, deadline });
      toast.success('Task added successfully!');
      refreshTasks(true);  // ✅ Silent refresh
      setTitle('');
      setDescription('');
      setDeadline('');
    } catch (error) {
      toast.error('Failed to add task');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <input 
        type="date" 
        value={deadline} 
        onChange={(e) => setDeadline(e.target.value)} 
        required 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
