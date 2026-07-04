#!/usr/bin/env bash

EXPECTED="Hello, Test"

OUTPUT=$(node -e "console.log(require('./app.js')('Test'))")

if [ "$OUTPUT" == "$EXPECTED" ]; then

echo "🫱 Test Passed!"

exit 0

else

echo "⛔ Test Failed EXPECTED '$EXPECTED' but got '$OUTPUT'"

exit 1

fi