import React, { useState, useEffect } from 'react';
import CreateProject from '../components/Project/CreateProject';
import AddTask from '../components/Project/AddTask';
import TaskList from '../components/Project/TaskList';
import { teamService } from '../services/teamService';
import { projectService } from '../services/projectService';
import { useSelector } from 'react-redux';
import store from '../store'; // Import the store directly

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const ProjectManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'tasks' | 'list'>('projects'); // Manage active tab state
  const [teams, setTeams] = useState<{ id: string; name: string }[]>([]); // Store the list of teams
  const [projects, setProjects] = useState<{ id: string; name: string }[]>([]); // Store the list of projects
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null); // Track selected team ID
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null); // Track selected project ID
  const [error, setError] = useState('');
  const token = useSelector((state: RootState) => state.auth.token);

  // Fetch teams on component mount
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await teamService.listTeams(token!);
        setTeams(response.teams);
        if (response.teams.length > 0) {
          setSelectedTeamId(response.teams[0].id); // Automatically select the first team
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch teams');
      }
    };

    fetchTeams();
  }, [token]);

  // Fetch projects when a team is selected
  useEffect(() => {
    const fetchProjects = async () => {
      if (!selectedTeamId) return;
      try {
        const response = await projectService.listProjects(selectedTeamId, token!);
        setProjects(response.projects);
        if (response.projects.length > 0) {
          setSelectedProjectId(response.projects[0].id); // Automatically select the first project
        }
      } catch (err: any) {
        setError(err.response?.data?.message || 'Failed to fetch projects');
      }
    };

    fetchProjects();
  }, [selectedTeamId, token]);

  useEffect(() => {

  }, [selectedProjectId]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project & Task Management</h1>

      {/* Team Selection */}
      {activeTab === 'projects' && (
        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Select a Team</label>
          <select
            value={selectedTeamId || ''}
            onChange={(e) => setSelectedTeamId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

      {/* Project Selection */}
      {(activeTab === 'tasks' || activeTab === 'list') && (
        <div className="mb-8">
          <label className="block text-gray-700 mb-2">Select a Project</label>
          <select
            value={selectedProjectId || ''}
            onChange={(e) => setSelectedProjectId(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          >
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
      )}

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
          disabled={!selectedTeamId} // Disable if no team is selected
        >
          Add Task
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`px-6 py-2 rounded-md shadow-md ${
            activeTab === 'list' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          disabled={!selectedProjectId} // Disable if no project is selected
        >
          Task List
        </button>
      </div>

      {/* Dynamic Content Based on Active Tab */}
      {activeTab === 'projects' && selectedTeamId && <CreateProject teamId={selectedTeamId} />}
      {activeTab === 'tasks' && selectedProjectId && <AddTask projectId={selectedProjectId} />}
      {activeTab === 'list' && selectedProjectId && <TaskList projectId={selectedProjectId} />}
    </div>
  );
};

export default ProjectManagement;