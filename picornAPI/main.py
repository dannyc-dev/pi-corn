import configparser 
from app.redis_client import RedisClient
from app.server import ListDevices
from app.server import RegisterDeviceGet, RegisterDevicePost
from app.server import RemoveDevicePost
from tornado.web import Application
from tornado.ioloop import IOLoop
from collections import defaultdict

objApi = defaultdict(dict)

def store_in_objApi(key, value):
    objApi[key] = value

def init_api():
    config = configparser.ConfigParser()
    config.read('app/config/config.ini')
    #TODO set this to os env for multi env deployments
    config_env = config.items('dev')
    config_dict = dict((x, y) for x, y in config_env)
    client = RedisClient(config_dict["elasticache_url"], config_dict["elasticache_port"], config_dict["db"])
    store_in_objApi("redis_client", client)
    store_in_objApi("config", config_dict)


def create_api():
    global objApi
    init_api()
    urls = [
        ("/devices", ListDevices, dict(objApi=objApi)),
        (r"/register/([0-9]+)", RegisterDeviceGet, dict(objApi=objApi)),
        ("/register", RegisterDevicePost, dict(objApi=objApi)),
        ("/delete", RemoveDevicePost, dict(objApi=objApi))
    ]
    return Application(urls)
  
if __name__ == '__main__':
    print("Listening...")
    app = create_api()
    app.listen(8080)
    IOLoop.instance().start()