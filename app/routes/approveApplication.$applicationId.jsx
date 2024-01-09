import { json } from "react-router";
import { approveApplicationSatus } from "../data/applicationStatus";

export async function loader({params}){
    await approveApplicationSatus(params.applicationId);
    return json({response: 'OK'});
}