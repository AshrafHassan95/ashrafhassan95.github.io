# Portfolio Website - Python Web Server

This portfolio website is powered by Flask, a lightweight Python web framework.

## Prerequisites

- Python 3.7 or higher
- pip (Python package installer)

## Setup Instructions

### 1. Install Dependencies

```bash
# Activate virtual environment (if not already activated)
source venv/bin/activate

# Install required packages
pip install -r requirements.txt
```

### 2. Run the Server

#### Option A: Using the run script
```bash
./run.sh
```

#### Option B: Direct Python execution
```bash
# Activate virtual environment
source venv/bin/activate

# Run the Flask app
python app.py
```

#### Option C: Using Flask CLI
```bash
# Activate virtual environment
source venv/bin/activate

# Set Flask app environment variable
export FLASK_APP=app.py

# Run with Flask CLI
flask run
```

## Access the Website

Once the server is running, open your browser and navigate to:
```
http://localhost:5000
```

The server will display:
- Your portfolio homepage
- All static assets (CSS, JavaScript, images)
- Your resume PDF

## Configuration

### Change Port
By default, the server runs on port 5000. To change it:

```bash
# Set PORT environment variable
export PORT=8080
python app.py
```

### Debug Mode
Debug mode is enabled by default for development. To disable it for production:

Edit `app.py` and change:
```python
app.run(host='0.0.0.0', port=port, debug=False)
```

## Project Structure

```
.
├── app.py                 # Flask application
├── index.html            # Main portfolio page
├── assets/               # CSS, JavaScript, fonts
├── images/               # Portfolio images
├── *.pdf                 # Resume files
├── requirements.txt      # Python dependencies
└── venv/                 # Virtual environment
```

## Features

- Serves static HTML portfolio
- Routes for all pages (index, generic, elements)
- Serves assets (CSS, JS, images)
- PDF resume download
- 404 error handling
- Configurable port
- Debug mode for development

## Stopping the Server

Press `CTRL + C` in the terminal to stop the server.

## Deployment

For production deployment, consider using:
- **Gunicorn**: Production WSGI server
- **Docker**: Containerized deployment
- **Cloud platforms**: Heroku, AWS, Google Cloud, Azure

### Example with Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## Troubleshooting

### Port already in use
If you see "Address already in use", either:
1. Stop the process using that port
2. Change the port number

### Virtual environment issues
If venv doesn't exist:
```bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Contact

For issues or questions, contact:
- Email: ashraf950901@gmail.com
- LinkedIn: linkedin.com/in/ahmadashrafhassan
- GitHub: github.com/AshrafHassan95
