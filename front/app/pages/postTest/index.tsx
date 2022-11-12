import axios from "axios"

export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form.
      const data = {
        title: event.target.title.value,
      }
  
      // Send the data to the server in JSON format.
      const JSONdata = JSON.stringify(data)
      console.log(JSONdata)
  
      // API endpoint where we send form data.
      const endpoint = 'http://0.0.0.0:3000/create'
      // Form the request for sending data to the server.
      const options = {
        // The method is POST because we are sending data.
        method: 'POST',
        
        // The mode is no-cors because we avoid promis rejected.
        mode: 'no-cors',

        // Tell the server we're sending JSON.
        headers: {
          'Content-Type': 'application/json',
        },
        // Body of the request is the JSON data we created above.
        // body: JSON.stringify({ "title": "kkkkkkkk" }) ,
        body: { "title": "kkkkkkkk" } ,
        // body: JSONdata,
      }
      // Send the form data to our forms API on Vercel and get a response.
      // const response = await fetch(endpoint, options)
      // console.log(options)


      const response = axios.post('http://0.0.0.0:3000/create', {title:'jjjjjjj'})
  

      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response
      console.log(result)
    //   alert(`Is this your full name: ${result}`)
    }
    return (
      // We pass the event to the handleSubmit() function on submit.
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
        <button type="submit">Submit</button>
      </form>
    )
  }
  