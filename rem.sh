#!/bin/bash

# Define the directory containing your .scss files
directory="path/to/your/scss/files"

# Loop through each .scss file in the directory and its subdirectories, excluding node_modules
find "$directory" -type f -name '*.scss' ! -path '*/node_modules/*' | while IFS= read -r file; do
    # Use sed to replace rem values with their actual values
    sed -i 's/\([0-9.]\+\)rem/\1*10px/g' "$file"
done
