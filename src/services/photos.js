import { createClient } from 'pexels';

const apiKey = import.meta.env.VITE_KEY_API_PEXELS;

const client = createClient(apiKey);

export const getPhotos = async ( photosPerPage, callBack) =>{
    let response = [];

    try {
        response = await client.photos.curated({
            page: 1,
            per_page: photosPerPage,
        });
        return response?.photos;
    } catch (error) {
        console.log(error);
    }finally{
        callBack();
    }
};