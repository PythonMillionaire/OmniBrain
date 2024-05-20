const { alias, configPaths } = require('react-app-rewire-alias');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = function override(config, env) {
    // Setup aliases
    const aliasMap = configPaths('./tsconfig.paths.json');
    alias(aliasMap)(config);

    // Enable React Fast Refresh in development mode
    if (env === 'development') {
        config.plugins.push(new ReactRefreshWebpackPlugin());

        // Optionally add polling to the devServer settings
        if (!config.devServer) {
            config.devServer = {};
        }
        config.devServer.watchOptions = {
            poll: 1000, // Check for changes every second
            ignored: /node_modules/ // Ignore node_modules for polling
        };
    }

    return config;
};
