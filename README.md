# DroidCapture

A lightweight desktop application for recording Android screens from a Windows PC, with support for device audio and optional microphone recording.

Built with Electron, React, and Vite.

## Overview

DroidCapture is a desktop utility designed to capture Android screen recordings directly from a computer. It aims to provide a simple recording interface without requiring a complicated workflow.

The goal is to make Android screen recording easy to control from a desktop, including recording audio from the Android device and optionally combining it with microphone input.

## Planned Features

- [ ] Android device detection via ADB
- [ ] USB-connected Android device support
- [ ] Screen recording
- [ ] Device audio recording
- [ ] Device audio only mode
- [ ] Device audio + microphone mode
- [ ] Microphone selection
- [ ] Microphone audio level indicator
- [ ] Recording timer
- [ ] Start / Stop recording controls
- [ ] Custom output directory
- [ ] Automatic video filename generation
- [ ] MP4 video output
- [ ] Windows installer

## Recording Modes

### Device Audio Only

Record the Android screen and audio from the device without capturing microphone input.

Use cases:

- Recording app demonstrations
- Gameplay recording
- Tutorial footage
- Recording Android application audio

### Device Audio + Microphone

Record Android screen, device audio, and microphone input simultaneously.

Use cases:

- Voice tutorials
- App walkthroughs
- Gameplay commentary
- Educational recordings

## Technology Stack

| Technology | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| Electron   | Desktop application framework                          |
| React      | User interface                                         |
| Vite       | Development server and frontend build                  |
| Node.js    | Desktop application processes                          |
| ADB        | Android device communication                           |
| scrcpy     | Android screen and audio capture integration (planned) |
| FFmpeg     | Audio/video processing (planned)                       |

## Development Status

**Status: Early Development**

The project is currently in its initial setup phase.

The repository and development environment have been initialized. The user interface and Android recording integration are under development.

## Requirements

Planned development environment:

- Windows 10 / Windows 11
- Node.js
- npm
- Android Debug Bridge (ADB)
- Android device with USB debugging enabled

Additional requirements may be introduced as development progresses.

## Development Setup

Clone the repository:

```bash
git clone https://github.com/Gopartner/droidcapture.git
```

Navigate to the project directory:

```bash
cd droidcapture
```

Install dependencies:

```bash
npm install
```

Start the development environment:

```bash
npm run dev
```

## Roadmap

- [x] Initialize project repository
- [x] Set up React + Vite
- [x] Initialize Git and GitHub repository
- [ ] Build desktop interface
- [ ] Integrate Electron
- [ ] Detect Android devices
- [ ] Implement screen recording
- [ ] Implement device audio capture
- [ ] Implement microphone capture
- [ ] Audio mixing and synchronization
- [ ] Export recordings to MP4
- [ ] Package Windows application

## Repository

GitHub: https://github.com/Gopartner/droidcapture

## License

License not yet specified.
