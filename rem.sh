#!/bin/bash

# Define the directory containing your project
directory="."

# Use find to locate all .scss-E files in the project and delete them
find "$directory" -type f -name '*.scss-E' -exec rm -f {} +

echo "Deleted all .scss-E files in the project."
