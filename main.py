# Homework #4
# Project Name: Catch These Hands
# November 20, 2018
# Author 1: Keziah Rezaey - 946961211
# Author 2: Moriah Scott - 993922204

import webapp2
import os
import jinja2

jinja_env = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class HomeHandler(webapp2.RequestHandler):
    def get(self):
        home_template = jinja_env.get_template("index.html")
        self.response.write(home_template.render())

app = webapp2.WSGIApplication([
    ('/', HomeHandler)
], debug=True)
