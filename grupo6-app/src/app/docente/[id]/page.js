async function getUser(id) {
    const rest = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await rest.json()
  
    return data.data
  }
  
  async function DocentePage({ params }) {
    const data = await getUser(params.id)
  
    return (
      <div>
        <h1>Info Docente</h1>
        <div>
          <img src={data.avatar} alt="" />
          <div>
            <h3>{data.id} {data.first_name} {data.last_name}</h3>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default DocentePage