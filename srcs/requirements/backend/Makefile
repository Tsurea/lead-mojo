NAME				= backend
RUNNING				= running-backend

SRCS_DIR			= srcs
OUTPUT_DIR			= output
DOCKER_DIR			= docker

DOCKERFILE			= Dockerfile
DOCKERFILE_DEV		= Dockerfile.dev
DOCKERFILE_BUILD	= Dockerfile.build

ENVFILE				= .env

# Docker ID
CONTAINER		= $(shell docker ps --quiet)
IMAGE			= $(shell docker images --quiet ${NAME})

all:
	docker build -t ${NAME} -f ${DOCKER_DIR}/${DOCKERFILE} .
	docker run --env-file ${ENVFILE}\
		--rm -p 5000:5000\
		--name ${RUNNING} ${NAME}

dev:
	docker build -t ${NAME} -f ${DOCKER_DIR}/${DOCKERFILE_DEV} .
	docker run --env-file ${ENVFILE}\
		--rm -p 5000:5000\
		-v ${SRCS_DIR}:/app\
		--name ${RUNNING} ${NAME}

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

.PHONY: all clean fclean re dev
