# Backend Server Go

Server backend code in golang 1.22. This server has for role to modify the PostgreSQL Database with Prisma and Redis Cache.

## API Reference

Path routes and all the stuff to do

#### Auth
|Name|Type|Path|Paramaters|Description|
|:---|:---|:---|:---------|:----------|
|Generate New Token|`POST`|/auth/login|**REQUIRED**You need the email and password|Connect the user to his account.|
|Create User|`POST`|/auth/signup|**REQUIRED**You need the email and password|Connect the user to his account.|
