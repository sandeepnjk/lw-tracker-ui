import React from 'react';
import PropTypes from 'prop-types';
import {createContext} from 'react';

const MasterData = createContext({
  resources:{
    be: [
      {id:6, name: "", role:5},
      {id:7, name: "", role:5},
      {id:8, name: "", role:5},
      {id:9, name: "", role:5}
    ],
    fe:[
      {id:10, name: "", role:6},
      {id:11, name: "", role:6},
      {id:12, name: "", role:6}
    ],
    de:[
      {id:13, name: "", role:7},
      {id:14, name: "", role:7},
      {id:15, name: "", role:7}
    ],
    te: [
      {id:16, name: "", role:4},
      {id:17, name: "", role:4}
    ],
    ux:[
      {id:18, name: "", role:8},
      {id:19, name: "", role:8}
    ],
    dop:[
      {id:20, name: "", role:9}
    ],
    mgr:[
      {id:21, name: "", role:10},
      {id:22, name: "",role:10}
    ]
  },
  issueType:[
    {id:1, name: "Need Feature Clarification"},
    {id:2, name: "How do I ..."},
    {id:3, name: "Unable to Proceed"},
    {id:4, name: "Feature Missing"},
    {id:5, name: "Inaccurate Data"},
    {id:6, name: "Save Not Working"},
    {id:7, name: "Field Missing"},
    {id:8, name: "UI Not Intuitive"},
    {id:9, name: "Performance Slow"},
    {id:10, name: "Encountered Error"},
    {id:11, name: "Miscellaneous"}
  ],
  issueStatus:[
    {id: 1, name: "Raised"},
    {id: 2, name: "Accepted"},
    {id: 3, name: "Not Reproducible"},
    {id: 4, name: "More Info Needed"},
    {id: 5, name: "Under Analysis"},
    {id: 6, name: "Dev In Progress"},
    {id: 7, name: "Dev Fixed"},
    {id: 8, name: "QA Testing"},
    {id: 9, name: "QA Approved"},
    {id: 10, name: "UAT Testing"},
    {id: 11, name: "UAT Approved"},
    {id: 12, name: "Promoted to Prod"},
    {id: 13, name: "Closed"},
    {id: 14, name: "QA Reopened"},
    {id: 15, name: "UAT Reopened"},
  ],
  issueSeverity: [
    {id: 1, name: "NA"},
    {id: 2, name: "P1"},
    {id: 3, name: "P2"},
    {id: 4, name: "P3"},
    {id: 5, name: "P4"}
  ],
  modules: [
    {id: 1, name: "Frontdesk"},
    {id: 2, name: "Cashier"},
    {id: 3, name: "Optometrist"},
    {id: 4, name: "Doctor"},
    {id: 5, name: "Counsellor"},
    {id: 6, name: "Histo"},
    {id: 7, name: "Microbiology"},
    {id: 8, name: "Biochemistry"},
    {id: 9, name: "Diagnostics"},
    {id: 10, name: "EyeLasers"},
    {id: 11, name: "Photography"},
    {id: 12, name: "CL/Devices"},
    {id: 13, name: "Prescriptions"},
    {id: 14, name: "Online Consulting"},
    {id: 15, name: "Injections"},
    {id: 16, name: "Minor Procedures"},
    {id: 17, name: "OR"},
    {id: 18, name: "IP"},
    {id: 19, name: "DayCare"},
    {id: 20, name: "MRD"},
    {id: 21, name: "Clinical Audit"},
    {id: 22, name: "PC Admin"},
    {id: 23, name: "Center Admin"}
  ]
})
const IssueContext = createContext({
  isLoggedIn: false,
  loggedInUser: {
    name: '',
    email: '',
    id:-1,
    role: '',
    token: '',
    pageSize: 3
  },
  data: {
    offset: 0,
    limit: 3,
    total:15,
    issues: [
      {
        id: 1,
        createdAt: 1777064716,
        createdBy: 1,
        owner: "Jim Morrison",
        summary: "When the music is over,turn out the lights",
        description: "A psychadelic hit song from the Doors from the early 70s",
        module:1,
        issue_type: 1,
        issue_severity: 1,
        issue_status: 1,
        eta: 1777487400,
        attachments: ["/a/b/scrshot1.jpg", "/a/b/scrshot2.jpg", "/a/b/scrshot3.jpg"],
        resources:[18,19,9],
        analysis: "Strange Days has come",
        comments:[
          {
            createdAt: 1777064716,
            createdBy: 8,
            comment: "Jack and Jill went up the hill."
          },
          {
            createdAt: 1777094352,
            createdBy: 8,
            comment: "Jack and Jill went up the hill."
          }
        ]
      }
    ]
  }
});

export default IssueContext;