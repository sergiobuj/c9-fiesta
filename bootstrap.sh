#!/bin/sh
#
# bootstrap.sh
# Copyright (C) 2019 sergiobuj
#
# Distributed under terms of the MIT license.
#

export GOPATH=/home/ubuntu/environment
# export EDITOR=/usr/bin/vim

function create_gitconfig() {
  cat > ~/.gitconfig <<- EOF
[alias]
  ci = commit
  cii = commit --interactive
  co = checkout
  fetch = fetch --all --prune
  logo = log --graph --decorate --abbrev-commit --all --pretty=oneline
  logp = log --pretty=oneline --abbrev-commit
  st = status -sb
  tst = status -sb
  up = "!git fetch && git pull"
  web = instaweb --httpd=webrick
[color]
  branch = auto
  status = auto
  ui = auto
[color "diff"]
  meta = blue
  new = green
  old = red strike
[core]
  autocrlf = false
  editor = vim
  filemode = false
[diff]
  compactionHeuristic = true
[fetch]
  prune = true
[filter "lfs"]
  clean = git-lfs clean -- %f
  smudge = git-lfs smudge -- %f
  process = git-lfs filter-process
  required = true
[filter "media"]
  clean = git media clean %f
  required = true
  smudge = git media smudge %f
[help]
  autocorrect = 15
[merge]
  tool = opendiff
[pull]
  default = current
[url "git@github.com:"]
  insteadOf = https://github.com/
[remote "origin"]
  push = HEAD
EOF
}

function update_env() {
  sudo apt update
  sudo apt install -y ffmpeg
  sudo apt install -y git
  sudo apt install -y golang-golang-x-tools
  sudo apt install -y libsox-dev
  sudo apt install -y libsox-fmt-all
  sudo apt install -y pkg-config
  sudo apt install -y sox

  pip install docker-compose
  git --version
}

function create_tmp_key() {
  KEY_PATH=~/.ssh/id_rsa
  ssh-keygen -t rsa -f $KEY_PATH -N ""
  eval $(ssh-agent -s)
  ssh-add $KEY_PATH
  echo "Copy key from $KEY_PATH.pub to https://github.com/settings/ssh/new"
}

update_env
create_gitconfig
# create_tmp_key
