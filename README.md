rawgithub
=========

raw github server, edit in github, view in realtime

a node.js proxy to raw.github.com that adds mime, this is your own proxy because rawgithub.com is not realtime.

to run a local rawgithub server:

	git clone https://github.com/shimondoodkin/rawgithub.git
	enter to the folder rawgithub and run:
	node index.js
	
if somebody wants to make it a tool to install with npm -g rawgithub -forks are welcome.
	
	
usage:
    
	https://raw.github.com/shimondoodkin/rawgithub/master/index.js
	to
	http://localhost:6617/shimondoodkin/rawgithub/master/index.js
	
	notice the change from https to http

## Configurable destination

If you have a local/enterprise git repo and want to have the same functionality, you can now pass the URL of that repository via
an environment variable called GIT_PROXY_DEST. If absent, the proxy will still point to github.

## Docker

There is a dockerfile that turns it into a ready to use container. You can check it out on [dockerhub](https://hub.docker.com/r/kullervo16/rawgithub/)
