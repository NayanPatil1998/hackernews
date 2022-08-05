import Axios from "axios";
import { Post } from "../types/types";
import { BASE_URL } from "../utils/constants";


export const axios = Axios.create({
    baseURL: BASE_URL,
})

export const fetchPost = async (postID: string) => {
    const response = await axios.get<Post>(`${BASE_URL}items/${postID}`)
    // console.log(response.data)
    return response
}