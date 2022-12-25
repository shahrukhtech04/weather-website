const weatherform = document.querySelector('#weather')
const search  =  document.querySelector('#location')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherform.addEventListener('submit',(e) => {
    e.preventDefault();
    
        const location = search.value
            if(!location){
              return  console.log('Please enter address in order to get the temperatue')
            }

            messageOne.textContent = 'Loading....,Please Wait!'
            messageTwo.textContent = ''

            fetch(`http://localhost:3001/weather?address=${location}`).then((response) => {

                 response.json().then((data) => {

                    if(data.error){
                        messageOne.classList.add("error");
                         return  messageOne.textContent = data.error
                    }

                    const { forecast, location } = data
                    messageOne.classList.remove("error");
                    messageOne.textContent = location
                    messageTwo.textContent = forecast
               
                })


        })

})




