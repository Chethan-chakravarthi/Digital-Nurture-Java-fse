# Exercise 4 - API Gateway

## Objective
Create an API Gateway using Spring Cloud Gateway to route requests to Account Service and Loan Service through Eureka Discovery Server.

## Technologies
- Spring Boot
- Spring Cloud Gateway
- Eureka Discovery Client
- Maven

## Services
- Eureka Server (8761)
- Account Service (8081)
- Loan Service (8082)
- API Gateway (9090)

## Routes

| Route | Destination |
|--------|-------------|
| /account | Account Service |
| /loan | Loan Service |

## Output

- http://localhost:9090/account
- http://localhost:9090/loan

Both services are successfully routed through the API Gateway.

## Screenshot

See image.png
mvn clean spring-boot:run
```

## Testing

### Via API Gateway (Port 9090)
```bash
# Route to Account Service
curl http://localhost:9090/account-service/accounts

# Route to Loan Service
curl http://localhost:9090/loan-service/loans
```

## Key Concepts

### Service Discovery
- Gateway automatically discovers services registered in Eureka
- No hardcoded service URLs needed
- Dynamic routing based on service names

### Load Balancing
- Spring Cloud Gateway integrates with Spring Cloud LoadBalancer
- Distributes traffic across multiple instances

## Troubleshooting

### Gateway not routing requests?
1. Verify Eureka Server is running (http://localhost:8761)
2. Check that services are registered in Eureka
3. Verify service names match in routes

### Connection refused?
- Ensure all services are running
- Check port numbers are correct
- Verify firewall settings
