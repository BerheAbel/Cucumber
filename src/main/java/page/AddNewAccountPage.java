package page;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AddNewAccountPage extends BasePage {
	
	@FindBy(how=How.XPATH, using = "//*[@id=\"account\"]") WebElement ACCOUNT_TITLE;
	@FindBy(how=How.XPATH, using = "//*[@id=\"description\"]") WebElement DESCRIPTION;
	@FindBy(how=How.XPATH, using = "//*[@id=\"balance\"]") WebElement INITIAL_BALANCE;
	@FindBy(how=How.XPATH, using = "//*[@id=\"account_number\"]") WebElement ACCOUNT_NUMBER;
	@FindBy(how=How.XPATH, using = "//*[@id=\"contact_person\"]") WebElement CONTACT_PERSON;
	@FindBy(how=How.XPATH, using = "//*[@id=\"contact_phone\"]") WebElement PHONE_NUMBER;
	@FindBy(how=How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button") WebElement SIGN_IN_BUTTON;

	public void addTitle(String title) {
		ACCOUNT_TITLE.sendKeys(title);
	}
	public void description(String discription) {
		DESCRIPTION.sendKeys(discription);
	}
	public void initialbalance(String balance) {
		INITIAL_BALANCE.sendKeys(balance);
	}
	public void accountNumber(String account) {
		ACCOUNT_NUMBER.sendKeys(account);
	}
	public void contactPerson(String contact) {
		CONTACT_PERSON.sendKeys(contact);
	}
	public void phoneNumber(String phone) {
		PHONE_NUMBER.sendKeys(phone);
	}
	public void signinbutton() {
		SIGN_IN_BUTTON.click();
	}
	
}
