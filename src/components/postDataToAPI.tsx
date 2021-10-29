interface postDataInterface {
    formObject: Object;
    apiUrlToPost: string;
}
// Post Data
const postDataToApi = async (allArgs: postDataInterface) => {
    const objPost: any = {
        method: "post",
        body: JSON.stringify(allArgs.formObject),
    };

    let strResponse: any = await fetch(allArgs.apiUrlToPost, objPost);
    console.log(strResponse);
};
export default postDataToApi;
