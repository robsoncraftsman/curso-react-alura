#!/bin/bash
nvm install 16.2.0
nvm alias default 16.2.0
nvm uninstall 16.0.0
nvm list
npm install -g npm@7.14.0
source ~/.bashrc
