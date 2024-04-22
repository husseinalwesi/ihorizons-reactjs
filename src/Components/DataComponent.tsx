import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateDataList } from '../store/actions';
import axios from 'axios';
import { LOOKUPS } from '../const/enum';
import { END_POINTS } from '../const/api';

const DataComponent: React.FC = () => {
  const data = useSelector((state: any) => state.list);
  const dispatch = useDispatch();



  return (
    <div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default DataComponent;
