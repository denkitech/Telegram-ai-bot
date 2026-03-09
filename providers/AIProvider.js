class AIProvider {
    constructor() {
        // This will hold all AI provider instances
        this.providers = {};
    }

    registerProvider(name, provider) {
        if (!name || !provider) {
            throw new Error('Provider name and instance must be provided.');
        }
        this.providers[name] = provider;
    }

    routeRequest(providerName, request) {
        if (!this.providers[providerName]) {
            throw new Error(`No provider found for ${providerName}`);
        }
        // Route the request to the appropriate provider
        return this.providers[providerName].handleRequest(request);
    }
}

module.exports = new AIProvider();