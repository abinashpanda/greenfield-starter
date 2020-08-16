#!/bin/sh

if [ ! -d "node_modules" ] || [ ! "$(ls -qAL node_modules 2>/dev/null)" ]; then
  echo "Node modules not installed. Installing..."
  yarn install
fi

echo "Starting your app..."

exec "$@"
