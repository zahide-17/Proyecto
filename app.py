from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/compare')
def compare():
    return render_template("compare.html")

@app.route('/list')
def lista_deseos():
    return render_template("list.html")


if __name__ == '__main__':
    app.run(debug = True)

