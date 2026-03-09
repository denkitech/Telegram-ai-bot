const axios = require('axios');

class Claude {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.anthropic.com/v1';
    }

    async sendMessage(prompt) {
        try {
            const response = await axios.post(`${this.baseUrl}/complete`, {
                prompt,
                max_tokens: 100,
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error sending message to Claude:', error);
            throw error;
        }
    }
}

module.exports = Claude;