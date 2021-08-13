import { useEffect, useState } from "react";

export const GetMovieList = (year)=>{
    

    let API =`https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
    const [movies, setMovie] = useState([]);
   

    useEffect(() => {
        fetch(API).then((resp) => resp.json())
        .then((data)=>{
            setMovie(data.data);
            console.log(data);
        });
    }, []);   
     
    return movies;
}