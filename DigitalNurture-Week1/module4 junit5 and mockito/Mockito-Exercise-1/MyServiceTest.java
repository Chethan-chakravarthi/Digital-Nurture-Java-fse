import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

public class MyServiceTest {
    @Test
    void testMockingAndStubbing() {
        ExternalApi api = Mockito.mock(ExternalApi.class);
        when(api.getData()).thenReturn("Hello Mockito");

        MyService service = new MyService(api);

        assertEquals("Hello Mockito", service.fetchData());
    }
}