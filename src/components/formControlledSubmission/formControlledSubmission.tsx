import { useState } from "react";
import initialFormObject from "./Interface";
import postDataToApi from "../postDataToAPI";

const FormElement: any = () => {
    const [formObj, setValue] = useState<initialFormObject>(Object);
    let postObject: any = {};
    let strPostUrl: string = "http://";
    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(formObj).length === 4) {
            Object.assign(postObject, { formObject: formObj });
            Object.assign(postObject, { apiUrlToPost: strPostUrl });
            postDataToApi(postObject);
        } else {
            alert("Please fill all the fields");
        }
    };
    const handleChange: any = (e: any) => {
        if (e.target.name === "name") {
            Object.assign(formObj, { name: e.target.value });
            if (formObj.name.length === 0) {
                delete formObj.name;
            }
            setValue(formObj);
        }

        if (e.target.name === "email") {
            Object.assign(formObj, { email: e.target.value });
            if (formObj.email.length === 0) {
                delete formObj.email;
            }
            setValue(formObj);
        }

        if (e.target.name === "username") {
            Object.assign(formObj, { username: e.target.value });
            if (formObj.username.length === 0) {
                delete formObj.username;
            }
            setValue(formObj);
        }

        if (e.target.name === "password") {
            Object.assign(formObj, { password: e.target.value });
            if ("password" in formObj && formObj.password.length === 0) {
                delete formObj.password;
            }
            setValue(formObj);
        }
    };

    return (
        <div>
            <h2>
                Simple Form Handling Using One Function with Controlled Inputs.
                <p>
                    When user types react gets the value update the states and
                    show those state inside inputs.
                </p>
            </h2>
            <form method="post">
                <p>
                    <input
                        type="text"
                        name="name"
                        value={formObj.name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Enter Name"
                    />
                </p>
                <p>
                    <input
                        type="text"
                        value={formObj.email}
                        onChange={(e) => handleChange(e)}
                        name="email"
                        placeholder="Enter Email"
                    />
                </p>
                <p>
                    <input
                        type="text"
                        value={formObj.username}
                        onChange={(e) => handleChange(e)}
                        name="username"
                        placeholder="Enter User Name"
                    />
                </p>

                <p>
                    <input
                        type="password"
                        value={formObj.password}
                        onChange={(e) => handleChange(e)}
                        name="password"
                        placeholder="Enter Password"
                    />
                </p>
                <button onClick={(e) => handleSubmit(e)}>Add Acount</button>
            </form>
        </div>
    );
};

export default FormElement;
