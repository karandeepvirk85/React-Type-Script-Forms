interface postDataInterface {
    formObject: Object;
    apiUrlToPost: string;
}
// Post Data
const postDataToApi = (allArgs: postDataInterface) => {
    const objPost: any = {
        method: "POST",
        headers: {
            Accept: "/",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(allArgs.formObject),
    };

    let strResponse: any = fetch(allArgs.apiUrlToPost, objPost);
    console.log(strResponse);
};
export default postDataToApi;
