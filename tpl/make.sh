#!/usr/bin/env bash
MY_PATH="$( cd "$(dirname "$0")" ; pwd -P )"
COMMAND_ARGS="${@}"

docker run   --entrypoint "/root/bin/make.sh" --env-file \
 "$MY_PATH/make.env" --rm  -v "$MY_PATH:/root/src"   -v "/var/run/docker.sock:/var/run/docker.sock"  \
  registry.cplotus-gz.com:5000/build-tools:2.0 $COMMAND_ARGS
