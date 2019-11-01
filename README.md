# c9-fiesta

Make an AWS Cloud9 EC2 environment ready for dev.

## Usage

1) Create new SSH Key and add to [Github Profile](https://github.com/settings/ssh/new)
1) Create a paramter as secturedString `/bootstrap/id_rsa` in AWS SSM's Paramter Store with the private key contents.
1) Create a paramter as secturedString `/bootstrap/id_rsa.pub` in AWS SSM's Paramter Store with the public key contents.
1) Copy the init.js to the C9 User's init script.
1) Start a new Cloud9 environment.
1) Copy your .gitconfig file.
1) Start cloning.
