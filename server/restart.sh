ps -ef | awk '/server.js/ && !/awk/ {print $2}'| xargs  kill -9
nohup node server.js &
