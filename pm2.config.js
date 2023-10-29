module.exports = {
    apps : [{
        name      : 'Book Gen Service',
        script    : './bin/app.js',
        node_args : '-r dotenv/config'
    }],
}
