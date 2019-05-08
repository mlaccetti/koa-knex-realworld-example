#!/usr/bin/env bash
set -x

yarn run db:migrate
yarn run db:load
