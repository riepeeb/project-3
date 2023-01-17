# import necessary libraries
from flask import Flask, jsonify,  render_template
from sqlalchemy import create_engine, inspect
from flask import json

from config import username, password, host, port, database_name


app = Flask(__name__)
engine = create_engine(f"postgresql://{username}:{password}@{host}:{port}/{database_name}")

# create instance of Flask app
#appusername = Flask(__name__)

@app.route("/api/yr_visitors.json")
def yr_visitors():
    results=engine.execute("select * from yr_visitors;")
    return jsonify([dict(x) for x in results])

@app.route("/api/sum_visitors.json")
def sum_visitors():
    results=engine.execute("select * from sum_visitors;")
    return jsonify([dict(x) for x in results])

@app.route("/api/lodge_ovn.json")
def lodge_ovn():
    results=engine.execute("select * from lodge_ovn;")
    return jsonify([dict(x) for x in results])

@app.route("/api/yr_visitors_static.json")
def yr_visitors_static():
    file_path = "API_Data/yr_visitors.json"
    data = JSON.load(open(file_path))
    return data

@app.route("/api/yr_visitors_static.json")
def yr_visitors_static():
    file_path = "API_Data/yr_visitors.json"
    data = json.load(open(file_path))
    return data

@app.route("/page1")
def page1():
    file_path = "API_Data/yr_visitors.json"
    data = json.load(open(file_path))
    return render_template("PageOne.html", data=data)

@app.route("/page2")
def page2():
    file_path = "API_Data/sum_visitors.json"
    data = json.load(open(file_path))
    return render_template("PageOne.html", data=data)

