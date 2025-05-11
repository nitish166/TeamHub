import React from 'react';
import CreateProject from '../components/Project/CreateProject';
import AddTask from '../components/Project/AddTask';
import TaskList from '../components/Project/TaskList';

const ProjectManagement: React.FC = () => {
  const teamId = 'your-team-id'; // Replace with the actual team ID
  const projectId = 'your-project-id'; // Replace with the actual project ID

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Project & Task Management</h1>
      <CreateProject teamId={teamId} />
      <div className="mt-8">
        <AddTask projectId={projectId} />
      </div>
      <div className="mt-8">
        <TaskList projectId={projectId} />
      </div>
    </div>
  );
};

export default ProjectManagement;