# API Flows

## Authentication

## Login
User <br/>
↓ <br/>
Enters Email + Password <br/>
↓ <br/>
POST /auth/login <br/>
↓ <br/>
loginController <br/>
↓ <br/>
loginUserService <br/>
↓ <br/>
Find User by Email from DB <br/>
↓ <br/>
Compare Password Hash <br/>
↓ <br/>
Genetare accessToken (15mins) <br/>
↓ <br/>
Generate refreshToken (7days) <br/>
↓ <br/>
Store refreshToken in DB <br/>
↓ <br/>
Set HttpOnly Cookies (access and refresh token) <br/>
↓ <br/>
Return Success Response and redirect user to dashboard page<br/>

### Signup
User <br/>
↓ <br/>
Enters Name, Email and Password <br/>
↓ <br/>
POST /auth/signup <br/>
↓ <br/>
signupController <br/>
↓ <br/>
registerUser <br/>
↓ <br/>
Register user and store in DB <br/>
↓ <br/>
Return Success Response<br/>

### Logout 
User <br/>
↓ <br/>
Log out <br/>
↓ <br/>
POST /auth/logout <br/>
↓ <br/>
logoutContoller <br/>
↓ <br/>
logoutUserService <br/>
↓ <br/>
Remove refreshToken from the DB<br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Navigate user to signin/log in page or home page<br/>

### Delete user (Super Admin)
 Super user <br/>
↓ <br/>
Deletee User<br/>
↓ <br/>
DELETE /auth/:id <br/>
↓ <br/>
deleteUserController <br/>
↓ <br/>
deleteUserService <br/>
↓ <br/>
Compare the id with users id in the DB <br/>
↓ <br/>
Remove user from the DB<br/>
↓ <br/>
Return success message <br/>

### Refresh Token
User makes request <br/>
↓ <br/>
refresh token expired<br/>
↓ <br/>
calls POST /auth/refresh <br/>
↓ <br/>
refreshController <br/>
↓ <br/>
read refreshToken form cookies  and verify it <br/>
↓ <br/>
refreshAccessToken<br/>
↓ <br/>
comparea and generate new accesstoken<br/>
↓ <br/>
Alllow user to make requests again

## Application

### Create Application
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Add required fields <br/>
↓ <br/>
POST /applications <br/>
↓ <br/>
applicationController <br/>
↓ <br/>
createApplication <br/>
↓ <br/>
Add application to the DB <br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Dispaly the added application <br/>

### Get all applications
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Navigate to applications page <br/>
↓ <br/>
GET /applications <br/>
↓ <br/>
getAllApplicationContoller <br/>
↓ <br/>
getAllApplicationService <br/>
↓ <br/>
Retrive all applications from the DB (applications belong to the user) <br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Dispaly all the applications <br/>

### Delete an application
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Select application to delete <br/>
↓ <br/>
DELETE /applications/:id <br/>
↓ <br/>
deleteApplicationController <br/>
↓ <br/>
deleteApplicationService <br/>
↓ <br/>
Remove application and the applicationStatusHistory form the DB<br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Delete application refetch and rerender <br/>

### Update application status
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Select application to update the status <br/>
↓ <br/>
PATCH /applications/:id/status <br/>
↓ <br/>
applicationUpdateStatusController <br/>
↓ <br/>
updateApplicationStatus <br/>
↓ <br/>
Update application status in applciationStatusHistory table in DB<br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Update application status refetch and rerender <br/>

### Update application
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Select application to update  <br/>
↓ <br/>
PATCH /applications/:id <br/>
↓ <br/>
updateApplicationController <br/>
↓ <br/>
updateApplicationService <br/>
↓ <br/>
Update application in DB<br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Update application refetch and rerender <br/>

### Get single application
User <br/>
↓ <br/>
Logs in <br/>
↓ <br/>
Select single application <br/>
↓ <br/>
GET /applications/:id <br/>
↓ <br/>
getSingleApplicationContoller <br/>
↓ <br/>
getSingleApplicationService <br/>
↓ <br/>
Retrive teh request applciation from the DB using id<br/>
↓ <br/>
Return success message <br/>
↓ <br/>
Display selected applciation <br/>

## Dashboard

User logs in<br/>
↓ <br/>
dashboard page renders<br/>
↓ <br/>
calls GET /dashboard <br/>
↓ <br/>
getDashboardController <br/>
↓ <br/>
getDashboardService <br/>
↓ <br/>
calls other services getOverviewStats, getMetrics, getRecentApplications, getRecentActivity<br/>
↓ <br/>
Return all the stats <br/>
↓ <br/>
Display stats in the dashboard page<br/>
