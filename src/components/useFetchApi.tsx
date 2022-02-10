// Use of Fetch API Async
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

let strUrl: any = "http://localhost/phpSlimApi/public/api/accounts";
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
        .then((data: any) => {
            return data.map((items:any,index:any) =>{
                return(
                    <p>Name: {items.name} Email: {items.email} User Name:{items.user_name}</p>
                )
            });
        })
        .then((data: any) => {
            if (data.length > 0) {
                getDataOut = data;
                setNameState(true);
            }
        });

    return (
        <p>{allNamesState ? getDataOut : "Not Received"}</p>
    );
};

export default UseFetchApi;
