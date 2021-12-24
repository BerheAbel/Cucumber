package page;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BasePage {
	


	public static WebDriver driver;
	
	public static void init() {
		System.setProperty("webdriver.chrome.driver", "drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().implicitlyWait(0,TimeUnit.SECONDS);
		
		
	}
	public void getUrl(String Url) {
		driver.get(Url);
	}
	public void button() {
		
	}
	public void tearDown() {
		driver.close();
		driver.quit();
	}
	public int randomNumber(int x) {
		Random rng = new Random();
		return rng.nextInt(x);
		}
	public static void takeScreenShoot(WebDriver driver) throws IOException {
		TakesScreenshot ts = (TakesScreenshot) driver;
		ts.getScreenshotAs(OutputType.FILE);
		System.getProperty("user.dir");
		
		SimpleDateFormat formater = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String filename = formater.format(date);
		FileUtils.copyFile(ts.getScreenshotAs(OutputType.FILE), new File(System.getProperty("user.dir") + "/screenshot/" + filename + ".png"));
	}
}

