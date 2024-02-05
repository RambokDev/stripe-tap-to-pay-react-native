module.exports = ({config}) => {
    return {
        ...config,
        extra: {
            apiUrl: process.env.API_URL ?? 'https://stripe-terminal-api.soluce-technologies.com/',
        },
    }
}
