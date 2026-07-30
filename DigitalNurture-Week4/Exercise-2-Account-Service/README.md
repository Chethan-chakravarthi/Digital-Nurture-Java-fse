# Exercise 2 - Account Service

This project is a Spring Boot account service that registers with Eureka.

## Run

From this folder, run:

```bash
./mvnw.cmd spring-boot:run
```

Then open:

```text
http://localhost:8081/account
```

Expected output:

```text
Account Service is Running
```

Once the service starts, refresh the Eureka dashboard:

```text
http://localhost:8761
```

You should see `ACCOUNT-SERVICE` registered.

## Output Preview

![Eureka registration output](output.png)
