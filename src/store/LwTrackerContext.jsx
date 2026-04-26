import {createContext} from 'react';

const LwTrackerContext = createContext({
  masterData: {},
  user: {},
  searchData: {}
});

export default LwTrackerContext;