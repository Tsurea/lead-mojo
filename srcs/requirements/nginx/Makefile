NAME			= nginx-server
RUNNING			= running-nginx-server

DOCKERFILE		= Dockerfile
DOCKERFILE_DEV	= Dockerfile.dev

ENVFILE			= .env

# Docker ID
CONTAINER		= $(shell docker ps --quiet)
IMAGE			= $(shell docker images --quiet ${NAME})

all:
	docker build -t ${NAME} -f ${DOCKERFILE} .
	docker run --rm -p 8000:80 -p 8080:443 --name ${RUNNING} ${NAME}

clean:
ifneq ($(strip ${CONTAINER}),)
	docker stop ${RUNNING}
endif

fclean: clean
ifneq ($(strip ${IMAGE}),)
	docker image rm -f ${IMAGE}
endif

re:
	make fclean
	make all

.PHONY: all clean fclean re
