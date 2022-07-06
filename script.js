const BASE_URL='https://graph.instagram.com/9943873833?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJVdEdrUzgxRE9OVHJTaFdTVXJYLWJsVUg3TW1LVzFIUjlyeUJta1lFdUU2VXd4cFBWZAXdENDdHM3hoUVlfTFBtb2JOYmdSZAnl3c1czZAUZA1SHhfNHlyUTBkeG1nQVh5aWhPbFpCalBRWDZAQb0oxWAZDZD';
const RESULT_DIV=document.querySelector('#result');

const getInsta=async ()=>{
  try{

     const data=await fetch(BASE_URL)
     .then(res=>res.json())
     .catch(e=>console.log(e))

     return data;

  }catch(e){
     console.log(e.message);
  }
  
}

RESULT_DIV.innerHTML=await getInsta();

