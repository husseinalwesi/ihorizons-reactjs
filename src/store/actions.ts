// src/store/actions.ts
export const UPDATE_DATA_LIST = 'updateDataList';

export const updateDataList = (data: any) => ({
  type: UPDATE_DATA_LIST,
  payload: data,
});