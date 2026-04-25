# Simple login
- list of users with pwd provided in csv

# Issue Page #

## List of Issues ##
  * Sorted by fields (#Issue, Reported on, Module, Issue Type, Severity, Status, Progress, ETA, RAG)
  * Filters reported date range, Summary, Module, Issue Type, Severity, Status, Resource(s), eta date range, rag 
| #Issue | Reported On (IST)   | Summary      | Module    | Issue Type      | Severity     | Status          | Progress | Resources | ETA (IST)           | Action           | RAG |
|--------|---------------------|--------------|-----------|-----------------|--------------|-----------------|----------|-----------|---------------------|------------------|-----|
| 1      | 21-04-2026 03:45:52 | Unable to .. | Doctor    | Cannot Proceed  | Not Assigned | Raised          | 0%       | Rambo     | na                  | edit view delete | -   |
|        |                     |              |           |                 |              |                 |          | Conan     |                     |                  |     |
| 2      |                     | kklkljlj     | Frontdesk | Inaccurate Data | P3           | Dev In Progress | 20%      | Lucy      | 24-04-2026 12:00:00 | edit view delete | R   |
|        |                     |              |           |                 |              |                 |          |           |                     |                  |     |
* \+New Issue

## Issue Details View/Edit Page ##

### Issue Number ###

  * Identifier + auto increment
  * eg. ALW-0001
  * Read Only

### Created Date ###

  * Read-Only
  * Set at issue creation time
  * Configurable
    * Locale Configurable
    * Display Format
  
### Summary ###
  * Single line text.
  * max 50 words or max 200 chars whichever is first
  * Mandatory
  
### Module ###
  * Configurable
  * List of Module or Component Names
  * Mandatory
  * Values from

### Issue Types (mandatory) ###
  * 
  * Need Clarification
  * How Do I ...
  * Unable to Proceed
  * Feature Missing
  * Inaccurate Data
  * Save Not Working
  * Field Missing
  * UI Not Intuitive
  * Miscellaneous
  
### Status ###

* Raised (default) - 0%
* Under Analysis - 10%
* Dev In Progress - 20% 
* Dev Fixed - 40%
* QA Testing - 50%
* QA Approved - 60%
* UAT Testing - 70%
* UAT Approved - 80%
* Promoted to Prod - 90%
* Closed - 100%
* QA Reopened (will go back to 10%, under analysis)
* UAT Reopened (will go back to 10%, under analysis)

### Severity (editable for certain folks) ###

* NA (default)
* P1
* P2
* P3
* P4

### ETA ###

  * Date Timestamp
  * Not editable once set
  * Configurable
    * Locale Configurable
    * Display Format
    
### Issue Journey ###

  * Simple Journey - Happy Path
      * reported--[3h]-->Analyzed--[1d]-->Fixed--[5h]-->QA Tested--[6h]-->UAT Tested--[1d]-->Production
      * Total(2.58d)
      * ETA Delta: +1.25d 
  * Reopened Journey 
      * reported--[3h]-->Analyzed--[1d]-->Fixed--[5h]-->QA Tested--[6h]-->reopened
      * ETA Delta: - 0.5d (in green)
      * reopened--[1h]-->Analyzed--[3h]-->Fixed--[7h]-->QA Tested--[6h]-->UAT Tested--[1d]-->Production Total(2.58d)
      * Total(3.29d)
      * ETA Delta: +2.5d (in red)

### Description ###

  * Mandatory
  * Issue description
  * 500 words 

### Attachments ###

  * Not Mandtory
  * Support jpg, png, svg, pdf
  * 



### Owner ###

  * Free text,single line
  * 100 chars

### Watch ###
  * checkbox (you want to be notified)
  * display a list of other watchers
  * nice to have this feature, but not imp.

### Resources ###

  * storage in csv
  * `type,email,name,designation`
  * type: FE,BE,DE,FSE,BA,MT,MAT,MGR,na

#### BE Engineers ####

  * all developers with type: BE

#### FE Engineers ####

  * all developers with type: FE
  
#### Data Engineers ####

  * all developers with type: DE

#### Test Engineers ####

  * all developers with type: MT or MAT

#### Owner ####

  * all developers with type: FE

### Analysis ###

## New Issue Popup ##
  *  

# Design Notes #

## Access Masks ##

| 10#  | 2#          | Permission                                                |
|------|-------------|-----------------------------------------------------------|
| 1    | 1           | view issue                                                |
| 2    | 10          | add new comment                                           |
| 4    | 100         | create issue                                              |
| 8    | 1000        | edit issue info (summary,description, module, issue type) |
| 16   | 10000       | add, delete attachments                                   |
| 32   | 100000      | edit issue analysis                                       |
| 64   | 1000000     | edit issue severity                                       |
| 128  | 10000000    | edit issue status                                         |
| 256  | 100000000   | edit ETA                                                  |
| 512  | 1000000000  | edit Resources                                            |
| 1024 | 10000000000 | delete issue                                              |

## User Access Permissions ##
| role               | 10#  | 2#         | Permissions            |
|--------------------|------|------------|------------------------|
| Stakeholder        | 3    | 11         | View Issue             |
|                    |      |            | Add Comment            |
| Campus Module Lead | 31   | 1 1111     | View Issue             |
|                    |      |            | Add Comment            |
|                    |      |            | Create Issue           |
|                    |      |            | Edit Issue             |
|                    |      |            | Add/Delete Attachments |
| LVPEI QA           | 159  | 1001 1111  | View Issue             |
|                    |      |            | Add Comment            |
|                    |      |            | Create Issue           |
|                    |      |            | Edit Issue             |
|                    |      |            | Add/Delete Attachments |
|                    |      |            | Edit Issue Status      |
| VM Team            | 767  | 1011111111 | View Issue             |
|                    |      |            | Add Comment            |
|                    |      |            | Create Issue           |
|                    |      |            | Edit Issue             |
|                    |      |            | Add/Delete Attachments |
|                    |      |            | Analysis               |
|                    |      |            | Severity               |
|                    |      |            | Status                 |
|                    |      |            | Edit Resources         |
| VM Tech Manager    | 1023 | 1111111111 | View Issue             |
|                    |      |            | Add Comment            |
|                    |      |            | Create Issue           |
|                    |      |            | Edit Issue             |
|                    |      |            | Add/Delete Attachments |
|                    |      |            | Analysis               |
|                    |      |            | Severity               |
|                    |      |            | Status                 |
|                    |      |            | ETA                    |
|                    |      |            | Edit Resources         |
|                    |      |            |                        |

# Data format in the issues.csv #
  * The ASCII separator characters are explicitly designed for this purpose. 
  * They are rarely used in standard text. 
  * Unit Separator (ASCII 31): Represented as ␟ or hex 0x1F. This is the safest choice.
  * Record Separator (ASCII 30): Represented as ␞ or Hex 0x1E.
  * Alternative: ASCII 28 (File Separator - ␜) or 
  * ASCII 29 (Group Separator - ␝).
  * We are using the Unit Seperator ␟ for the issue Fields
  * We are using the Record Seperator ␞ for seperating the issues.
  * _Note: cannot use comma and newline as they can come in the fields._
  
| Unit Pos | Unit           | Internal Seperator(s) | Sample                       | Comment                          |
|----------|----------------|-----------------------|------------------------------|----------------------------------|
| 1        | id             | none                  | 1                            | incremental                      |
| 2        | created-date   | none                  | 1777064716                   | epoch time                       |
| 3        | created-by     | none                  | 38                           | from RESOURCES master            |
| 4        | owner          | none                  | Ramudu Gundappa              |                                  |
| 5        | summary        | none                  | Single line Text             |                                  |
| 6        | description    | none                  | Multi line text              |                                  |
| 7        | module         | none                  | 1                            | from MODULES master              |
| 8        | issue-type     | none                  | 3                            | from ISSUE_TYPE master           |
| 9        | issue-severity | none                  | 1                            | from ISSUE_SEVERITY master       |
| 10       | issue-status   | none                  | 1                            | from ISSUE_STATUS master         |
| 11       | eta            | none                  | 1777487400                   | epoch time                       |
| 12       | attachments    | \|                    | a/b/c/xxx.png\|a/b/c/foo.png | path to file on the storage      |
| 13       | resources      | \|                    | 17\|19                       | refer to RESOURCES master        |
| 14       | analysis       | none                  | multi line text              |                                  |
| 15       | comments       | \|                    | comment-data1\|comment-data2 | list of comments seperated by \| |
|          |                | ~                     | 1777060961~17~soeme text     | datetime info~by who~the comment |


  * eg. `<id>␟<created-date>␟<created-by>␟<owner>␟<summary>␟<description>␟<module>␟<issue-type>␟<issue-severity>␟<issue-status>␟<eta>␟<attach1|attach2|attach3>␟<dev1>|<dev2>␟<analysis>␟<date1>~<by1>~<comment1>|<date2>~<by2>~<comment2>␞`


  * e.g. `1␟1777064716␟38␟Ramudu Gundappa␟Unable to schedule the slot␟Slot for Dr. Narender Reddy for today 4pm is available, but unable to book.␟1␟3␟1␟1␟1777487400␟a/b/c/xxx.png|a/b/c/foo.png␟17|19␟Trump ate the slot.␟1777060961~17~Table some_table is now fixed. Please Test.|1777065067~19~Slot UI was update to make the right service call␞`


