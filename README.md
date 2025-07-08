# File-Management-Web-Application
This is a simple file management web application built with Node.js, Express, and EJS. It allows users to view, create, edit, and delete text files through a web interface.

🌟 # Features of the File Manager App :-

View a list of all text files in the files directory

Create new text files with custom titles and content

View the contents of any file

Edit file names

Delete files

Simple and intuitive user interface

# Installation
Clone this repository to your local machine:
bash: git clone https://github.com/your-username/your-repo-name.git

Navigate to the project directory:
bash: cd your-repo-name

Install the required dependencies:
bash: npm install

Create a files directory in the project root (this is where the application will store all files):
bash: mkdir files

# Usage
Start the application:
bash : node index.js

Open your web browser and navigate to:

text: http://localhost:3000

# Use the web interface to:

View all files

Create new files

View file contents

Edit file names

Delete files

# Project Structure
.
├── files/                  # Directory where all text files are stored
│   ├── Playlist.txt        # Example file
│   └── Power.txt           # Example file
├── public/                 # Static files (CSS, JS, images)
├── views/                  # EJS templates
│   ├── edit.ejs            # Edit file name page
│   ├── index.ejs           # Main page with file list
│   └── show.ejs            # File content view page
├── index.js                # Main application file
├── package.json            # Project configuration and dependencies
└── package-lock.json       # Automatic dependency tree

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


