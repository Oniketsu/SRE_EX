from flask import Flask, render_template, url_for, json
import requests

app = Flask(__name__)

@app.route('/')
def beer():
    url= "https://api.punkapi.com/v2/beers/random"
    data = requests.get(url).json()
    d = json.dumps(data)
    obj = json.loads(d)
    return('<h1>Name: ' + obj[0]['name'] + '</h1>' '\n<h2>Description: ' + obj[0]['description'] + '</h2>' '\n<h3>Brewers Tips: ' + obj[0]['brewers_tips'] + '</h3>')

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')