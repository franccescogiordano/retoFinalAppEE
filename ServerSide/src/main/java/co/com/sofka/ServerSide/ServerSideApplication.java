package co.com.sofka.ServerSide;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableReactiveMongoRepositories;

@SpringBootApplication
public class ServerSideApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerSideApplication.class, args);
	}

}
