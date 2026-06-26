const inputUser = document.querySelector('form #username')
const inputPassword = document.querySelector('form #password')
const btnForm = document.querySelector('form button')
const formMessage = document.querySelector('form .message')


document.addEventListener('submit',(e)=>{
  e.preventDefault()
})

btnForm.addEventListener('click', async()=>{

  const username = inputUser.value
  const password = inputPassword.value  

  if(username.length == 0 || password.length == 0){
    return messageForm('debe llenar todos los campos', false)
  }

  const res = await postLogin(username,password)

  if(res.ok){
    messageForm('Se envio la solicitud',true)
    inputUser.value = ''
    inputPassword.value = ''
  }else{
    const result = await res.json()
    if(result.message){
      messageForm(result.message, false)
    }
  }

})


async function postLogin(username, password){
  const res = await fetch('/login',{
    'method' : 'POST',
    'headers' : {
      'Content-type' : "application/json"
    },
    'body' : JSON.stringify({
      username : username,
      password : password
    })
  })

  return res
}

function messageForm(message, boolean = true){
  formMessage.className = 'message'
  
  formMessage.textContent = message
  
  if(boolean){
    formMessage.classList.add('great')
  }else{
    formMessage.classList.add('wrong')
  }
  
  setTimeout(()=>{
    formMessage.className = 'message'
  },3000)
}