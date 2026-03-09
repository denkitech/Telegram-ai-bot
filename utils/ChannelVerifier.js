const axios = require('axios');

class ChannelVerifier {
    constructor(apiToken, channelId) {
        this.apiToken = apiToken;
        this.channelId = channelId;
    }

    async isUserMember(userId) {
        try {
            const response = await axios.get(`https://api.telegram.org/bot${this.apiToken}/getChatMember`, {
                params: {
                    chat_id: this.channelId,
                    user_id: userId,
                },
            });
            return response.data.result.status === 'member' || response.data.result.status === 'administrator';
        } catch (error) {
            console.error('Error checking membership:', error);
            return false;
        }
    }
}

module.exports = ChannelVerifier;