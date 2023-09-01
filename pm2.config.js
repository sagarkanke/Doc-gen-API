module.exports = {
    apps : [{
        name      : 'Document Gen Service',
        script    : './bin/app.js',
        node_args : '-r dotenv/config'
    }],
}
