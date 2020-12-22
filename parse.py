import json
import requests


#Download raw json from api

url= "https://api.punkapi.com/v2/beers/random"
data = requests.get(url).json()
d = json.dumps(data)

#parse json object

obj = json.loads(d)

# Ouptput some of the data
#print (obj)
print('Name: ' + obj[0]['name'])
print('Description: ' + obj[0]['description'])
print('Image: ' + obj[0]['image_url'])