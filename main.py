from flask import Flask, request, abort
import requests



app = Flask(__name__)

@app.route("/", methods=['POST', 'PUT', 'PATCH', 'GET'])
def webhook():
  url = request.args.get('URL')
  f = open("page.html", 'w')
  f.write(requests.get(url).text)
  f.close()
  return app.send_static_path("page.html")
  



if __name__ == '__main__':
    app.run(host='0.0.0.0', port='1858')