import Head from 'next/head'
import {Router, useRouter} from 'next/router';

export default function User() {
  const route=useRouter();

  return (
    <div>
      {route.query.user}
      </div>
  )
  }
