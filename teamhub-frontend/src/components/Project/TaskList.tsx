import React, { useEffect, useState } from 'react';
import { projectService } from '../../services/projectService';
import { useSelector } from 'react-redux';
import store from '../../store'; // Import the store directly
import UpdateTask from './UpdateTask';

type RootState = ReturnType<typeof store.getState>; // Infer RootState here

const TaskList: React.FC<{ projectId: string }> = ({ projectId }) => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await projectService.getTasks(projectId, token!);
        setTasks(response.tasks);
      } catch (err) {
        console.error('Failed to fetch tasks');
      }
    };

    fetchTasks();
  }, [projectId, token]);

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Task List</h2>
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks found for this project.</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task: any) => (
            <li
              key={task.id}
              className="bg-gray-100 p-2 rounded cursor-pointer hover:bg-gray-200"
              onClick={() => handleTaskClick(task)}
            >
              <div className="flex justify-between">
                <span>{task.title}</span>
                <span className="text-sm text-gray-500">{task.status}</span>
              </div>
            </li>
          ))}
        </ul>
      )}

      {selectedTask && (
        <div className="mt-8">
          <UpdateTask task={selectedTask} onTaskUpdated={() => setSelectedTask(null)} />
        </div>
      )}
    </div>
  );
};

export default TaskList;