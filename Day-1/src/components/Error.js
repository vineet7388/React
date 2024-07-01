import { useRouteError } from "react-router-dom"

export const Error = () => {
    const err = useRouteError()
  return (
    <div>
        <h1>Opps Something went wrong...</h1>
        <h2>{err.status}:{err.statusText}</h2>
    </div>
  )
}

export default Error