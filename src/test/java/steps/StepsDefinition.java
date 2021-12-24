package steps;

import java.io.IOException;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.AddNewAccountPage;
import page.BasePage;
import page.DashBoardPage;
import page.LogInPage;

public class StepsDefinition extends BasePage {

	LogInPage loginpage;
	DashBoardPage dashboard;
	AddNewAccountPage addnewaccount;
	
	@Before
	public void beforerun() {
		init();
		getUrl("https://www.techfios.com/billing/?ng=admin/");
		loginpage = PageFactory.initElements(driver, LogInPage.class);
		dashboard = PageFactory.initElements(driver, DashBoardPage.class);
		addnewaccount = PageFactory.initElements(driver, AddNewAccountPage.class);

	}

	@Given("^User is already sign in and on the dashboard page using vaild \"([^\"]*)\"$")
	public void user_is_already_sign_in_and_on_the_dashboard_page_using_vaild(String username) throws Throwable {
		loginpage.insertUSER_NAME(username);
	}

	@When("^user put valid \"([^\"]*)\"$")
	public void user_put_valid(String password) throws Throwable {
		loginpage.insertPASSWORD(password);
	}
	
	@And("^user clicks \"([^\"]*)\"$")
	public void user_clicks(String button) throws InterruptedException  {
	   switch(button) {
	   case "Signin" : loginpage.clikLOGIN();
	   break;
	   case "bank and cash" : dashboard.userClickOnBankAndCash();
	   break;
	   case "create account" : dashboard.userClickOnCreateAccount();
	   break;
	   case  "submit" : addnewaccount.signinbutton();
	   Thread.sleep(3000);
	   break;
	   default : System.out.println("unable to click");
	   break;
	   };
	}

	@Then("^user fillup account title fild as \"([^\"]*)\"$")
	public void user_fillup_account_title_fild_as(String title) throws Throwable {
		addnewaccount.addTitle(title + randomNumber(999));
	}

	@Then("^user fillup discription filled \"([^\"]*)\"$")
	public void user_fillup_discription_filled(String discription) throws Throwable {
		addnewaccount.description(discription);
	}

	@Then("^user fillup initial balance filled \"([^\"]*)\"$")
	public void user_fillup_initial_balance_filled(String balance) throws Throwable {
		addnewaccount.initialbalance(balance);
	}

	@Then("^user fillup account number fild \"([^\"]*)\"$")
	public void user_fillup_account_number_fild(String account) throws Throwable {
		addnewaccount.accountNumber(account + randomNumber(999));
	}

	@Then("^user fillup contact filled \"([^\"]*)\"$")
	public void user_fillup_contact_filled(String contact) throws Throwable {
		addnewaccount.contactPerson(contact);
	}

	@Then("^user fillup phone number filed \"([^\"]*)\"$")
	public void user_fillup_phone_number_filed(String phone) throws Throwable {
		addnewaccount.phoneNumber(phone + randomNumber(999));
	}

	@Then("^user should be able to get confirmation message$")
	public void user_should_be_able_to_get_confirmation_message() throws Throwable {

	}
	@After
	public void afterMethod() throws IOException {
		
		takeScreenShoot(driver);
		//tearDown();
	}

}
