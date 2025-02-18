// src/components/TaskList.js
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import EditTaskModal from './EditTaskModal';
import API from '../api/axios';

function TaskList({ tasks, refreshTasks }) {
  const [editingTask, setEditingTask] = useState(null);

  // ✅ Delete Task Handler
  const handleDelete = async (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await API.delete(`/tasks/${taskId}`);
        toast.success('Task deleted');
        refreshTasks(true);  // Silent refresh
      } catch (error) {
        toast.error('Failed to delete task');
      }
    }
  };

  // ✅ Show Edit Modal on Button Click
  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // ✅ Close Modal
  const handleCloseModal = () => {
    setEditingTask(null);
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <p style={{ color: '#7f8c8d' }}>No tasks found. Add a new one!</p>
      ) : (
        tasks.map((task) => (
          <div 
            key={task._id} 
            style={{
              backgroundColor: '#fff',
              padding: '1rem',
              marginBottom: '1rem',
              borderRadius: '5px',
              border: '1px solid #dcdcdc',
              boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)'
            }}
          >
            <h3 style={{ margin: 0, color: '#34495e' }}>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: <strong>{task.status}</strong></p>
            <p>Deadline: {new Date(task.deadline).toLocaleDateString()}</p>
            {/* ✅ Edit Button */}
            <button 
              onClick={() => handleEdit(task)} 
              style={{ 
                backgroundColor: '#3498db', 
                color: 'white', 
                marginRight: '1rem',
                padding: '0.5rem'
              }}
            >
              Edit
            </button>
            {/* ✅ Delete Button */}
            <button 
              onClick={() => handleDelete(task._id)} 
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '0.5rem'
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}

      {/* ✅ Show Edit Modal if Task is Selected */}
      {editingTask && (
        <EditTaskModal 
          task={editingTask}
          onClose={handleCloseModal}
          refreshTasks={refreshTasks}
        />
      )}
    </div>
  );
}

export default TaskList;
