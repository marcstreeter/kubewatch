nvm:
	. ${NVM_DIR}/nvm.sh && nvm use v20.10.0  && $(CMD)

install:
	make nvm CMD="npm install"

up:
	make nvm CMD="npm run dev"