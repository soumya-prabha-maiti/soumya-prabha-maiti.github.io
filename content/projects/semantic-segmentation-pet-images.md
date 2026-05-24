---
title: "Semantic Segmentation of Pet Images"
date: 2023-02-01
categories: ["machine learning"]
tags: ["Deep Learning", "Computer Vision", "U-Net", "Python", "TensorFlow", "Gradio", "HuggingFace Spaces"]
summary: "A web app that segments pet images into foreground, background, and boundary using U-Net."
cover:
  image: "https://raw.githubusercontent.com/soumya-prabha-maiti/image-segmentation-web-app/main/readme_images/image.png"
  alt: "Semantic Segmentation of Pet Images"
  relative: false
hidemeta: true
---

A web app that segments the image of a pet animal into **three regions**:
- **Foreground** (the pet)
- **Background**
- **Boundary**

It uses a **U-Net** model trained on the Oxford-IIIT Pet Dataset and is deployed using Gradio.

## Architecture
The U-Net architecture is a convolutional neural network originally developed for biomedical image segmentation. Its encoder-decoder structure with skip connections makes it excellent for pixel-level segmentation tasks.

## Tech Stack
| Component | Technology |
|-----------|-----------|
| Model | U-Net (TensorFlow / Keras) |
| Dataset | Oxford-IIIT Pet Dataset |
| Frontend | Gradio |
| Deployment | HuggingFace Spaces |

## Links
- [View Source Code on GitHub](https://github.com/soumya-prabha-maiti/image-segmentation-web-app)
- [Try the Live App](https://huggingface.co/spaces/soumyaprabhamaiti/image_segmentation_web_app)
