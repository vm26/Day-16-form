document.body.innerHTML = `<form id="form" onsubmit="return check()">
<h1 id='title'>Hotel LeePalace</h1>
<p id='description'>Customer Details</p>
<div class="form-group">
<label for="fname">First name:</label>
<input type="text" name="fname" id="first-name" placeholder="Enter your first name" required><br>
<label for="lname">Last name:</label>
<input type="text" name="lname" id="last-name" placeholder="Enter your last name" required><br>
<label for="gender">Gender:</label>
<input type="radio" name="gender" id="gender">Male
<input type="radio" name="gender" id="gender">Female<br>
<label for="add">Address:</label>
<textarea name="address" id="address" cols="30" rows="3" placeholder="Enter your address here"></textarea><br>
<label for="pin">Pin Code:</label>
<input type="text" pattern="[0-9]{6}" name="pin" id="pincode" placeholder="eg:614666" required><br>
<label for="state">State:</label>
<input type="text" name="state" id="state"><br>
<label for="country">Country:</label>
<input type="text" name="country" id="country"><BR>
<label for="food">Choice of food:</label>
<input type="checkbox" name="food" id="food1">Vegetarian
<input type="checkbox" name="food" id="food2">Non-Vegetarian
<input type="checkbox" name="food" id="food3">Chinese
<input type="checkbox" name="food" id="food4">South-Indian
<input type="checkbox" name="food" id="food5">Any <br>
</div>
<input type="reset" value="Reset" class='btn'>
<input class='btn btn-primary' type="submit" value="Submit" id="submit" >
</form>
<div>
<table class="table">
<thead >
    <tr>
        <th class='col-2'>First Name</th>
        <th class='col-2'>Last Name</th>
        <th class='col-2'>Address</th>
        <th class='col-2'>Pincode</th>
        <th class='col-2'>State</th>
        <th class='col-2'>Country</th>
    </tr>
    </thead>
    <tbody id='tid'>    
    </tbody>
</table>
</div>`;

function check(){
        var checkedboxes= document.querySelectorAll('input[type=checkbox]:checked');              
        if(checkedboxes.length<2){
        alert('Please select atleast 2 choices of food')  ;        
        }
        else if (checkedboxes.length >= 2)
        {
            var table = document.getElementById('tid');
            var row = table.insertRow();
            var name1 = row.insertCell(0);
            var name2 = row.insertCell(1);
            var address1 = row.insertCell(2);
            var pincode1 = row.insertCell(3);
            var state1 = row.insertCell(4);
            var country1 = row.insertCell(5);
            name1.innerHTML = document.getElementById("first-name").value;
            name2.innerHTML = document.getElementById("last-name").value;
            address1.innerHTML = document.getElementById("address").value;
            pincode1.innerHTML = document.getElementById("pincode").value;
            state1.innerHTML = document.getElementById("state").value;
            country1.innerHTML = document.getElementById("country").value;
            (function () {
                document.getElementById('form').reset();
            })();
            return false; 
        }      
         
}





