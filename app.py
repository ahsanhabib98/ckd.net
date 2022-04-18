from operator import rshift
from tkinter.tix import Tree
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS, cross_origin
from tensorflow import keras
import numpy as np
import pickle

app = Flask(__name__, template_folder='build', static_folder='build/static')

CORS(app)

@app.route('/')
def home():
    template = 'index.html'
    return render_template(template)

@app.route('/api/predict-ckd-hybrid/', methods=['POST'])
@cross_origin()
def predict_ckd_hybrid_model():
    request_data = request.get_json()
    inputs = []
    for key, value in request_data.items():
        inputs.append(float(value))
    scaler = pickle.load(open('ckd_hybrid/ckd_hybrid_scaler.pkl', 'rb'))
    inputs = np.array([inputs])
    scaler_inputs = scaler.transform(inputs)
    model = pickle.load(open('ckd_hybrid/ckd_hybrid_model.pkl', 'rb'))
    result = model.predict(scaler_inputs)
    payload = {}
    for i, value in enumerate(result[0]):
        payload["Stage {}".format(i+1)] = str(value)
    print(payload)
    return jsonify(payload)

@app.route('/api/predict-ckd-gfr/', methods=['POST'])
def predict_ckd_gfr_model():
    request_data = request.get_json()
    inputs = []
    for key, value in request_data.items():
        inputs.append(float(value))
    scaler = pickle.load(open('ckd_gfr/ckd_gfr_scaler.pkl', 'rb'))
    inputs = np.array([inputs])
    scaler_inputs = scaler.transform(inputs)
    model = pickle.load(open('ckd_gfr/ckd_gfr_model.pkl', 'rb'))
    result = model.predict(scaler_inputs)
    payload = {
        "GFR": str(result[0][0])
    }
    return jsonify(payload)

if __name__ == "__main__":
    app.run(debug=True)