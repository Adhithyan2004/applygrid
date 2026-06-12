# Features

## Authentication

- Signup
- Login
- Logout
- Refresh Token

## Applications

- Create application (POST)
- Edit Application (PATCH)
- Delete Application (DELETE)
- View All Application (GET)
- View Single Application (GET)

## Dashboard

- Application metrics
- Success Rate
- Rejection Rate
- Recent Application
- Recent Activity
- Most applied designation (Not yet implemented)

# Feature Breakdown

## Application

### Create Application

**Purpose:** <br/>
Store a job application

**Requierd Fields:** <br/>

- companyName
- role

**Optional ones:** <br/>

- expLvl
- location
- salary
- note

**Default Values:** <br/>

- currentStatus: APPLIED
- experienceLevel: INTERN

### Update status in application

**Purpose:** <br/>
Update the status of an application

**Required Fields:** <br/>

- status

**Optional Fields:** <br/>

- note

### Delete application

**Purpose:** <br/>
Delete an application

**Required Fields:** <br/>

- id (application id)

### Update application

**Purpose:** <br/>
Update data in an application

**Fields:** <br/>

- any fields that are passed in the body

## Authentication

### SignUp user

**Purpose:** <br/>
Create/Sign up an user

**Requierd Fields:** <br/>

- name
- email
- password

### Login user

**Purpose:** <br/>
Login User

**Required Fields:** <br/>

- email
- password

### Logout user

**Purpose:** <br/>
Logout of the session

### Refresh Token

**Purpose:** <br/>
To refresh the accessToken

**Requirements:** <br/>

- user should be signed in
- refreshToken from the cookies

### Delete user

**Purpose:** <br/>
Delete an user

**Required Fields:** <br/>

- id (user id)

## Dashboard

## Stats

**Purpose:** <br/>
To display

- overview
- metrics
- recentActivity
- recentApplications

**Requierments:** <br/>

- user should be authenticated
