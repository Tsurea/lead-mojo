# Environnement variable

To be running the docker-compose.yml you need this 3 environnement variables

## database.env

|Name|Description|
|:---|:----------|
|`POSTGRES_PASSWORD`|Password of the postgres database|
|:------------------|:-----------------------|

## frontend.env

|Name|Description|
|:---|:----------|
|`NEXT_PUBLIC_SERVER_HOSTNAME`|url for the server|
|`NEXT_PUBLIC_ACCESS_TOKEN`|mapbox token for using the map|
|`NEXT_PUBLIC_STRIPE_KEY`|stripe key for creating payment intents|

## backend.env

|Name|Description|
|:---|:----------|
|`JWT_SECRET`|everything is in the name|
|`DATABASE_URL`||
|`DIRECT_URL`||
|`STRIPE_SECRET_KEY`|stripe key for creating request|
|`STRIPE_PUBLISHABLE_KEY`|key only used in the frontend app|
|`SERVER_HOSTNAME`|only url accept for the request|

