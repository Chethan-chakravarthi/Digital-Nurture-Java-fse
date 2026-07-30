import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class MyServiceTest {
    @Test
    void testVerifyInteraction() {
        ExternalApi api = mock(ExternalApi.class);
        MyService service = new MyService(api);

        service.process();

        verify(api).sendData("Mockito Verification");
    }
}