# What is this
This is a new front end for hermit. The old one was getting hard to improve so I wrote a new one 
with a framework Ionic. This front end is running as a seperate server. Inorder to deploy it a 
hermit server needs to be deployed and a server running this front end at the same time

## Reverse Proxy Configuration:
All paths should be sent to the front end by default, with exception to /api/ and /files/ those 
should be forwarded to the hermit server.