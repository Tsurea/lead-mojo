DOCKER_COMPOSE		:= ./srcs/docker-compose.yml
DOCKER_COMPOSE_DEV	:= ./srcs/docker-compose-dev.yml
VOLUME				:= $(shell docker volume ls -q)

all:
	docker compose -f ${DOCKER_COMPOSE} up --build -d

dev:
	docker compose -f ${DOCKER_COMPOSE_DEV} up --build

clean:
	docker compose -f ${DOCKER_COMPOSE} stop

fclean: clean
	docker system prune -af
ifneq ($(strip ${VOLUME}),)
	docker volume rm -f ${VOLUME}
endif

re: clean
	make all

.PHONY: all clean fclean re
