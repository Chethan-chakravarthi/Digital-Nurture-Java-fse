import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class StringUtilsTest {
    private final StringUtils stringUtils = new StringUtils();

    @Test
    void testAssertEquals() {
        assertEquals("HELLO", stringUtils.toUpperCase("hello"));
    }

    @Test
    void testAssertNotEquals() {
        assertNotEquals("hello", stringUtils.toUpperCase("hello"));
    }

    @Test
    void testAssertTrue() {
        assertTrue(stringUtils.isEmpty(""));
    }

    @Test
    void testAssertFalse() {
        assertFalse(stringUtils.isEmpty("JUnit"));
    }

    @Test
    void testAssertNull() {
        assertNull(null);
    }

    @Test
    void testAssertNotNull() {
        assertNotNull(stringUtils);
    }

    @Test
    void testAssertThrows() {
        assertThrows(IllegalArgumentException.class, () -> stringUtils.validateNotNull(null));
    }
}