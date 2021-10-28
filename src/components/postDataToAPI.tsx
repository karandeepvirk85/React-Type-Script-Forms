interface postDataInterface {
    formObject: Object;
    apiUrlToPost: string;
}
// Post Data
function postDataToApi(allArgs: postDataInterface) {
    console.log(allArgs);
}
export default postDataToApi;
