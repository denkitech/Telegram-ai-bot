class UserManager {
    constructor() {
        this.users = {};
    }

    // Create a new user
    createUser(userId, userData) {
        if (this.users[userId]) {
            throw new Error('User already exists.');
        }
        this.users[userId] = userData;
    }

    // Retrieve user data
    getUser(userId) {
        return this.users[userId] || null;
    }

    // Update existing user data
    updateUser(userId, updatedData) {
        if (!this.users[userId]) {
            throw new Error('User not found.');
        }
        this.users[userId] = { ...this.users[userId], ...updatedData };
    }
}

module.exports = UserManager;