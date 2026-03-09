const axios = require('axios');

class GeminiAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://gemini.googleapis.com/v1';
    }

    async generateCompletion(prompt) {
        try {
            const response = await axios.post(`${this.baseUrl}/completions`, {
                prompt: prompt,
                apiKey: this.apiKey
            });
            return response.data;
        } catch (error) {
            console.error('Error generating completion:', error);
            throw error;
        }
    }
}

module.exports = GeminiAI;
