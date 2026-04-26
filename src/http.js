import {
  mockIssueSeverityResponse, mockSearchIssuesResponse,
  mockIssueStatusResponse,
  mockIssueTypeResponse,
  mockLoginResponse, mockModulesResponse,
  mockResourcesResponse
} from "./mocks/mockResponses.js";

const GET_REQUEST_INIT = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  credentials: 'include'
}
//const host = process.env.VITE_API_URL || 'localhost:8080';
const host = import.meta.env.VITE_API_URL || 'localhost:8080';

export async function login(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/login`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Login failed.");
    }
    return resData;
  } else {
    return mockLoginResponse;
  }
}

export async function getResources(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/resources`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch resources.");
    }
    return resData;
  } else {
    return mockResourcesResponse;
  }
}

export async function getIssueTypes(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/issue_types`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch candidate profile.");
    }
    return resData;
  } else {
    return mockIssueTypeResponse;
  }
}

export async function getIssueStatuses(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/issue_statuses`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch issue statuses..");
    }
    return resData;
  } else {
    return mockIssueStatusResponse;
  }
}

export async function getIssueSeverity(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/issue_severity`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch issue severities..");
    }
    return resData;
  } else {
    return mockIssueSeverityResponse;
  }
}

export async function getModules(bypass) {
  if (!bypass) {
    const response = await fetch(`${host}/lwtracker/modules`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch the modules");
    }
    return resData;
  } else {
    return mockModulesResponse;
  }
}

export async function getIssues(offset, limit, filter,bypass) {
  if (!bypass) {
    //todo handle filter, and make this post
    const response = await fetch(`${host}/lwtracker/issues`, GET_REQUEST_INIT);
    const resData = await response.json();
    if(!response.ok) {
      console.error("Error Fetching: ",response.status,  response.statusText);
      throw new Error("Failed to fetch the modules");
    }
    return resData;
  } else {
    return mockSearchIssuesResponse;
  }
}

