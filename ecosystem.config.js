module.exports = {
  apps: [{
    name: 'Nodejs',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-205-111-86.compute-1.amazonaws.com',
      key: '~/.ssh/nodejs.pem',
      ref: 'origin/master',
      repo: 'https://github.com/RavishankarVAD/Nodejs.git',
      path: '/home/ubuntu/Nodejs',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
