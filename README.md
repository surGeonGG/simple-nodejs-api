How to set up a simple api:

1. Download and install nodejs
2. npm init -y & npm install express in terminal
3. Create index.js file
4. Copy contents from index.js on github
5. node . to start api


Test with:
    
    curl -X GET localhost:8080/bible/
    
    curl -X POST -H "Content-Type: application/json" -d "{\"msg\": \"hello world\"}" localhost:8080/echo/1337/


Based on https://www.youtube.com/watch?v=-MTSQjw5DrM&ab_channel=Fireship

Just creating a basic tutorial because I always forget.
