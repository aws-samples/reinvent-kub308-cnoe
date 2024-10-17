#!/bin/bash
# Function to check the health status of an application
check_health_status() {
  local app_name=$1
  kubectl get applications -n argocd | awk -v app="$app_name" '$1 == app {print $3}'
}
# Check if at least one application name is passed as argument
if [ "$#" -eq 0 ]; then
  echo "Error: Please provide at least one application name."
  exit 1
fi
# List of application names passed as arguments
app_names=("$@")
# Join the application names into a comma-separated list
app_list=$(IFS=,; echo "${app_names[*]}")
# Print initial message with application names and a newline
echo -e "Waiting for applications to be healthy: $app_list."
echo -n "..."
# Monitor the status of the applications
while true; do
  all_healthy=true
  for app in "${app_names[@]}"; do
    status=$(check_health_status "$app")
    if [ "$status" != "Healthy" ]; then
      all_healthy=false
      break
    fi
  done
  if $all_healthy; then
    # Print the final message with a newline at the end
    echo -e "\nAll applications are Healthy: $app_list.\n"
    break
  else
    echo -n "."
    sleep 10
  fi
done