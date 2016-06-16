
function selectPet(petType){

    // Get the specific pet data set
    var thisPetData = petData[petType];


    // Set the title
    jQuery('.petDisplayName').text(thisPetData["displayName"]);
   
    // Empty the specification data
    // jQuery('petsDataSpecs').empty();

    // Add the space required, size, weight
    jQuery('.petsDataSpecs').find('dt:first-child + dd').text(thisPetData["size"] + " " + thisPetData["weight"]);


    // Add logic to add the trainability and lap size images
    if(thisPetData["fitsOnLap"] === true){
        // jQuery('.petsDataSpecs').append('<div class="petsDataSpecs2"><dt>Fits On Lap</dt><dd>yes</dd></div>');
        jQuery('.fitsOnLap').text('yes');
    }
    else {
        jQuery('.fitsOnLap').text('no');
    }

    if(thisPetData["trainability"] === true){
        jQuery('.training').text('trainable')
    }
    else {
        jQuery('.training').text('not trainable')
    }

    // Add the foods (may require loop)
    var food = "";
     for(i = 0; i < thisPetData.foods.length; i++){
        food = food + "<li>" + thisPetData.foods[i] + "</li>";

        }
        food = "<ul>" + food + "</ul>";
        jQuery('.foods').html(food);



    // Update the images

        // Set the main image


        // Empty the thumbnails

        // Add the thumbnails



        // Apply the click event to thumbnails (note - this will likely need to be applied to the a and not the img direclty)


    // Empty the ideal for
        jQuery('.idealFor').empty();
    // Insert the ideal for
        var idealFor = "";
        for(i = 0; i < thisPetData.idealOwner.length; i++){
            idealFor = idealFor + "<li>" + thisPetData.idealOwner[i] + "</li>";
        }
        idealFor = "<ul>" + idealFor + "</ul>"
        jQuery('.idealFor').html(idealFor);

    // Empty the Adoption Groups
        jQuery('.adoptionGroups').empty();
    // Add the adoption groups
        var adoption = "";
        for(i = 0; i < thisPetData.adoption.length; i++){
            adoption = adoption + "<li>" + "<a href="" target='_blank'>" + thisPetData.adoption[i]['url'] + "</a>" + "</li>";
        }
        adoption = "<ul>" + adoption + "</ul>";
        jQuery('.adoptionGroups').html(adoption);

}// end selectPet



jQuery(document).ready(function(){

    // Initial run
jQuery('#petType').on('change', function(){
    var petType  = jQuery(this).val();
    selectPet(petType);
});

    //Update whenever a new value is picked

});