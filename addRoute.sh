#!/bin/bash

# Initialize the routes array
routes="export const routes = []"

# Function to add a route to the routes array
add_route() {
    local layout path guard component
    
    read -p "Enter layout (true/false): " layout
    read -p "Enter path: " path
    read -p "Enter guard: " guard
    read -p "Enter component: " component
    
    route=$(cat <<EOF
  {
    layout: $layout,
    path: '$path',
    guard: '$guard',
    component: $component
  },
EOF
)
    routes="$routes$route"
}


 
    read -p "Do you want to add a route? (yes/no): " answer
    case $answer in
        [Yy][Ee][Ss]|[Yy])
            add_route
            ;;
        [Nn][Oo]|[Nn])
            break
            ;;
        *)
            echo "Please answer yes or no."
            ;;
    esac


# Add the final routes array to the JavaScript object
routes="$routes
];"

# Write the routes to a JavaScript file
echo "$routes" > src/routes/routes.tsx

echo "Routes have been written to routes.js"
