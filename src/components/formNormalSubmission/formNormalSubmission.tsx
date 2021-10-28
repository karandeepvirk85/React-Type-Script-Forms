import { useState } from "react";

// Handle Form Normal Submission
const FormNormalSubmission = () => {
    // Use State Hook to save form Values
    const [formValues, SetValues] = useState(Object);
    const objLangugaes: any = {};
    // Save checkboxes object in the main form object
    const handleCheckBoxes = (e: any) => {
        let checkBoxKey: any = e.target.value;
        if (e.target.checked === true) {
            objLangugaes[checkBoxKey.toUpperCase()] = true;
        } else {
            delete objLangugaes[checkBoxKey.toUpperCase()];
        }
        // Assign langugages key value pair with all the checked langugaes
        Object.assign(formValues, { langugaes: objLangugaes });
        // Update Main object
        SetValues(formValues);
    };

    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        // Assign name
        Object.assign(formValues, { name: e.target.fullname.value });
        // Assign Email
        Object.assign(formValues, { email: e.target.email.value });
        // Assign Job Title
        Object.assign(formValues, { jobTitle: e.target.jobtitle.value });
        console.log(formValues);
        SetValues(formValues);
    };

    return (
        <form method="post" onSubmit={(e) => handleFormSubmit(e)}>
            <h2>Job Form</h2>
            <p>
                <input
                    type="text"
                    name="fullname"
                    placeholder="Enter Name"
                    required
                />
            </p>
            <p>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    required
                />
            </p>
            <h3>Job Title</h3>
            <input
                type="radio"
                name="jobtitle"
                value="react-js-developer"
                required
            />
            React JS Developer
            <input
                type="radio"
                name="jobtitle"
                value="Front-end-developer"
                required
            />
            Front End Developer
            <input
                type="radio"
                name="jobtitle"
                value="back-end-developer"
                required
            />
            Back End Developer
            <h3>Languages</h3>
            <input
                onChange={(e) => handleCheckBoxes(e)}
                type="checkbox"
                name="languages"
                value="php"
            />
            PHP
            <input
                onChange={(e) => handleCheckBoxes(e)}
                type="checkbox"
                name="languages"
                value="React"
            />
            React
            <input
                onChange={(e) => handleCheckBoxes(e)}
                type="checkbox"
                name="languages"
                value="JS"
            />
            JS Developer
            <input
                onChange={(e) => handleCheckBoxes(e)}
                type="checkbox"
                name="languages"
                value="SASS"
            />
            SASS
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
};
export default FormNormalSubmission;
