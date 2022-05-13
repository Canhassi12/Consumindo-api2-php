const dados = async function get() {
   const result = await fetch('http://127.0.0.1:8001/students', { method: 'GET' });
   const data = await result.json()

   let array = data

   array.forEach(myFunction)
   
   function myFunction(item) {
      console.log(item)
      document.getElementById('resultsApi').innerHTML +=  '\nname: ' + item.name
      document.getElementById('resultsApi').innerText +=  '\nage: ' + item.Age
      document.getElementById('resultsApi').innerText +=  '\nscore: ' + item.Score + '\n'
   }
}

async function post(name, age, score) {
   const obj = {
      name,  
      age,
      score
   }

   await fetch('http://127.0.0.1:8001/students', {
      headers: {
         'Content-Type': 'application/json',
      },
      mode:'no-cors', 
      method: 'POST', 
      body: JSON.stringify(obj)
   });
}

document.getElementById('submit').addEventListener('click', async function(fodasee){
 
   fodasee.preventDefault()
   
   const name = document.getElementById('name').value

   const age = document.getElementById('age').value

   const score = document.getElementById('score').value

   await post(name, age, score)
})

dados()
