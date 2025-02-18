// src/pages/Dashboard.js
import React, { useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import API from '../api/axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { STATUSES, SORT_OPTIONS } from '../utils/constants';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [sortBy, setSortBy] = useState('');

  const fetchTasks = useCallback(async (silent = false) => {
    try {
      const response = await API.get('/tasks', {
        params: { search, status, sortBy }
      });
      setTasks(response.data);
      if (!silent) {
        toast.success('Tasks loaded successfully!');
      }
    } catch (error) {
      toast.error('Failed to fetch tasks');
    }
  }, [search, status, sortBy]);

  useEffect(() => {
    fetchTasks(true); // Silent load on page open
  }, [fetchTasks]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Your Tasks</h2>

      {/* Filters */}
      <div style={{ marginBottom: '1rem' }}>
        <input 
          type="text" 
          placeholder="Search tasks..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Statuses</option>
          {STATUSES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">No Sorting</option>
          {SORT_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Task Form and List */}
      <TaskForm refreshTasks={() => fetchTasks(true)} />
      <TaskList tasks={tasks} refreshTasks={() => fetchTasks(true)} />
    </div>
  );
}

export default Dashboard;
