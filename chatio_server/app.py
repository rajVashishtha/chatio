from flask import Flask
from flask_socketio import SocketIO, emit
from config import Config
from flask_cors import CORS

app = Flask(__name__)
# app.config.from_object(Config)
app.config['SECRET_KEY'] = 'secret!'
CORS(app)
# Extensions
socketio = SocketIO(app, cors_allowed_origins="*")
# cors = CORS(app,resources={r"/*":{"origins":"*"}})

#CORS(app, resources={r"/*": {"origins": "*"}}, automatic_options=True)



@app.route('/')
def hello_world():
    return 'Hello World!'


@socketio.on("connect")
def test_connect():
    print("connected socket")
    emit('conn',{"data":"connected"})

#
# @socketio.on('connect')
# def test_connect():
#     emit('conn', {'data': 'Connected Successfully'})


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')


@socketio.on('send')
def test_message(message):
    print(message)
    emit('message', {'data': message})


@socketio.on('my event')
def test_my_event(arr):
    print("event")


@socketio.on('typing')
def test_typing():
    emit('typing', {'data': 'typing...'})


@app.route('/api')
def api():
    return "Yes, its works"


if __name__ == '__main__':
    socketio.run(app)
    # app.run()
