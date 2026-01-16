"""
Flask Web Server for Ashraf Hassan's Portfolio
A simple web server to serve the portfolio website
"""

from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__,
            static_folder='.',  # Serve static files from root directory
            template_folder='.')  # Templates from root directory

@app.route('/')
def index():
    """Serve the main portfolio page"""
    return render_template('index.html')

@app.route('/generic.html')
def generic():
    """Serve the generic page"""
    return render_template('generic.html')

@app.route('/elements.html')
def elements():
    """Serve the elements page"""
    return render_template('elements.html')

@app.route('/assets/<path:path>')
def send_assets(path):
    """Serve static assets (CSS, JS, fonts)"""
    return send_from_directory('assets', path)

@app.route('/images/<path:path>')
def send_images(path):
    """Serve images"""
    return send_from_directory('images', path)

@app.route('/<path:filename>')
def send_file(filename):
    """Serve other files like PDFs"""
    return send_from_directory('.', filename)

@app.errorhandler(404)
def not_found(e):
    """Handle 404 errors"""
    return "File not found", 404

if __name__ == '__main__':
    # Get port from environment variable or default to 8000
    port = int(os.environ.get('PORT', 8000))

    print(f"Starting Flask server on http://localhost:{port}")
    print("Press CTRL+C to quit")

    # Run the Flask app
    app.run(host='0.0.0.0', port=port, debug=True)
