# File-Management-Web-Application
This is a simple file management web application built with Node.js, Express, and EJS. It allows users to view, create, edit, and delete text files through a web interface.

# Features of the File Manager App :-

- View a list of all text files in the files directory

- Create new text files with custom titles and content

- View the contents of any file

- Edit file names

- Delete files

- Simple and intuitive user interface

# Installation
Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

2. **Navigate to the Project Directory:**
   
   ```bash
   cd your-repo-name
   
4. **Install Required Dependencies:**

   ```bash
   npm install


## 🚀 Usage

### ▶️ Step 1: Start the Application

  ```bash
  node index.js

🌐 Step 2: Open in Browser
Navigate to the following URL in your browser: http://localhost:3000

# Use the web interface to:

View all files

Create new files

View file contents

Edit file names

Delete files

# Project Structure
![image](https://github.com/user-attachments/assets/d2032bf8-96dd-4f27-a33c-b093c2257edb)


# Dependencies
Express - Web framework for Node.js
EJS - Embedded JavaScript templating
Built-in Node.js modules: fs, path

# API Endpoints
GET / - View all files
GET /file/:filename - View a specific file's contents
GET /edit/:filename - Edit a file's name
POST /edit - Process file name change
POST /delete - Delete a file
POST /create - Create a new file

# Screenshots
![image](https://github.com/user-attachments/assets/37df8183-b280-4b25-b65f-c38bb4b97c69)


