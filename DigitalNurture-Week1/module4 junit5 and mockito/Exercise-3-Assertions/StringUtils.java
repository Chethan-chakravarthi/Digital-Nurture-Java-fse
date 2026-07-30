public class StringUtils {
    public boolean isEmpty(String value) {
        return value == null || value.isEmpty();
    }

    public String toUpperCase(String value) {
        return value.toUpperCase();
    }

    public void validateNotNull(String value) {
        if (value == null) {
            throw new IllegalArgumentException("Value cannot be null");
        }
    }
}