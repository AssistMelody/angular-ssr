#!/usr/bin/env bash
echo "Building environment: $1";
ng build --configuration $1 && ng run angular-ssr-demo:server:$1
