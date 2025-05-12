import React, { useState } from 'react';
import CreateProject from '../components/Project/CreateProject';
import AddTask from '../components/Project/AddTask';
import TaskList from '../components/Project/TaskList';

const ProjectManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'tasks' | 'list'>('projects'); // Manage active tab state
  const teamId = 'your-team-id'; // Replace with the actual team ID
  const projectId = 'your-project-id'; // Replace with the actual project ID

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project & Task Management</h1>

      {/* Tabs for switching between sections */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'projects' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Create Project
        </button>
        <button
          onClick={() => setActiveTab('tasks')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'tasks' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Add Task
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Task List
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'projects' && <CreateProject teamId={teamId} />}
      {activeTab === 'tasks' && <AddTask projectId={projectId} />}
      {activeTab === 'list' && <TaskList projectId={projectId} />}
    </div>
  );
};

export default ProjectManagement;