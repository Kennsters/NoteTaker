# Note Taker Assignment
In this assignment we created an application that is able to write, save, and delete notes. We used express to create our backend and feed our front end with the information. 

## Requirements
In our routes folder we have a file for htmlRoutes that handles our routes through our html files. 
Here is a snippet of the code from this file: 
![Here is a snippet of the code from this file](/media/Capture1.PNG)

We also have a db folder that holds our db.json file which we use to store and pull out notes from . 

Our apiRoutes file handles the users inputs of the notes they take. We have a GET, POST, and DELETE. <img src='/media/Capture2.PNG' width="350"/> 


Our GET will read our db.json file through fs.readFile and we will JSON.parse out the data that we retrieve from that file to be displayed. 

Our POST will create an object with an unique id to the note that is created using the UUID, text, and title. 

And our DELETE will allow us to target the unique id and delete that specific note object. 