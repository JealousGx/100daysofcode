# Generates a base layer for lambda function

# Remove the container if it exists
docker rm lambda-container

# Build the base layer
docker build -t base-layer .

# Rename it to layer container
docker run --name lambda-container base-layer

# Copy the generated zip artifact so that our CDK can use it
docker cp lambda-container:layer.zip . && echo "Created layer.zip with updated base layer"