# DPS Backend Coding Challenge

This API provides endpoints to manage **Projects** and **Reports**, including CRUD operations and additional features such as retrieving reports with redundant words. Below is the detailed documentation for each endpoint and usage examples.

---

## Folder Structure

![Folder Structure](./dps_diagram.png)

---

## API Endpoints

### **Reports API**

#### **1. Create a New Report**
- **Route:** `POST /reports/`
- **Middleware:** `authenticate`
- **Handler:** `createReport`
- **Description:** Creates a new report.
```
{ "id": "3", "text": "First text test for Reports", "projectId": "4" }
```
![Create a New Report Example](./images/postReports.png)

---

#### **2. Get Reports by Project ID**
- **Route:** `GET /reports/projectid/:projectId`
- **Middleware:** `authenticate`
- **Handler:** `getReportsByProjectId`
- **Description:** Retrieves reports associated with a specific project.

![Get Reports by Project ID Example](./images/getReports.png)

---

#### **3. Get Reports with Redundant Words**
- **Route:** `GET /reports/redondant`
- **Middleware:** `authenticate`
- **Handler:** `getAllReportsWithRedondantWords`
- **Description:** Retrieves all reports containing redundant words.

![Get Reports with Redundant Words Example](./images/redondantReports.png)

---

#### **4. Get All Reports**
- **Route:** `GET /reports/`
- **Middleware:** `authenticate`
- **Handler:** `getAllReports`
- **Description:** Retrieves all reports.

![Created a New Report Example](./images/createdReport.png)

---

#### **5. Update a Report**
- **Route:** `PUT /reports/:id`
- **Middleware:** `authenticate`
- **Handler:** `updateReport`
- **Description:** Updates a specific report by its ID.

```
{ "text": "First text test for Reports updated. Quantum computer is a Quantum physics field talking about Quantum Qubit"}
```
![Update a Report Example](./images/putReports.png)

---

#### **6. Delete a Report**
- **Route:** `DELETE /reports/:id`
- **Middleware:** `authenticate`
- **Handler:** `deleteReport`
- **Description:** Deletes a specific report by its ID.


---

### **Projects API**

#### **1. Create a New Project**
- **Route:** `POST /projects/`
- **Middleware:** `authenticate`
- **Handler:** `createProject`
- **Description:** Creates a new project.
```
{ "id": "3", "name": "New Project", "description": "Project Description" }
```
![Create a New Project Example](./images/postProjects.png)
![Create a New Project Example](./images/createdProject.png)

---

#### **2. Get All Projects**
- **Route:** `GET /projects/`
- **Middleware:** `authenticate`
- **Handler:** `getAllProjects`
- **Description:** Retrieves all projects.

![Get All Projects Example](./images/getProjects.png)

---

#### **3. Get a Project by ID**
- **Route:** `GET /projects/:id`
- **Middleware:** `authenticate`
- **Handler:** `getProjectById`
- **Description:** Retrieves a specific project by its ID.

![Get a Project by ID Example](./images/getProjectById.png)

---

#### **4. Update a Project**
- **Route:** `PUT /projects/:id`
- **Middleware:** `authenticate`
- **Handler:** `updateProject`
- **Description:** Updates a specific project by its ID.
```
{ "name": "Updated Project Name", "description": "Updated Project Description" }
```
![Update a Project Example](./images/putProjects.png)

---

#### **5. Delete a Project**
- **Route:** `DELETE /projects/:id`
- **Middleware:** `authenticate`
- **Handler:** `deleteProject`
- **Description:** Deletes a specific project by its ID.

![Delete a Project Example](./images/deleteProjects.png)
![Delete a Project Example](./images/deletedProject.png)

---

## Notes

- The project uses a hardcoded authentication token (`Password123`) for securing API routes.
- Ensure the `dps_diagram.drawio` file is in the root folder to view the folder structure diagram.
