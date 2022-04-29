package Runner;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(
   //path of feature file
   features = "src/test/java/features/bitlyapi.feature",
   glue = "stepDefination",
   plugin = { "pretty", "html:target/cucumber-reports" },
	monochrome = true,
	strict = true
   )
public class testRunner extends AbstractTestNGCucumberTests{
	 

}
