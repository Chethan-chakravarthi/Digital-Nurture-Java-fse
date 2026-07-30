SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER)
AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + p_bonus
    WHERE Department = p_department;

    COMMIT;
    DBMS_OUTPUT.PUT_LINE('Bonus Updated Successfully.');
END;
/

BEGIN
    UpdateEmployeeBonus('IT',5000);
END;
/