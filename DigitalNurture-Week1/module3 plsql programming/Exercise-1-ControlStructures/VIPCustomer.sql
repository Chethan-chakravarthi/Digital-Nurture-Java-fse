SET SERVEROUTPUT ON;
DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, CustomerName, Balance
        FROM Customers;
BEGIN
    FOR customer IN c_customers LOOP
        IF customer.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'YES'
            WHERE CustomerID = customer.CustomerID;
        END IF;
    END LOOP;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('VIP Customers Updated Successfully.');
END;
/