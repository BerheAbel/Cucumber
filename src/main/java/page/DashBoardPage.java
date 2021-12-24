package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashBoardPage extends BasePage{

	WebDriver driver;
	public DashBoardPage(WebDriver driver) {
		this.driver = driver;
	}
	@FindBy(how=How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]") WebElement BANK_AND_CASH;
	@FindBy(how=How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a") WebElement CREATE_ACCOUNT;
	
	public void userClickOnBankAndCash() {
		BANK_AND_CASH.click();
	}
	public void userClickOnCreateAccount() {
		CREATE_ACCOUNT.click();
	}
}

