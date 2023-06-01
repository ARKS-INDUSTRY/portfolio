import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from_email = "rockymailservice@gmail.com"
password = "ufmldqaojgoithbl"
def replyMail(userEmail):
    message = MIMEMultipart("alternative")
    message["Subject"] = "You sent me a message man!!"
    message["From"] = from_email
    message["To"] = userEmail
    html_code="""
    This mail is to inform you about your submission of a message in my portfolio website.
    <html>
                <body>
                
 

<div class="card">
    <h1>Thank you for sending me a message</h1>
    <p>Your message successfuly sent to me..</p>
    <img src="https://raw.githubusercontent.com/ARKS-INDUSTRY/just-image/main/msg.jpg" height="auto" width="350px" >
    <p>You will soon hear a reply from me</p>
    <div class="yours"><p class="end">Yours faithfully<br>Rakesh</p></div>
</div>

</body>
</html>
    """
   
    html_part = MIMEText(html_code, "html")
    
    message.attach(html_part)
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(from_email, password)
        server.sendmail(from_email, userEmail, message.as_string())

def mailing(usermail,msg):
    context = ssl.create_default_context()
    port = 465  # For SSL
    smtp_server = "smtp.gmail.com"
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        message= f"""user = {usermail}\n msg:{msg}"""
        server.login(from_email, password)
        server.sendmail(from_email, from_email, message)


