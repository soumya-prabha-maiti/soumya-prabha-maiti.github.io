---
title: "Hate Speech Classification using LSTM"
date: 2023-03-01
categories: ["machine learning"]
tags: ["Natural Language Processing", "LSTM", "Python", "TensorFlow", "Gradio", "HuggingFace Spaces"]
summary: "An LSTM model to classify input text as hate speech or not."
cover:
  image: "https://raw.githubusercontent.com/soumya-prabha-maiti/hate-speech-classification/main/readme_images/demo.jpg"
  alt: "Hate Speech Classification"
  relative: false
hidemeta: true
---

A project to classify input text as **hate speech** or **not hate speech** using an LSTM (Long Short-Term Memory) neural network.

## Dataset
Trained on:
- **Hate Speech and Offensive Language** dataset
- **Twitter hate speech dataset** from Kaggle

## Model
An LSTM-based recurrent neural network which is well-suited for sequential text data, capturing long-range dependencies in language.

## Tech Stack
| Component | Technology |
|-----------|-----------|
| Model | LSTM (TensorFlow / Keras) |
| NLP Preprocessing | Python (tokenization, padding) |
| Frontend | Gradio |
| Deployment | HuggingFace Spaces |

## Links
- [View Source Code on GitHub](https://github.com/soumya-prabha-maiti/hate-speech-classification)
- [Try the Live App](https://huggingface.co/spaces/soumyaprabhamaiti/hate_speech_classifier)
