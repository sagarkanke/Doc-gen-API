#!/bin/bash
set -e
# cd /home/ec2-user/deployment/frontend/chat-server
npm install
npm run build
# Stop Pm2 Process
pm2 stop 'Document Gen Service'
echo "Document Gen Service is stopped "

