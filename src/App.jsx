import { useState } from 'react'
import './App.css'
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import LwTrackerContext from "./store/LwTrackerContext.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [resources, setResources] = useState([]);
  const [issueTypes, setIssueTypes] = useState([]);
  const [issueStatuses, setIssueStatuses] = useState([]);
  const [issueSeverities, setIssueSeverities] = useState([]);
  const [modules, setModules] = useState([]);

  const [user, setUser] = useState({});
  const [searchData, setSearchData] = useState({});


  const lwTrackerContextValue = {
    master: {
      resources: resources,
      issueType: issueTypes,
      issueStatus: issueStatuses,
      issueSeverity: issueSeverities,
      modules: modules
    },
    data: {
      user: user,
      searchData: searchData
    },
    actions: {
      setIsLoggedIn: setIsLoggedIn,
      setLoggedInUser: setLoggedInUser,
      setResources: setResources,
      setIssueTypes: setIssueTypes,
      setIssueStatuses: setIssueStatuses,
      setIssueSeverities: setIssueSeverities,
      setModules: setModules,
      setUser: setUser,
      setSearchData: setSearchData
    }

  }
  return (
    <LwTrackerContext value={lwTrackerContextValue}>
      {!isLoggedIn && <Login/>}
      {isLoggedIn && <Main/>}
    </LwTrackerContext>
  )
}

export default App
