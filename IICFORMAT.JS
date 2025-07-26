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
        var dname = document.getElementById('dname').value.trim();
        var title = document.getElementById('title').value.trim();
        var fromDate = document.getElementById('fromDate').value.trim();
        var toDate = document.getElementById('toDate').value.trim();
        var participants = document.getElementById('participants').value.trim();
        var purpose = document.getElementById('report').value.trim();
        var photo1 = document.getElementById('photo1').value.trim();
        var photo2 = document.getElementById('photo2').value.trim();
        var photo3 = document.getElementById('photo3').value.trim();
        var photo4 = document.getElementById('photo4').value.trim();
        
        // Define regular expressions for validation
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation flags
        var isValid = true;

        // validate all fields at once
        if (title === '' ||fromDate === '' || toDate === '' || dname=== ''
          || participants === '' || report === '' ||  photo1 === '' || 
         photo2 === '' || photo3 === ''  || photo4 === '') {
            alert('Please Fill All The Fields.');
            isValid = false;
        }
        else {

        // Validate each field
        
        if (dname === '') {
            alert('Please enter  the event Name.');
            isValid = false;
        }

        if (title === '') {
            alert('Please enter  the event Name.');
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

      

        if (participants === '') {
            alert('Please enter the number of participants.');
            isValid = false;
        }

       
        if (report === '') {
            alert('Please enter the Report of event.');
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
                        margin: 40px;
                        
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
                        <td colspan="2"><h1><img src='hicasIIC Header.jpg' height="200" width="870"></h1></td>
                    </tr>

                    <tr>
                        <td colspan="2"><h2>${userData.dname}</h2></td>
                    </tr>


                    <tr>
                        <td><strong> Date of the Event :</strong></td>
                        <td>${formatDate(userData.fromDate)} to ${formatDate(userData.toDate)}</td>
                    </tr>

                    <tr>
                        <td><strong>Name of the Event :</strong></td>
                        <td>${userData.title}</td>
                    </tr>

                    <tr>
                        <td><strong>Number of Participants :</strong></td>
                        <td>${userData.participants}</td>
                    </tr>
                        

                    <tr>
                        <td><strong>Report :</strong></td>
                        <td>${userData.report}</td>
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

                <table border="1" id="imageTable" style="width: 94%;">

                    <tr>
                        <th colspan="2" style="width: 350px;">Photographs</th>

                    </tr>

                    <tr>
                        <td><img src="${URL.createObjectURL(userForm.photo1.files[0])}" alt="Uploaded Photo" class="fixed-size-image"></td>
                        <td><img src="${URL.createObjectURL(userForm.photo2.files[0])}" alt="Uploaded Photo" class="fixed-size-image"></td>
                    </tr>

                    <tr>
                        <td><img src="${URL.createObjectURL(userForm.photo3.files[0])}" alt="Uploaded Photo" class="fixed-size-image"></td>
                        <td><img src="${URL.createObjectURL(userForm.photo4.files[0])}" alt="Uploaded Photo" class="fixed-size-image"></td>
                     </tr>
                    </table>
                    
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