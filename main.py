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
