import React from 'react'
import md5 from 'md5'

function Gravatar(props) {
  const email = props.email;
  const hash = md5(email)

  return (
    <img
      className={props.className}
      // 4394d0b2a69f85cd20bdd759d281e4ec <---md5 de mi cuenta
      src={`http://gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  );
}

export default Gravatar
