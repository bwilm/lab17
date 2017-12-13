$( document ).ready(function() {
    console.log( "ready!" );

    getlocations();
   

    $('#submit').click( function(){
     createDocument();
    
    })
     
      

    function createDocument(){
           
           
            let locAddress = $('#address').val();
            let phonenumber =$("#phone").val();
            let delivery= $("#deliver").val();
            let locationid = $("#location").val();

              console.log(locAddress);
           
            let document = {
                location: locationid, 
                address:locAddress,
                phone: phonenumber,
                deliver: delivery
            };

                  console.log(document);
                  console.log('created document');     
            
            postLocation(document);
    }

    function postLocation(document) {
        $.ajax({
            method: "POST",
            url: "/api/locations",
            contentType: "application/json",
            data: JSON.stringify(document)
        }).then(console.log(document));
    }



        function getlocations(){
            
             $.ajax({
                        method: "GET",
                        url: "/api/locations",
                        }).then((data) =>{
                            console.log(data);
                            let newLocation = data;
            
                            for (i=0; i<newLocation.length; i++)
                            {
                            let locationDiv = $('<div></div>');
                            let location = $("<li></li>");
                            let phone = $("<li></li>");
                            let deliver = $("<li></li>");
                            let address =$('<li></li>');
            
                            $(location).text(newLocation[i].location).appendTo(locationDiv);
                            $(phone).text(newLocation[i].phone).appendTo(locationDiv);
                            $(deliver).text(newLocation[i].delivery).appendTo(locationDiv);
                            $(address).text(newLocation[i].address).appendTo(locationDiv);
            
                            $(locationDiv).appendTo('#LocationBox');
                            console.log(newLocation[i]);
                            }
                        })
   


    
                    }
                })
                
            
        
    
  
    









                

            
    


            
    

    

  

    
    // There should be a set of input fields at the top of the page for creating a new location
    // Text box for location name
    // Checkbox for delivers
    // Tel box for phone
    // Series of text and number boxes for all address fields, with maxlength="2" for state and 5 for zip







