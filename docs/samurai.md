---
sidebar_position: 1
---

# Samurai

Let's discover **Samurai API**.

## Getting Started

Get started by accessing the **[GitHub repository](https://github.com/voltzmotors/samurai)** and cloning the project.

If you haven't been added to Voltz Motors organization on GitHub, send a message to David Stanete and ask him to add you.

## Requirements

- make
- Java 11

### Instalation on Windows

- Install chocolatey from **[here](https://chocolatey.org/install)**
- Then, run

```shell
choco install make
```

```shell
choco install corretto11jdk
```

### Instalation on Ubuntu

```shell
sudo apt-get install make
```

```shell
sudo apt-get install openjdk-11-jdk
```

## Makefile Recipes

Recreates the database and runs the application

```shell
make local-env
```

Starts the application without modifying the database

```shell
make api-only
```

Loads the sample data located at src/main/resources/db/scripts/sample_data.sql

```shell
make sample-data
```

Recreates the database. Useful when updating the sample_data.sql files, for example

```shell
make database
```

Starts a local RabbitMQ instance

```shell
make start-local-broker
```

## Admin Endpoints

| Endpoint           | Description                         |
| ------------------ | ----------------------------------- |
| `/actuator/health` | Check if the application is healthy |
| `/swagger-ui.html` | Access swagger ui docs              |

## Database Migrations

This service takes advantage of the integration between Spring Boot and Flyway
to enable seamless database migrations. To add a new migration, simply add a file
following the `VX__migration_description.sql` to the `src/main/resources/db/migration`
folder. The **X** in `VX__migration_description.sql` must be greater than the previous
migration version
