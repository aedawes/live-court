This is a work in progress for a tennis app. The main goal of this app is to provide a platform for tennis viewers to both keep track of a live tennis match and to view the match score live from a remote location. The idea is that any interested party viewing a match live can input the score of the match as it progresses and the app will update the score in real time for all other viewers.

The app will have multiple iterations:

1. A test app that only keeps track of a single players score. I will be using a family member who plays tennis to be that user so my family can test the app. This means there will not yet be any user authentication or user tracking. It will however include a live score update feature with a specific URL to send to other viewers. It will also contain the ability to update this player's UTR and other relevant ratings as well as opponent information to keep remote viewers informed.
2. A more robust app that will include user authentication and user tracking. This will allow for multiple users to utilize the app for their own players. This will be much more functional for practical use.
3. A updated version that allows for user tracking of statistics to help the player themselves improve. As the viewer inputs the score, data can be collected to help the player see where they are strong and where they need to improve. This will be a more advanced feature that will require more time to implement.

The app will be built using React and Material UI for the frontend and possibly firebase for the backend. The wireframes are created using Figma. Eventually, once the first iteration will be complete, this will be available on my personal domain at livecourt.anaisdawes.com.

# Getting started

To view the app, clone the git repo and run `yarn start` in the terminal. This will open the app in your browser at localhost:3000. This will provide a frontend view of the app as it is being built. The backend will be available at a later date.
