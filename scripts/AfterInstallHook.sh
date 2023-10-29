#!/bin/bash
set -e
# cd /home/ec2-user/deployment/frontend/chat-server
npm install
npm run build
# Stop Pm2 Process
pm2 stop 'Book Gen Service'
echo "Book Gen Service is stopped "

