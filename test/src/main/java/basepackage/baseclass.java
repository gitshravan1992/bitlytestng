package basepackage;

import static io.restassured.RestAssured.given;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Properties;


import dataUtils.dataReadWrite;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.Before;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class baseclass {


	 protected static String group_guid;
	 protected static String token;
	protected static RequestSpecification tokenresponse;
	static Properties p=new Properties();
	protected static String url;
	protected static String username;
	protected static dataReadWrite excel=new dataReadWrite();

	
	public baseclass() {
		try {
			String path="src//main//java//resources//config.properties";

			FileInputStream file=new FileInputStream(path);
		
			p.load(file);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	public static String getUrl(){
		 url=p.getProperty("url");
		return url;
	}
	public static void setProperty(String key,String value){
		 p.setProperty(key, value);
	}
	
	public static String getUserName(){
		 username=p.getProperty("username");
		return username;
	}
	
	
	public void setresponse(){
		Response getres=null;
	}

	public static void setToken(String stoken){
		token=stoken;

	}
	
	
	public HashMap  getMapfromDataTable(DataTable data){
		HashMap<String,Object> mapdata=new HashMap<String,Object>(); 
		  List<List<String>> ldata = data.asLists();
	      System.out.println(ldata.get(1).get(1));
	      
	      for(int i=0;i<ldata.size();i++){
	    	  List<String> idata=ldata.get(i);
	     
	    	  for(int j=0;j<idata.size()-1;j=j+2){
	    		  mapdata.put(idata.get(j), idata.get(j+1));
	    	  }
	      }
		return mapdata;
	      

	}
	public static void setGroupGuid(){
		 String url=getUrl();
		 
		Response res =
				given().
				header("Authorization","Bearer "+token).

				when().
				get(url+"/groups").


				then().
				header("Content-Type", "application/json").extract().response();


		if(res.asString().contains("groups")){
			ArrayList<String> groups=new ArrayList<String>();
			groups=res.then().extract().path("groups.guid");
			group_guid=groups.get(0).toString();
			System.out.println("The get groups response is : "+res.asString());
			System.out.println("The group id is : "+group_guid);
			excel.writeExcel("group_guid", group_guid);
		}
	}

}
