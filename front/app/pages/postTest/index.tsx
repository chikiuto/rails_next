import axios from "axios"

export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {
      // Stop the form from submitting and refreshing the page.
      event.preventDefault()
  
      // Get data from the form that be sent.
      const data = {
        title: event.target.title.value
      }

      // API endpoint where we send form data.
      const endpoint = 'http://0.0.0.0:3000/create'
      
      // Send the form data to our forms API on Vercel and get a response.
      const response = axios.post(endpoint, data)
      // const response = axios.post(endpoint, {"title":"kkkkkk"})
  
      // Get the response data from server as JSON.
      // If server returns the name submitted, that means the form works.
      const result = await response
      console.log(result)
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
  