from flask import *
import database
import json
import contact
app = Flask(__name__)

@app.route('/')
def landing_page():
    #database.skillData()
    return render_template("index.html", Sdatas = skills,Pdatas =projects)

@app.route('/get_url_rocky_projects/<filename>')
def get_static_url(filename):
    # Use the url_for function to generate the URL for the static file
    url = url_for('static', filename=f'Resources/{filename}')
    return url

@app.route("/v1/api/rocky/")
def data_api():
    data_Set=[database.skillData(),database.projectData()]
    return  jsonify(data_Set)

@app.route("/sendMail/",methods = ['POST'])
def sendMail():
    email = request.form.get('email', "emailing@gmail.com")
    msg = request.form.get("msg","none")
    contact.replyMail(email)
    contact.mailing(email,msg)
    return render_template("contacts.html")


@app.errorhandler(404)
def error_page(e):
    return render_template("404.html")

Sdatas = database.skillData()
skills = Sdatas["skills"]
Pdatas = database.projectData()
projects = Pdatas["projects"]


if __name__ == "__main__":
    app.run(host="0.0.0.0",debug=True)



