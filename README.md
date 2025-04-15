# lampsy-health-challenge
## Overview
The app has 4 main parts:

1 - The home screen

<img src="https://github.com/user-attachments/assets/330e5227-b8f0-4cdb-8c6d-9cb97f403994" width="300" />

We can find at the top of this screen, a welcome message to the user and some latest activity updates followed by a chart with some historical data. These updates and statistics could be fed some real data from Lampsy database through a simple REST API in a backend server.

<img width="337" alt="Screenshot 2025-04-15 at 01 45 58" src="https://github.com/user-attachments/assets/84c8f4b9-acec-40fa-b4c7-54ba71f1ec61" />

Below the chart we can find the "Send notification" button that should trigger an immediate push notification on the device screen (won't work on the web).

<img width="171" alt="Screenshot 2025-04-15 at 01 46 03" src="https://github.com/user-attachments/assets/fbdf18ef-2550-4e84-935e-0c5f75b96396" />

<img width="171" alt="Screenshot 2025-04-15 at 01 46 03" src="https://github.com/user-attachments/assets/2d01c63f-7b53-452b-bb0e-82482b8217de" />

2 - Live stream screen

<img src="https://github.com/user-attachments/assets/9a1813d0-38d7-48a2-8423-153fd4bae77e" width="300" />

Here was integrated a live stream from Twitch, resorting to WebView to simulate the page dedicated to displaying the live video being captured by the hardware. The type of connection and component used to display the video may change depending on how the video hosting/streaming is being done. 

3 - Settings screen

<img src="https://github.com/user-attachments/assets/de06c1d6-7141-4b46-b5d5-5a48931a241f" width="300" />

This is a very simple page with mock settings. However, the "Enter/Exit privacy mode" is clickable and should toggle using very simple state management.

<img width="349" alt="Screenshot 2025-04-15 at 01 46 26" src="https://github.com/user-attachments/assets/36ae2988-30c7-46c7-b333-ece36ff5ba67" />

4 - The navigation tabs

<img width="371" alt="Screenshot 2025-04-15 at 01 46 09" src="https://github.com/user-attachments/assets/b7d7d6ec-bdcb-4603-8015-34c723899773" />

These should be used to navigate between the 3 screens mentioned above.

## Code
The app was developed using React Native + Expo. The main files edited are the following:

- The layouts and pages in the **lampsy-health-challenge/my-app/app** directory
- The components in the **lampsy-health-challenge/my-app/components** directory

## Setup
1 - Install git

2 - Install node

3 - Clone repo

4 - Enter my-app directory
```
cd my-app
```
5 - Install dependencies
```
npm i
```
6 - Run app
```
npx expo start
```
7 - Scan QR code displayed on the terminal
## Notes
