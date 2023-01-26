nodejs: 
	# https://github.com/nodejs/help/wiki/Installation
	# sudo apt-get -y install gcc g++ make
	sudo apt -y remove nodejs yarn libnode-dev libnode72
	curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
	curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
	echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
	sudo apt-get -y update
	sudo apt-get -y install nodejs
	node -v; npm version; npx -v
