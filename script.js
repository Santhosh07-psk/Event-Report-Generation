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
        var name = document.getElementById('name').value.trim();
        var nature = document.getElementById('nature').value;
        var title = document.getElementById('title').value.trim();
        var fromDate = document.getElementById('fromDate').value.trim();
        var toDate = document.getElementById('toDate').value.trim();
        var ndays = document.getElementById('ndays').value.trim();
        var dname = document.getElementById('dname').value.trim();
        var chname = document.getElementById('chname').value.trim();
        var guestdetails = document.getElementById('guestdetails').value.trim();
        var Vname = document.getElementById('Vname').value.trim();
        var participants = document.getElementById('participants').value.trim();
        var convenor = document.getElementById('convenor').value.trim();
        var coordinators = document.getElementById('coordinators').value.trim();
        var stratum = document.getElementById('stratum').value;
        var purpose = document.getElementById('purpose').value.trim();
        var outcome = document.getElementById('outcome').value.trim();
        var photo1 = document.getElementById('photo1').value.trim();
        var photo2 = document.getElementById('photo2').value.trim();
        var photo3 = document.getElementById('photo3').value.trim();
        var photo4 = document.getElementById('photo4').value.trim();

        // Define regular expressions for validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation flags
        var isValid = true;

        // validate all fields at once
        if (name === ''|| nature === '' || title === '' ||fromDate === '' || toDate === ''
         || ndays === '' || dname === '' || chname === '' || Vname === '' || stratum === '' || 
         guestdetails === '' || participants === '' || convenor === '' || coordinators === ''|| 
         purpose === '' ||  outcome === ''  || photo1 === '' || 
         photo2 === '' || photo3 === '' || photo4 === '') {
            alert('Please Fill All The Fields.');
            isValid = false;
        }
        else {

        // Validate each field
        if (name === '') {
            alert('Please enter the event name.');
            isValid = false;
        }

        if (nature === '') {
            alert('Please enter the nature of the event.');
            isValid = false;
        }

        if (title === '') {
            alert('Please enter the title of the event.');
            isValid = false;
        }

        if (fromDate === '') {
            alert('Please select the from date.');
            isValid = false;
        }

        if (toDate === '') {
            alert('Please select the to date.');
            isValid = false;
        }

        if (ndays === '') {
            alert('Please enter the number of days.');
            isValid = false;
        }

        if (dname === '') {
            alert('Please enter the department/club name.');
            isValid = false;
        }
        if (chname === '') {
            alert('Please enter the Chief guest name.');
            isValid = false;
        }

        if (Vname === '') {
            alert('Please enter the Venue.');
            isValid = false;
        }

        if (stratum === '') {
            alert('Please enter the stratum.');
            isValid = false;
        }

        if (guestdetails === '') {
            alert('Please enter chief guest details.');
            isValid = false;
        }

        if (participants === '') {
            alert('Please enter the number of participants.');
            isValid = false;
        }

        if (convenor === '') {
            alert('Please enter the convenor.');
            isValid = false;
        }

        if (coordinators === '') {
            alert('Please enter the coordinators.');
            isValid = false;
        }

        if (purpose === '') {
            alert('Please enter the scope of event.');
            isValid = false;
        }

      

        if (outcome === '') {
            alert('Please enter outcomes of the event.');
            isValid = false;
        }

        

        if (photo1 === '') {
            alert('Please upload Invitation.');
            isValid = false;
        }

        if (photo2 === '') {
            alert('Please upload Photo2.');
            isValid = false;
        }

        if (photo3 === '') {
            alert('Please upload Photo3.');
            isValid = false;
        }

        if (photo4 === '') {
            alert('Please upload Photo4.');
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
                         margin-left: 10px;
                           width: 100px;
                    }

                @media print {
                    .print-hidden {
                        display: none;
                    }
                          .page-break {
                        page-break-before: always;
                    }
                
                }

                
                    table {
                        width: 94%;
                        border-collapse: collapse;
                        margin: 30px;
                        
                align: center;
                table.style.width = "600px";
                
                
                    title {
                            text-color: white;
                        }

                    }

                    td {
                    white-space: pre-wrap; /* This will preserve both spaces and line breaks */
                     }
                    
                    th, td {
                        border: 2px solid black;
                        padding: 8px;
                        text-align: left;
                        font-family: 'Times New Roman', Times, serif; /* Set the font family */
                        font-size: 23px; /* Set the font size */

                    }

                    th {
                        width: 400px;
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
                    }
                    
                </style>
                
            </head>
            <body>
           
                 <!-- creating table and inserting user data  -->

                <table id="dataTable">
                    
                    <tbody>
                    <tr>
                        <td colspan="2"> <img src='hicas header new.jpg' height="200" width="1000"></td>
                    </tr>

                    <tr>
                        <td><strong>D.Code - ${userData.name}</strong></td>
                        <td>${userData.dname}</td>
                    </tr>

                    <tr>
                        <td><strong>Nature of the Event :</strong></td>
                        <td>${userData.nature}</td>
                    </tr>
                        
                    <tr>
                        <td><strong>Title of the Event :</strong></td>
                        <td>${userData.title}</td>
                    </tr>

                    <tr>
                        <td><strong> Date :</strong></td>
                        <td>${formatDate(userData.fromDate)} to ${formatDate(userData.toDate)}</td>
                    </tr>
                        
                    <tr>
                        <td><strong>Number of Days :</strong></td>
                        <td>${userData.ndays}</td>
                    </tr>

                    <tr>
                        <td><strong>Chief Guest Name :</strong></td>
                        <td>${userData.chname}</td>
                    </tr>
                    
                    <tr>
                        <td><strong>Chief Guest Details :</strong></td>
                        <td>${userData.guestdetails}</td>
                    </tr>

                    <tr>
                        <td><strong>Venue :</strong></td>
                        <td>${userData.Vname}</td>
                    </tr>

                    <tr>
                        <td><strong>Scope of the Event :</strong></td>
                        <td>${userData.purpose}</td>
                    </tr>

                    <tr>
                        <td><strong>Number of Participants :</strong></td>
                        <td>${userData.participants}</td>
                    </tr>

                    <tr>
                        <td><strong>Convenor :</strong></td>
                        <td>${userData.convenor}</td>
                    </tr>
                        <!-- using span class for coordinators in the same box -->
                    <tr>
                        <td><strong>Coordinator(s) :</strong></td>
                        <td>${userData.coordinators} <br>
                        <span class="coordinators2">${userData.coordinators2 ? userData.coordinators2 : ''}</span><br>
                        <span class="coordinators3">${userData.coordinators3 ? userData.coordinators3 : ''}</span>
                    </tr>

                        <style>
                        .coordinators2 {
                        display:${userData.coordinators2 ? 'inline' : 'none'};
                          }
                        .coordinators3{
                         display:${userData.coordinators3 ? 'inline' : 'none'};
                         }
                        </style>

                    <tr>
                        <td><strong>Stratum of the Event :</strong></td>
                         <td>${userData.stratum}</td>
                    </tr>

                    <tr>
                         <td><strong>Outcomes of the Event :</strong></td>
                         <td>${userData.outcome}</td>
                    </tr>
 
                    <style>
                         .fixed-size-image {
                          width: 450px;
                          height: 400px;
                         }
                    </style>          
                    </div>
                    </tbody>
                    </table>

            <div class="page-break"></div>

              <!-- creating seperate table for photos  -->
                <table border="1" id="imageTable">
                    <tr>
                        <th colspan="2">Photographs</th>
                    </tr>
                        ${generateImageRows()}
                </table>

                 <!-- creating download button  -->
                <button id="downloadPdfBtn">Download PDF</button>

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

        
        //function for adding photos in the table and automatically generate rows 
        function generateImageRows() {
            const imageFields = document.querySelectorAll('input[type="file"][id^="photo"]');
            let rows = '';
            imageFields.forEach((field, index) => {
                const file = field.files[0];
                if (index % 2 === 0) rows += '<tr>'; // Start a new row for every two images
                if (file) {
                    const url = URL.createObjectURL(file);
                    rows += `<td><img src="${url}" alt="Uploaded Image ${index + 1}" class="fixed-size-image"></td>`;
                } else {
                    rows += '<td></td>'; // Empty cell if no file
                }
                if (index % 2 === 1) rows += '</tr>'; // End the row after two images
            });
            return rows;
        }

        // Optional: Clear the form after saving
        userForm.reset();
        
    }
});