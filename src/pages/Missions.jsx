import React from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
// import { getMissions } from '../redux/space/spaceSlice';

const Missions = () => {
  const { missions, isLoading } = useSelector((state) => ({ ...state.space }));
  console.log('Missions: ', missions);
  if (isLoading === 'loading') {
    return <div className="loading">Loading ...</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join/Leave</th>
        </tr>
      </thead>
      <tbody>
        {
          missions && missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))
        }
      </tbody>
    </Table>
  );
};

export default Missions;
