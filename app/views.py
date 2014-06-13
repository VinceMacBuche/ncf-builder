from flask import render_template
from app import app

@app.route('/')
@app.route('/index')
def root():
    return app.send_static_file('index.html')

import os
@app.route('/js/<path:path>')
def static_proxy(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('js', path))

@app.route('/fonts/<path:path>')
def static_fonts(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('fonts', path))

@app.route('/css/<path:path>')
def static_css(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('css', path))


from flask import Flask, jsonify
import ncf

@app.route('/api/techniques', methods = ['GET'])
def get_techniques():
    techniques = ncf.get_all_techniques_metadata()
    return jsonify( techniques )

@app.route('/api/generic_methods', methods = ['GET'])
def get_generic_methods():
    generic_methods = ncf.get_all_generic_methods_metadata()
    return jsonify( generic_methods )

from flask import request

@app.route('/api/techniques', methods = ['POST'])
def create_technique():
    if not request.json:
        abort(400)
    path = request.json['path']
    technique = request.json['technique']
    ncf.write_technique_file(path,technique)
    return jsonify( technique ), 201

if __name__ == '__main__':
    app.run(debug = True)
