    document.addEventListener('DOMContentLoaded', function () {

    const saveBtn = document.getElementById('saveBtn');
    
    const userForm = document.getElementById('userForm');
    

    saveBtn.addEventListener('click', handleSave);

    function handleSave(event) {
        // Perform validation
        if (validateForm()) {
            // If validation passes, call the saveFormData function
            saveFormData();
        } else {
            // If validation fails, prevent the default form submission
            event.preventDefault();
        }
    }

    function validateForm() {
        // Get form elements
        var deptName = document.getElementById('deptName')?.value.trim();
        var eventName = document.getElementById('eventName')?.value.trim();
        var eventDate = document.getElementById('eventDate')?.value.trim();
        var rpname = document.getElementById('rpname')?.value.trim();
        var address = document.getElementById('address')?.value.trim();
        var number = document.getElementById('number')?.value.trim();
        var rphoto= document.getElementById('rphoto')?.value.trim();
        var invitation = document.getElementById('invitation')?.value.trim();
        var rpaddress = document.getElementById('rpaddress')?.value.trim();
        var rpaddress = document.getElementById(' caption')?.value.trim();
    

        // Define regular expressions for validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation flags
        var isValid = true;

        // validate all fields at once
        if (deptName === '' || eventName === '' || eventDate === '' || rpname === '' || address === '' || number === ''
            || rphoto === '' || invitation === '' || rpaddress === '' || caption === '') {
            alert('Please fill all the fields.');
            isValid = false; {
            alert('Please Fill All The Fields.');
            isValid = false;
        }
     }
        else {

        // Validate each field
        if (deptName === '') {
            alert('Please enter the deptName.');
            isValid = false;
        }

        if (eventName === '') {
            alert('Please enter the eventName.');
            isValid = false;
        }

        if ( eventDate=== '') {
            alert('Please enter the  eventDate.');
            isValid = false;
        }

        if (rpname === '') {
            alert('Please enter the rpname.');
            isValid = false;
        }

        if (address === '') {
            alert('Please enter the address.');
            isValid = false;
        }

        if (number === '') {
            alert('Please enter the number.');
            isValid = false;
        }

        if (caption=== '') {
            alert('Please enter the caption.');
            isValid = false;
        }
       

        if (invitation === '') {
            alert('Please upload invitation.');
            isValid = false;
        }

        if (rphoto === '') {
            alert('Please upload rphoto.');
            isValid = false;
        }

        if (rpaddress === '') {
            alert('Please upload rpaddress.');
            isValid = false;
        }

        // Return validation result
        return isValid;
    
        }
    }

        function saveFormData() {
        // Get form data
        const formData = new FormData(userForm);
        const userData = {};
        for (const [key, value] of formData.entries()) {
            userData[key] = value;
        }
    
        
        // Function to allow only numbers to be entered
        function isNumberKey(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
                return false;
            }
            return true;
        }
    
        // Function to validate if the input is 10 digits long
        function validatePhoneNumber() {
            var number = document.getElementById("number").value;
            if (number.length !== 10) {
                alert("Please enter a 10-digit phone number.");
                return false;
            }
            return true;
        }


        const eventDateInput = userForm.eventDate.value;
        const eventDate = new Date(eventDateInput);
        const formattedDate = `${String(eventDate.getDate()).padStart(2, '0')}-${String(eventDate.getMonth() + 1).padStart(2, '0')}-${eventDate.getFullYear()}`;
        userData.eventDate = formattedDate;

        const rphotoInput = userForm.rphoto;
        const invitationInput = userForm.invitation;
        const rpaddressInput = userForm.rpaddress;
    
        // Use the files property safely with optional chaining
        const rphotoUrl = rphotoInput?.files[0] ? URL.createObjectURL(rphotoInput.files[0]) : '';
        const invitationUrl = invitationInput?.files[0] ? URL.createObjectURL(invitationInput.files[0]) : '';
        const rpaddressUrl = rpaddressInput?.files[0] ? URL.createObjectURL(rpaddressInput.files[0]) : '';
    

        
        
        // Open new window and generate output
        const newWindow = window.open();
        const width = 1000 ; 
        const height = 11.69 * window.devicePixelRatio * 96;
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
           
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                
                <style>
                @page {
                        size: A4 portrait;
                        margin: 10px;
                       margin: 10px 0; /* top and bottom */
                    }
                            
                @media print {
                        .print-hidden {
                        display: none;
                    }
                        body {
                    margin: 10px;
                    margin: 10px 0; /* top and bottom */
                     }
                 }

                .page-wrapper {
                width: 890px; /* Set the fixed width of the content */
                height: 1200px; /* Set the fixed height of the content */
                padding: 10px; /* Padding inside the border */
                border:10px double purple; /* Fixed double border in purple color */
                background-color: white; /* Background color inside the border */
                box-sizing: border-box;
                margin: 20px;
                overflow: hidden; /* Prevent content overflow */
                min-width: 820px;
                margin-right: 20px !important;
                    }

                    table {
                        width: 96%;
                        border-collapse: collapse;
                        margin: 8px;
                        
                     align: center;
                     table.style.width = "600px";
                
                
                        title {
                            text-color: white;
                        }

                
                         }

                     th, td {
                        border: 2px solid black;
                        padding: 8px;
                        text-align: left;
                        font-family: 'Times New Roman', Times, serif; /* Set the font family */
                        font-size: 23px; /* Set the font size */

                    }

                    th {
                        width: 350px;
                        background-color: #f2f2f2;
                    }
                    h2 {
                        text-align: center;
                    }
                    h3 {
                    text-align: right;
                    padding-right: 20px;
                    }
                    
                    footer {
                    
                        text-align: right; /* Align content to the right */
                        padding-right: 60px2
                    }

                    @media print {
                        #downloadPdfBtn {
                            display: none !important;
                        }
                            body {
                    transform: scale(1cm); /* 98% scale */
                    transform-origin: center; /* Ensures scaling starts from the top-left corner */
                        }
                      }    
                </style>
                
             </head>
                <body>
                <div style="display: inline-block; margin-right: 20px; margin-left: 20px;">
                <div style="width: 890px; height: 1270px; padding: 10px; border: 10px double purple; background-color: white; box-sizing: border-box;">

                <!-- hicas header fixed as label -->
                <h1>
                <img src='hicas header new.jpg' height="150" width="780" style="vertical-align: top;" >
                </h1>

                <h2> ${userData.deptName}</h2>

                <!-- creating table and inserting user data  -->
                <table id="dataTable">
                    
                    <tbody>
                        <tr>
                            <td>Event Title :</td>
                            <td>${userData.eventName}</td>
                        </tr>
                        
                        <tr>
                            <td>Event Date :</td>
                            <td>${userData.eventDate}</td>
                        </tr>

                        <tr>
                            <td>Name of the Resource Person :</td>
                            <td>${userData.rpname}</td>
                        </tr>


                        <tr>
                            <td>Address :</td>
                            <td>${userData.address}</td>
                        </tr>
                        
                        <tr>
                            <td>Mobile No :</td>
                            <td>${userData.number}</td>
                        </tr>
                       

                        <style>
                            .fixed-size-image {
                            width: 370px;
                            height: 210px;
                            }
                        </style>          
                        </div>
                    </tbody>
                </table>


                <table border="1" id="imageTable" style="width: 96%;">

                 <tr>
                    <th colspan="2" style="width: 350px;">Photographs</th>

                 </tr>
                 <tr>
                    <td><img src="${rphotoUrl}" alt="Uploaded Photo" class="fixed-size-image"></td>
                    <td><img src="${invitationUrl}" alt="Uploaded Invitation" class="fixed-size-image"></td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align:center;">
                    <h2><img src="${rpaddressUrl}" alt="Uploaded Address" class="fixed-size-image"></h2>
                    <p>${userData.caption}</p>
                    </td>
                </tr>

                </table>

                <!-- creating download button  -->
                <button id="downloadPdfBtn">Download PDF</button>
                </div>
                </div>

                <script>
                var downloadBtn = document.getElementById('downloadPdfBtn');

                    // Add styles to the button
                    downloadBtn.style.backgroundColor = '#FF4B2B'; 
                    downloadBtn.style.border = 'none';
                    downloadBtn.style.color = 'white';
                    downloadBtn.style.padding = '15px 32px';
                    downloadBtn.style.textAlign = 'center';
                    downloadBtn.style.textDecoration = 'none';
                    downloadBtn.style.display = 'block'; // Set to block to center horizontally
                    downloadBtn.style.margin = 'auto'; // Center horizontally
                    downloadBtn.style.fontSize = '16px';
                    downloadBtn.style.cursor = 'pointer';
                    downloadBtn.style.borderRadius = '10px';


                    document.getElementById('downloadPdfBtn').addEventListener('click', function() {
                        window.print();
                    });
                </script>

    
            </body>
            </html>
        `);


        // Optional: Clear the form after saving
        userForm.reset();
        
    }
});