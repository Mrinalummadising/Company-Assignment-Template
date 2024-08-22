import './index.css'

const FirstItem = props => {
  const {eachDetails} = props
  const {email, name, website} = eachDetails

  return (
    <li className="list-item">
      <h1>{email}</h1>
      <p>{name}</p>
      <p>{website}</p>
    </li>
  )
}

export default FirstItem
