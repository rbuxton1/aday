docker rm aday --force
docker build --tag aday:latest .
#docker run -p 8008:8008 -d --name aday aday:latest
docker run -d -e VIRTUAL_HOST=aday.ryanbuxton.com -e LETSENCRYPT_HOST=aday.ryanbuxton.com --network=webproxy --name aday aday:latest
