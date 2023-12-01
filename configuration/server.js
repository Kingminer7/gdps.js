module.exports = {
    // You can modify most of these on the dashboard when the server is running.
    
    // What port to run the server on.
    // This cannot be modified on the dashboard.
    ["Port"]: 3000,

    // What a user without an account can or can't do.
    ["Unregistered User Permissions"]: {
        // If users without accounts should show on leaderboards.
        ["Appear on Leaderboards"]: false,

        // If users without accounts can upload levels. 
        ["Upload Levels"]: false,

        // If users without accounts can access any online features.
        // They can still use stuff like sign up and log in if this is false.
        ["Access Servers"]: true,
    },

    // If users should be able to access the server without an account.
    // Log in will still be available to all users.
    // More customization coming soon.
    ["Lock Server"]: true,
}