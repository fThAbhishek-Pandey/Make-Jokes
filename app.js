console.log('Dad Jokes Starter');
const url = 'https://icanhazdadjoke.com/';
const btn = document.querySelector(".btn");
const result = document.querySelector(".res");
console.log(btn);
console.log(result);

btn.addEventListener('click',function(){
    console.log("I am ready to Generate jokes.");
    jokes();
});
const jokes = async ()=>{
    result.innerHTML = `<img class="logo" src="./swatikaAnimated.gif" alt="">`;
    console.log("I am going to make a jokes");
try{
    const response = await fetch (url, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'learning app',
        },
      });
    if(!response.ok){
        throw new Error (`HTTP error! status: ${response.status}`);
    }
     console.log("awaiting for jokes");
     console.log(response);
    const data = await response.json();
    console.log(data);
    console.log(data.joke);
    result.innerHTML= data.joke;
}
catch (error) {
    console.error('Error fetching the jokes:', error);
}
    
};
