#!/bin/bash
# Run the Flask web server for Ashraf Hassan's Portfolio

echo "Starting Flask web server..."
echo "================================"

# Activate virtual environment
source venv/bin/activate

# Set PORT to 8000 if not already set (avoiding port 5000 conflict)
export PORT=${PORT:-8000}

# Run the Flask application
python app.py
