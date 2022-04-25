# On your system
    open docker application
    docker build . -t api 
    docker tag api tochy97/api  
    docker push tochy97/api  

# After logging into EC2 instance 
    docker pull tochy97/api
    sudo service docker restart
    docker run -d -p 8000:8000 tochy97/api:latest