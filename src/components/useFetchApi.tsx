// Use of Fetch API Async
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

let strUrl: any = "http://localhost/personal/public/api/accounts";
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
            for (let x of arrData) {
                getDataOut += `<p>Name: ${x.name} Email: ${x.email} User Name:${x.username}</p>`;
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
