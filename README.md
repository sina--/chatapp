# Chat App

## Overview
A React Native mobile chat application built using Expo. This app allows users to enter their name, select a background color, and enter a chat room.

## Key Features
- Start screen where users can:
  - Enter their name
  - Choose a background color for the chat screen
  - Start chatting with a button tap
- Chat screen that displays with the user's name in the header and their chosen background color

## Technologies Used
- React Native
- Expo
- React Navigation

## Setup Instructions

### Prerequisites
- Node.js
- Expo CLI
- Expo Go

### Installation
1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npx expo start
   ```
5. Scan the QR code with the Expo Go app on your mobile device

## How to Use
1. Open the app on your device
2. On the Start screen:
   - Enter your name in the text field
   - Select one of the four background colors by tapping on a circle
   - Tap "Start Chatting" to enter the chat room
3. The Chat screen will appear with your name displayed in the header and your selected background color applied

## Project Structure
- `/components`: Contains screen components (Start.js, Chat.js)
- `/assets`: Contains fonts and images used in the app

## Note
This is a work in progress. Full chat functionality will be implemented in future updates. 