# Student-Management-System
<h2 align="left"> Introduction:</h2>

A student management system is one crucial tool meant to simplify administrative and academic data processing for students. Combining users and courses this logical strategy offers effective management of student records, enrollment, and academic progress.

<h2 align="left">Key Features:</h2>

1. **User Management:**
    - logs data of many users, including professors, administrators, and students.
    - manages user degrees of access and roles to increase organization and security.
2. **Course Management:**
    - Simplifies in course management planning, updating, and development.
    - assigns courses to students and monitors their progress.

<h2 align="left"> Tools Used:</h2>

![Zendevx Technology](https://github.com/user-attachments/assets/36c979fe-929e-44a4-8958-9c15dc466e35)

<h2 align="left"> Testing Tools Used:</h2>

![PostMan Github](https://github.com/user-attachments/assets/3381c639-715f-40b9-85d3-08384553ee12)

<h2 align="left">Library:</h2>

- bcryptjs
- connect-mongo
- body-parser
- cors
- dotenv
- express
- express-session
- express-validator
- jsonwebtoken
- mongoose
- nodemon
- validator

<h2 align="left">Database Structure</h2>

The platform will require a relational database to manage User and Course . Below is a proposed database structure with the key tables.

<h3 align="left">Tables:</h3>

---

### a) Course

| **Field Name** | **Type** |
| --- | --- |
| title | String |
| desc | String |
| lecturer | String |
| lecturhour | Number |
| praticeHours | Number |
| credits | Number |

### b)  User

| **Field Name** | **Type** |
| --- | --- |
| course:[{

course_id: {
courseid_info: { type: String }},

registrationdate: { type: Date }}], | String |
| firstname | String |
| lastName | String |
| email | Number |
| phonenumber | String |
| isadmin | Boolean |
| password | String |
| isverified | Boolean |

<h2 align="left"> Use Cases: </h2>

1. **Student Enrollment and Registration**
- **Description:** Students are free to register and sign-up for the offered classes. Directors oversee the clearance system.
- **Actors:** Students, Administrators
- **Primary Flow:**
    1. Student creates an account.
    2. assigns courses based on availability.
    3. Administrator consent to participate.
    4. Confirmation is sent to the student.

2. **User Role Management**
- **Description:**assigns and oversees administrative, teacher, and student responsibilities. Main flow agents are managers.
- **Actors:** Administrators
- **Primary Flow:**
    1. One establishes roles right out of user registration in administration.
    2. Two roles change in line with changing duties.
    3. Role credentials define system access.

3. **Course Management**
- **Description:** Create, update, and manage course offerings and schedules.
- **Actors:** Teachers, Administrators
- **Primary Flow:**
    1. Teacher or administrator adding a new course
    2. Lists courses together with their calendar.
    3. Updates or deletions depending on course necessity.

4. **Student Profile Management**
- **Description:** Preserving comprehensive profiles of every student including personal information, academic records, and extracurricular activities, Student Profile Management Students, Administrators:
- **Actors:** Students, Administrators
- **Primary Flow:**
    1. Students update personal information as needed.
    2. Two systems create profiles combining activity data with academic comments.
    3. Authorized users look through profiles.

<h2 align="left">Development with ZenDevx:</h2>

<a href="https://www.zendevx.com/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/7dd7220f-e83c-4490-9ac2-beab3bcf8c35" alt="ZenDevX" height="auto" width="auto" /></a>

<h2 align="left">🐦 Connect With Me:</h2>
<a href="https://www.linkedin.com/company/zendevx/" target="blank"><img align="center" src="https://github.com/user-attachments/assets/9a6080ca-4265-43e5-8652-9454651970a9" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://www.youtube.com/@zendevx" target="blank"><img align="center" src="https://github.com/user-attachments/assets/1beefdd6-fa17-49c9-bde7-e8f30f539b96" alt="ZenDevX" height="50" width="50" /></a>
<a href="https://x.com/IamZenDevX" target="blank"><img align="center" src="https://github.com/user-attachments/assets/f1eeb865-3d23-407a-9a2b-d76b4e85c6dd" alt="ZenDevX" height="50" width="50" /></a>

I hope you like the project. Thanks for reading :)
