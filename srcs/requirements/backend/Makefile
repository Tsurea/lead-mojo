NAME			= backend
RUNNING			= running-backend

SRCS_DIR		= srcs
OUTPUT_DIR		= output

SRCS			= $(wildcard ${SRCS_DIR}/*.go)

GO				= go
RM				= rm -rf
RUN				= run
BUILD			= build -o

DOCKERFILE		= Dockerfile

ENVFILE			= .env

# Docker ID
CONTAINER		= $(shell docker ps --quiet)
IMAGE			= $(shell docker images --quiet ${NAME})

all:
	docker build -t ${NAME} -f ${DOCKERFILE} .
	docker run --env-file ${ENVFILE} --rm -p 5000:5000 --name ${RUNNING} ${NAME}

build:
	go build -o

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
