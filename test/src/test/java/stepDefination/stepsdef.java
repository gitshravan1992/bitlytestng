package stepDefination;

import static io.restassured.RestAssured.*;

import org.hamcrest.Matchers;
import org.omg.Messaging.SyncScopeHelper;
import org.testng.Assert;
import org.testng.annotations.Test;

import basepackage.baseclass;
import dataUtils.dataReadWrite;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


public class stepsdef extends baseclass{


	public stepsdef(){
		getUrl();
		setGroupGuid();

	}
	static  Response res;

	@Given("^user has generated \"([^\"]*)\" token for Authorization$") 
	public  void authorization(String gtoken){
		System.out.println("The authorization for token is = "+gtoken);
		setToken(gtoken);
		setGroupGuid();
		tokenresponse =
				given().
				header("Authorization","Bearer "+token).
				header("Content-Type", "application/json");


	} 	

	@When("^user performs  GET\\/groups\\/\\{group_guid}$")
	public void getGroups() {

		System.out.println("To perform GET response of = "+url+"/groups/"+group_guid);
		res=tokenresponse.
				when().
				get(url+"/groups/"+group_guid);
	}

	@Then("^user retrieves response status code as ([^\"]*)$")
	public void validateStatusCode(int response) {	
		res.
		then().
		assertThat().
		statusCode(response);

	}

	@Then("^user retrieves all details for a group$") 
	public  void retreiveDetails(){
		res.
		then().
		header("Content-Type", "application/json").extract().response();
		System.out.println("The get group_guid response is : "+res.asString());
	}

	@Then("^user validates whether json body \"([^\"]*)\" has value \"([^\"]*)\"$") 
	public  void validateDetails(String key,String value){
		res.
		then().
		header("Content-Type", "application/json").extract().response();

		JsonPath js = new JsonPath(res.asString());
		String val = js.getString(key);
		System.out.println(key+" has value "+val);
		Assert.assertEquals(value, val);
	}

	@When("^user performs  GET\\/groups\\/\\{group_guid}\\/bitlinks\\/\\{sort}$")
	public void getSortGroups() {
		System.out.println("To perform GET response of = "+url+"/groups/"+group_guid+"/bitlinks/clicks?unit=month");

		res=tokenresponse.
				when().
				get(url+"/groups/"+group_guid+"/bitlinks/clicks?unit=month");
	}


	@Then("^user gets list of bitlinks sorted by group$") 
	public  void validateResponse_Sort(){

		res.
		then().
		header("Content-Type", "application/json").extract().response();

		System.out.println("The get sort response is : "+res.asString());


		ArrayList<String> sorts=res.then().extract().path("sorted_links");
		System.out.println("The sorted list is : "+sorts);
		excel.writeExcel("sorted_links", sorts.toString());

	}

	@Given("^user has entered json body with below contents$")
	public void setBodyjson(DataTable data){
		HashMap<String,Object> mapdata=new HashMap<String,Object>(); 
		mapdata=getMapfromDataTable(data);

		System.out.println("The contents of body are :"+mapdata.toString());

		tokenresponse=tokenresponse.
				header("Content-Type","application/json").
				contentType(ContentType.JSON).
				body(mapdata);


	}

	@When("^user performs POST\\/bitlinks$") 
	public static void postResponse_bitlinks(){

		System.out.println("To perform POST response of ="+url+"/bitlinks");
		res=tokenresponse.
				when().
				post(url+"/bitlinks");

	}

	@Then("^a bitlink is created$") 
	public static void creationBitlink(){

		String bitlink=res.
				then().
				extract().path("link").toString();

		System.out.println("The bitlink created is = "+bitlink);
		excel.writeExcel("bitlink", bitlink);



	}




}
