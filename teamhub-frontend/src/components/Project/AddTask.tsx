import React, { useState, useEffect } from 'react';
import { projectService } from '../../services/projectService';
import { teamService } from '../../services/teamService'; // Import teamService to fetch team members
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
  const [teamMembers, setTeamMembers] = useState<{ id: string; name: string }[]>([]); // Store team members
  const [message, setMessage] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  // Fetch team members when the component mounts
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        // Fetch the team ID associated with the project
        const project = await projectService.getProjectDetails(projectId, token!); // Add a new service method to fetch project details
        const teamId = project.teamId;

        // Fetch team members using the team ID
        const response = await teamService.listTeamMembers(teamId, token!);
        setTeamMembers(response.members);
      } catch (err) {
        console.error('Failed to fetch team members:', err);
      }
    };

    fetchTeamMembers();
  }, [projectId, token]);

  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Format dueDate to ISO-8601 DateTime format
      const formattedTaskData = {
        ...taskData,
        dueDate: taskData.dueDate ? new Date(taskData.dueDate).toISOString() : null,
      };

      const response = await projectService.addTask(projectId, formattedTaskData, token!);
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
          <label className="block text-gray-700">Assign To</label>
          <select
            value={taskData.assignedToId}
            onChange={(e) => setTaskData({ ...taskData, assignedToId: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Select a team member</option>
            {teamMembers.map((member) => (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            ))}
          </select>
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