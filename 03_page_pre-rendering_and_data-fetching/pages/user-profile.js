import React from 'react'

const UserProfile = (props) => {
  return (
    <h1>{props.username}</h1>
  )
}

// This only executes on the server after deployment, but it's not statically pre generated.
export const getServerSideProps = async (context) => {
  const { params, req, res } = context

  return {
    props: {
      username: 'Daniel'
    }
  }
}

export default UserProfile