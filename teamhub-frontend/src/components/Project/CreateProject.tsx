import React, { useState } from 'react';
import { projectService } from '../../services/projectService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const CreateProject: React.FC<{ teamId: string }> = ({ teamId }) => {
  const [projectName, setProjectName] = useState('');
  const [message, setMessage] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await projectService.createProject(teamId, projectName, token!);
      setMessage(`Project "${response.project.name}" created successfully!`);
      setProjectName('');
    } catch (err: any) {
      setMessage(err.response?.data?.message || 'Failed to create project');
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create a Project</h2>
      {message && <p className="text-green-500 mb-4">{message}</p>}
      <form onSubmit={handleCreateProject}>
        <div className="mb-4">
          <label className="block text-gray-700">Project Name</label>
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;