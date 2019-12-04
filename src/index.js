import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'

export const App = props => {
  return <main className='flex-center h-screen bg-blue-200'>
    <h1 className='text-3xl text-blue-700'>Program Manager <em>Next!</em></h1>
  </main>
}

render(<App />, document.getElementById('app'))
