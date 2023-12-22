import axios from "axios";


export const BACKEND_ENDPOINT="https://qtify-backend-labs.crio.do";

export const fetchTopAlbums=async ()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchNewAlbums=async ()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}


export const fetchSongs=async ()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/songs`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}



export const fetchFilters=async ()=>{
    try{
        const response=await axios.get(`${BACKEND_ENDPOINT}/genres`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

// export const fetchTopAlbums = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
  
//       if (response.status >= 200 && response.status < 300) {
//         return response.data;
//       } else {
//         console.error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   export const fetchNewAlbums = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
  
//       if (response.status >= 200 && response.status < 300) {
//         return response.data;
//       } else {
//         console.error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };


//   export const fetchSongs = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_ENDPOINT}/albums/songs`);
  
//       if (response.status >= 200 && response.status < 300) {
//         return response.data;
//       } else {
//         console.error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };



//   export const fetchFilter = async () => {
//     try {
//       const response = await axios.get(`${BACKEND_ENDPOINT}/albums/genres`);
  
//       if (response.status >= 200 && response.status < 300) {
//         return response.data;
//       } else {
//         console.error(`Request failed with status ${response.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };