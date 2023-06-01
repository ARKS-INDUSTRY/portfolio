from sqlalchemy import create_engine, text
import json
engine = create_engine("mysql+pymysql://ytgyz11slzc1ye83tbr5:pscale_pw_jXswulzwDsGcm4Nqeultrlg0oAhY4C6Pmp9KhxlyPid@aws.connect.psdb.cloud/rockyfolio?charset=utf8mb4",connect_args={
    "ssl": {
      "ssl_ca": "/etc/ssl/cert.pem"
    }
  })



def skillData():
    data = {"skills":[]}
    with engine.connect() as conn:
      result = conn.execute(text("select * from Skill"))
      for i in result.all():
          data["skills"].append({"id":i[0],"skill":i[1],"cert_id":i[2],"percentage":i[3],"description":i[4]})
    return data

def projectData():
    data = {"projects":[]}
    with engine.connect() as conn:
        result = conn.execute(text("select * from projects"))
        for i in result.all():
            data["projects"].append({"id":i[0],"title":i[1],"description":i[2],"link":i[3],"file":i[4]})
      
    return data
