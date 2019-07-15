module.exports = {
    apps: [{
        name: 'react-web',
        script: 'server.js',
        instances: 2,
        watch: false,
        // 定时重启,仅在cluster模式有效, [minute] [hour] [day] [month] [day of week]
        cron_restart: '0 2 * * *', // 每天凌晨两点重启
        max_memory_restart: '500M',
        log_date_format: 'YYYY-MM-DD HH:mm Z',
        log_file: 'logs/api.log',
        error_file: 'logs/api-err.log',
        out_file: 'logs/api-out.log',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }]
};
