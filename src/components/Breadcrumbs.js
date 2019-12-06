import React, { useContext } from 'react'
import { Breadcrumb } from 'react-bootstrap'

import { ProgramContext } from '..'

export const Breadcrumbs = () => {
  const { breadcrumbs } = useContext(ProgramContext)

  return (
    <Breadcrumb>
      {(breadcrumbs || []).map(breadcrumb => (
        <Breadcrumb.Item href={breadcrumb.link || '#'}>
          {breadcrumb.name || 'Home'}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
