SET SERVEROUTPUT ON;
DECLARE
    CURSOR c_loans IS
        SELECT LoanID,
               CustomerID,
               EndDate
        FROM Loans
        WHERE EndDate <= SYSDATE + 30;
BEGIN
    FOR loan IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder : Customer '
            || loan.CustomerID
            || ' Loan ID '
            || loan.LoanID
            || ' is due on '
            || TO_CHAR(loan.EndDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/