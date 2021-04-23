# import dependencies
from flask import Flask, render_template, redirect, request
from config import password
from sqlalchemy import create_engine
import psycopg2, json, collections
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import datetime as dt

# Create an instance of Flask
app = Flask(__name__)


# connect to Postgres
#engine = create_engine(f"postgresql://postgres:{password}@localhost/Earthquakes_db")
#conn = engine.connect()
conn = psycopg2.connect(host='localhost', dbname='Earthquakes_db', user='postgres', password='wea33pon')
cursor = conn.cursor()


# create home route and define home function
@app.route("/")
def home():
    # Find one record of data from the mongo database
    cursor.execute("SELECT e.id,e.type,e.depth,e.mag,l.city,l.county,l.state,l.country FROM earthquake e, location l WHERE e.id = l.id")
    rows = cursor.fetchall()

    rowarray_list = []

    for row in rows:
        t = (row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7])
        rowarray_list.append(t)

    j = json.dumps(rowarray_list)

    with open("Resources/Earthquakes.json", "w") as f:
        f.write(j)


    # Convert query to objects of key-value pairs
    objects_list = []
    for row in rows:
        d = collections.OrderedDict()
        d["id"] = row[0]
        d["type"] = row[1]
        d["depth"] = row[2]
        d["mag"] = row[3]
        d["city"] = row[4]
        d["county"] = row[5]
        d["state"] = row[6]
        d["country"] = row[7]
        objects_list.append(d)

    j = json.dumps(objects_list)

    with open("Resources/Earthquakes.json", "w") as f:
        f.write(j)

    conn.close()

    # Return template and data
    return render_template("index.html")


# run the app
if __name__ == "__main__":
    app.run(debug=True)