#!/bin/bash

while sleep .5; do
  docker-compose -f docker-compose.yml logs --tail 100 --follow "$@"
done