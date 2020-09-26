from app.base_handler import BaseHandler
import json
import ast 

class ListDevices(BaseHandler):
	def initialize(self, objApi):
		self.objApi = objApi

	def get(self):
		response = None
		if (self.objApi["redis_client"].conn.exists("registered_endpoints")):
			registered_endpoints_list_raw = self.objApi["redis_client"].conn.get("registered_endpoints")
			registered_endpoints_list = ast.literal_eval(registered_endpoints_list_raw.decode("utf-8"))
			response = registered_endpoints_list
		elif (self.objApi["registered_devices"] != None):
			registered_endpoints_list_in_memory = self.objApi["registered_devices"]
		
		self.write({'registered_devices': response})

class RegisterDeviceGet(BaseHandler):
	def initialize(self, objApi):
		self.objApi = objApi

	def get(self, device_id):
		pass

class RegisterDevicePost(BaseHandler):
	def initialize(self, objApi):
		self.objApi = objApi

	def post(self):
		if (self.request.body):
			data = json.loads(self.request.body)
			registered_endpoints = self.objApi["redis_client"].conn.get("registered_endpoints")
			if (registered_endpoints == None):
				self.objApi["redis_client"].conn.set("registered_endpoints", "['%s']" % data["newDeviceEndpoint"])
			else:
				registered_endpoints_list = registered_endpoints.decode("utf-8")
				registered_endpoints_list = ast.literal_eval(registered_endpoints.decode("utf-8"))
				registered_endpoints_list.append(data["newDeviceEndpoint"])
				self.objApi["registered_endpoints"] = registered_endpoints_list
				self.objApi["redis_client"].conn.set("registered_endpoints", str(registered_endpoints_list))

			self.objApi["redis_client"].conn.hmset(data["newDeviceName"], data)
			self.set_status(200)
			self.write({"Status": "200 Successfully Registered"})

class RemoveDevicePost(BaseHandler):
	def initialize(self, objApi):
		self.objApi = objApi

	def delete(self):
		if (self.request.body):
			data = json.loads(self.request.body)
			registered_endpoints = self.objApi["redis_client"].conn.get("registered_endpoints")
			if (registered_endpoints == None):
				#TODO clear out obj api registered devices references
				self.set_status(200)
				self.write({"Status": "200 Successfully Deleted"})
			else:
				registered_endpoints_list = registered_endpoints.decode("utf-8")
				registered_endpoints_list = ast.literal_eval(registered_endpoints.decode("utf-8"))
				registered_endpoints_list.remove(data["device"])
				self.objApi["registered_endpoints"] = registered_endpoints_list
				self.objApi["redis_client"].conn.set("registered_endpoints", str(registered_endpoints_list))

			self.objApi["redis_client"].conn.delete(data["device"])
			self.set_status(200)
			self.write({"Status": "200 Successfully Deleted"})