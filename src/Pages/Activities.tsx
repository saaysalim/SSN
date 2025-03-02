import React from 'react';
import { Link } from 'react-router-dom';

// Define a TypeScript interface for activities information
interface Activity {
  id: number;
  name: string;
  phone: string;
}

// Sample data: List of Activities
const activitiesList: Activity[] = [
  { id: 1, name: 'John Doe', phone: '123-456-7890' },
  { id: 2, name: 'Jane Doe', phone: '098-765-4321' },
];

// Activities Page component
const ActivitiesPage: React.FC = () => {
  return (
    <div className="activities-page">
      <h1>Activities</h1>
      <ul>
        {activitiesList.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.name}</strong> - {activity.phone}
          </li>
        ))}
      </ul>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ActivitiesPage;
