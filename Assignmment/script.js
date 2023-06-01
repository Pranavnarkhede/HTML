function generateForm() {
    var formContainer = document.getElementById("formContainer");

    // Clear existing form if any
    formContainer.innerHTML = "";

    // Create the form dynamically
    var form = document.createElement("form");
    form.id = "studentForm";
    form.action = "submit.php";
    form.method = "post";

    var fields = [
        { label: "First Name:", id: "firstName", type: "text", required: true },
        { label: "Last Name:", id: "lastName", type: "text", required: true },
        { label: "Age:", id: "age", type: "number", required: true },
        { label: "Date of Birth:", id: "dob", type: "date", required: true },
        { label: "City:", id: "city", type: "text", required: true },
        { label: "Address:", id: "address", type: "textarea", required: true },
        { label: "10th Marks:", id: "marks10", type: "number", required: true },
        { label: "12th Marks:", id: "marks12", type: "number", required: true }
    ];

    fields.forEach(function(field) {
        var label = document.createElement("label");
        label.textContent = field.label;

        var input = document.createElement("input");
        input.id = field.id;
        input.name = field.id;
        input.type = field.type;
        if (field.required) {
            input.required = true;
        }

        var lineBreak = document.createElement("br");

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(lineBreak);
    });

    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";

    form.appendChild(submitButton);
    formContainer.appendChild(form);
}
