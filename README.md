ncf-builder
===========

Web interface to create and edit ncf techniques from generic_methods. Uses plain AngularJS &amp; Bootstrap, and Flask.


To prepare it:


python virtualenv.py flask
flask/bin/pip install flask==0.9
flask/bin/pip install flask-login
flask/bin/pip install flask-openid
flask/bin/pip install flask-mail==0.7.6
flask/bin/pip install sqlalchemy==0.7.9
flask/bin/pip install flask-sqlalchemy==0.16
flask/bin/pip install sqlalchemy-migrate==0.7.2
flask/bin/pip install flask-whooshalchemy==0.55a
flask/bin/pip install flask-wtf==0.8.4
flask/bin/pip install pytz==2013b
flask/bin/pip install flask-babel==0.8
flask/bin/pip install flup



If ncf is not in your PYTHONPATH

export PYTHONPATH=/path/to/ncf/tools:$PYTHONPATH

Then start the webapp

./run.py


