# Exercise 3 - Loan Service

This project is a Spring Boot loan service that registers with Eureka.

## Run

From this folder, run:

```bash
./mvnw.cmd spring-boot:run
```

Then open:

```text
http://localhost:8082/loan
```

Expected output:

```text
Loan Service is Running
```

Once the service starts, refresh the Eureka dashboard:

```text
http://localhost:8761
```

You should see `LOAN-SERVICE` registered alongside `ACCOUNT-SERVICE`.
