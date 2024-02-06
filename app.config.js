module.exports = ({config}) => {
    return {
        ...config,
        extra: {
            apiUrl: process.env.API_URL ?? 'https://staging.stripe-terminal-api.soluce-technologies.com/',
            eas: {
                projectId: "1eb85858-38a8-4c39-9d36-9f491f949253"
            },
            runtimeVersion: {
                policy: "sdkVersion"
            },

        }
    }
}
