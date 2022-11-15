import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/space/spaceSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => ({ ...state.space }));
  console.log('Missions: ', missions);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Missions;