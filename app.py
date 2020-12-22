from flask import Flask
import os

app = Flask(__name__)

@app.route('/')

def index():
    return os.system('parse.py')

if __name__ == "__main__":
    app.run(debug=True)