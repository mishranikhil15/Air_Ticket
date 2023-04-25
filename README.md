* UserRoute

  * /register-In this route in the body we will send name,email,password of the user.
  <br>
  If everything is correct than server will send a response that "user registered successfully" and the data of that particular user will be stored in databse.
  <br>
If there is some error in the data like if datatype is not correct than we can server will throw error that what is the type of error and status code of that error.


  * /login-In this route in the body we will send email,password of the user.
  <br>
  If everything is correct and it matches with the data stored in database than than server will send a response that "user loggedin successfully"
  <br>
If there is some error in the data like if credentials didnt match than it will respond with error that login credentials are not correct with a status code of 201.

* FlightRoute
  * GET
  * /flights-In this route we will get data of all the different flight data present in the database
  <br>
  we will use find command for this.
  It is a get request to get all the data of all the flights.

  * /flight/id-In this we will get data of a particular flight with the help of its id which is passed as a params.
  If id exists than all the data of that flight will be returned to the user
  <br>
  Otherwise it will give error no such flight exists.


  * POST

  * /flights-It is a post request which is used to add data of new flights in database.
  <br>
  If all the data is correct and is according to our schema than the data will be stored in databse of ne flight.
  <br>
  If there is any error while storing the data than it will respond with error status which will be 201.
  
  * PATCH
  * /flight/id-It is a patch request which is used to update data of flights already stored in database.
  <br>
  From the body user will send the data which he/she wants to update and in backened if it matches with the userid than the data is updated and a response is send "data updated successfully"
  <br>
If there is a mismatch in the Id than error message will be given to user saying that "Error in updating the Id"
  
  * DELETE

   * /flight/id-It is a delete request which is used to delete data of flights which no longer exists.<br>

   * user will send id of the flight which he want delete and if it matches with id present in our databse than we will delete that flightdetails of that particular flight and response will be sent data deleted successfully.<br>
If there is a misamtch in the id than it will throw out an error that error while deleting the data.




    