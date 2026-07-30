import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BankAccountTest {
    private BankAccount bankAccount;

    @BeforeEach
    void setUp() {
        bankAccount = new BankAccount(1000);
    }

    @AfterEach
    void tearDown() {
        bankAccount = null;
    }

    @Test
    void testDeposit() {
        // Arrange
        // Act
        bankAccount.deposit(500);
        // Assert
        assertEquals(1500, bankAccount.getBalance());
    }

    @Test
    void testWithdraw() {
        // Arrange
        // Act
        bankAccount.withdraw(300);
        // Assert
        assertEquals(700, bankAccount.getBalance());
    }
}