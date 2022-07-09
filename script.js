const RESULT_DIV=document.querySelector('#result');

const getInsta=()=>{
  try{
     const data=fetch(BASE_URL)
      .then(res=>res.json())
      .catch(e=>console.log(e))

     console.log(data);

  }catch(e){
     console.log(e.message);
  }
  
}

getInsta();

