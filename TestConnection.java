import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;

public class TestConnection {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Usage: java TestConnection <url>");
            return;
        }

        String urlString = args[0];
        System.out.println("Testing connection to: " + urlString);

        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setConnectTimeout(5000);
            conn.setReadTimeout(5000);
            conn.setRequestMethod("GET");

            int code = conn.getResponseCode();
            System.out.println("Response code: " + code);

        } catch (IOException e) {
            System.out.println("Connection failed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

