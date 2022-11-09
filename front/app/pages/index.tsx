
export default function PageWithJSbasedForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const data = {
      title: event.target.title.value};
    console.log(data)

    const JSONdata = JSON.stringify(data);
    console.log(JSONdata);

    // const endpoint = 'http://api:3000/create';

    // const options = {
    //   method: 'POST',
    //   mode: 'cors',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSONdata
    // };

    const response = await fetch( 'http://api:3000/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata
     } ).then(response => {
      if (!response.ok) {
        console.error('response.ok:', response.ok);
        console.error('response.status:', response.status);
        console.error('response.statusText:', response.statusText);
        throw new Error(response.statusText);
      }
      // ここに成功時の処理を記述
      console.log(response.json())
    })
    .catch(error => {
      // ネットワークエラーでも !response.ok でもここで処理できる
      console.error('エラーが発生しました', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <button type="submit">Submit</button>
    </form>
  );
}
