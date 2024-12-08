from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("professional.html")

@app.route("/personal")
def personal():
    return render_template("personal.html")

@app.route("/professional")
def professional():
    return render_template("professional.html")




