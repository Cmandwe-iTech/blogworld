import React, { useEffect, useState } from "react";
import axios from "axios"
import { BlogContext } from "./createcontext";
const BlogContextProvider=(props)=>{
    const [apiData, setApiData] = useState([]);
    const [ProfileData, setProfileData] = useState({name:"",phone:""})
    console.log(apiData);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            setApiData(res.data)
        })
    },[])
    return(
        <BlogContext.Provider value={{
            apiData,
            ProfileData,
            setProfileData
        }}>
         {props.children}
        </BlogContext.Provider>
    )
}
export default BlogContextProvider;