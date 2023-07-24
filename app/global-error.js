'use client'

import Loading from "./loading"

 
export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1 style={{textAlign : 'center'}}>Something went wrong!</h1>
        <Loading/>
      </body>
    </html>
  )
}