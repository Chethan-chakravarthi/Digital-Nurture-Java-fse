SET SERVEROUTPUT ON;
DECLARE
    v_customer_name VARCHAR2(50);
    v_age NUMBER;
    v_interest_rate NUMBER := 10;
BEGIN
    SELECT CustomerName, Age
    INTO v_customer_name, v_age
    FROM Customers
    WHERE CustomerID = 101;

    IF v_age >= 60 THEN
        v_interest_rate := v_interest_rate - 1;
    END IF;

    DBMS_OUTPUT.PUT_LINE('Customer : ' || v_customer_name);
    DBMS_OUTPUT.PUT_LINE('Interest Rate : ' || v_interest_rate || '%');
END;
/