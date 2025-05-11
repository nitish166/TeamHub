import React, { useState } from 'react';
import { projectService } from '../../services/projectService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const AddTask: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    status: 'To Do',
    assignedToId: '',
    dueDate: '',
  });
  const [message, setMessage] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await projectService.addTask(projectId, taskData, token!);
      setMessage(`Task "${response.task.title}" added successfully!`);
      setTaskData({
        title: '',
        description: '',
        status: 'To Do',
        assignedToId: '',
        dueDate: '',
      });
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to add task');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a Task</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleAddTask}>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={taskData.title}
            onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            value={taskData.description}
            onChange={(e) => setTaskData({ ...taskData, description: e.target.value })}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Status</label>
          <select
            value={taskData.status}
            onChange={(e) => setTaskData({ ...taskData, status: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Assigned User ID</label>
          <input
            type="text"
            value={taskData.assignedToId}
            onChange={(e) => setTaskData({ ...taskData, assignedToId: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Due Date</label>
          <input
            type="date"
            value={taskData.dueDate}
            onChange={(e) => setTaskData({ ...taskData, dueDate: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;