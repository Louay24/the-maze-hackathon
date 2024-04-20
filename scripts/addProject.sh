#!/bin/bash

# Function to add a field to the enum
add_field() {
  field_name="$1"
  # Escape special characters in the field name for sed
  escaped_name=$(echo "$field_name" | sed 's/[&/\]/\\&/g')

  # Check if the file exists
  if [ ! -f "src/constants/paths.ts" ]; then
    echo "Error: File src/constants/paths.ts does not exist."
    exit 1
  fi

  # Check if the enum already exists
  if ! grep -q "enum Paths {" "src/constants/paths.ts"; then
    echo "Error: Enum Paths not found in src/constants/paths.ts"
    exit 1
  fi

  # Find the last line of the enum and insert the new field before the closing brace
  last_line=$(grep -n '}' "src/constants/paths.ts" | tail -n 1 | cut -d: -f1)
  sed -i "${last_line}i \\  ${escaped_name} = '\\''${escaped_name}'\\''" "src/constants/paths.ts"

  echo "Field '${field_name}' added to enum Paths."
}

read -p "Enter the name of the field to add: " field_name

add_field "$field_name"

