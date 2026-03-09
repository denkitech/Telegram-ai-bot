const axios = require('axios');

const OPENAI_API_KEY = 'your-openai-api-key'; // replace with your OpenAI API key
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const getGPT4Response = async (prompt) => {
    try {
        const response = await axios.post(OPENAI_API_URL, {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error communicating with OpenAI API:', error);
        throw error;
    }
};

module.exports = { getGPT4Response };