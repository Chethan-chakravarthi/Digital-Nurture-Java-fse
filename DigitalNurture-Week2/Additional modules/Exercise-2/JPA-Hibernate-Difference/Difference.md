# Difference between JPA, Hibernate and Spring Data JPA

## 1. JPA (Java Persistence API)
- JPA is a Java specification.
- It defines a standard for Object Relational Mapping (ORM).
- JPA itself does not provide any implementation.
- It requires an implementation such as Hibernate or EclipseLink.

Example:
@Entity
@Table
@Id

---

## 2. Hibernate
- Hibernate is an ORM framework.
- It is one of the implementations of JPA.
- Hibernate provides all database operations such as CRUD.
- It also supports HQL, Caching, Lazy Loading, etc.

Advantages:
- Powerful ORM Framework
- HQL Support
- Automatic Table Mapping

---

## 3. Spring Data JPA
- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code.
- No need to write DAO implementation.
- Provides JpaRepository interface.

Example:
public interface EmployeeRepository extends JpaRepository<Employee,Integer>{}

---

## Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | Framework | Spring Module |
| CRUD | No | Yes | Yes |
| SQL Generation | No | Yes | Yes |
| Repository Support | No | No | Yes |
| Query Methods | No | No | Yes |
| HQL Support | No | Yes | Yes |

---

## Conclusion
- JPA defines standards.
- Hibernate implements those standards.
- Spring Data JPA simplifies Hibernate and JPA by providing repositories and automatic CRUD methods.