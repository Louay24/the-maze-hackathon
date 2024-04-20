#!/bin/bash

# Check if the file exists
if [ ! -f "enum_definition.ts" ]; then
    echo "Error: enum_definition.ts not found."
    exit 1
fi

# Read the enum definition from the file
enum_definition=$(<enum_definition.ts)

# Prompt user for the new field name
read -p "Enter the new field name: " new_field_name

# Format the new field with the entered name
new_field="${new_field_name// /_} = '/${new_field_name,,}'," # Replace spaces with underscores and convert to lowercase

# Add the new field to the enum
modified_enum=$(echo "$enum_definition" | sed "s/}/  $new_field\n}/")

# Output the modified enum
echo "$modified_enum"
