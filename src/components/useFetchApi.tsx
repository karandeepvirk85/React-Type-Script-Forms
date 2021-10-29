// Use of Fetch API Async
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

let strUrl: any = "http://localhost/slimapi/public/api/accounts";
let getDataOut: any;
const getUsersFromDB = async () => {
    // Waited for Response
    let arrData: any = await fetch(strUrl);
    let jsonData: any = arrData.json();
    return jsonData;
};

const UseFetchApi = () => {
    let [allNamesState, setNameState] = useState(false);
    // Resolved Promise
    let promiseObj: any = getUsersFromDB();
    promiseObj
        .then((arrData: any) => {
            for (let row of arrData) {
                getDataOut += `<p>Name: ${row.name} Email: ${row.email} User Name:${row.user_name}</p>`;
            }
            return getDataOut;
        })
        .then((getDataOut: any) => {
            if (getDataOut.length > 0) {
                setNameState(true);
            }
        });

    return (
        <p>{allNamesState ? ReactHtmlParser(getDataOut) : "Not Received"}</p>
    );
};

export default UseFetchApi;
