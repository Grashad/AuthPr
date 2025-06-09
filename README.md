![image](https://github.com/user-attachments/assets/676cbfab-a0fc-476f-991c-208fef023f69)

Frontend (React) → Axios POST → Backend (Express.js) → MongoDB User Validation → Bcrypt Password Hashing → User Persistence

>>Key Technical Components:

    Client-Side
    React captures user credentials → Axios sends encrypted HTTPS POST request to /register endpoint

    Server-Side Validation
    Express.js controller checks MongoDB for existing user via User.findOne()
   

    Credential Processing
    Unique users trigger password hashing via bcrypt.hash()
   

    Data Persistence
    Mongoose creates new user document
