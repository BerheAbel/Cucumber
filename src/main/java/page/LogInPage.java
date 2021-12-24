package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LogInPage extends BasePage {

	WebDriver driver;
	public LogInPage(WebDriver driver){
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement USER_NAME_ELEMENT;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement PASSWORD;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	WebElement SIGN_IN;
	
	
	public void insertUSER_NAME(String username) {
		USER_NAME_ELEMENT.sendKeys(username);
	}
	public void insertPASSWORD(String password) {
		PASSWORD.sendKeys(password);
		
	}
	public void clikLOGIN() {
		SIGN_IN.click();
		} 
	public String getPageTitle() {
		return driver.getTitle();
		
	}
	public void sugnIn(String username, String password) {
		insertUSER_NAME(username);
		insertPASSWORD(password);
		clikLOGIN();
	}
}
