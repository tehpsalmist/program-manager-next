import React, { useState, useContext, useMemo } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProgramContext } from '..'
import { ProgramComponentList } from '.'
import { ObjectEditor, SchemaTypes } from 'object-editor-react'
import { Tabs, Tab, Container } from 'react-bootstrap'

import { rpcClient } from '@zenginehq/zengine-sdk'

export const Program = props => {
  const { id } = useParams()
  const { data: { programs } } = useContext(ProgramContext)

  const program = programs.find(prog => Number(prog.id) === Number(id))

  if (!program) {
    return <h3>No Program Found</h3>
  }

  const [name, setName] = useState(program.name)
  const [description, setDescription] = useState(program.description)
  const [type, setType] = useState(program.type)

  const [tabKey, setTabKey] = useState('tab1')

  const schema = {
    name: SchemaTypes.string({ required: true }),
    description: SchemaTypes.string({ required: false }),
    type: SchemaTypes.string({ required: true })
  }

  return <div>
    <Link to={`/programs`}><i className='fas fa-arrow-left'></i>&nbsp;&nbsp;Back to List</Link>
    <form style={{ marginTop: '15px' }}>
      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="editName">Name:</label>
        <div className="col-sm-10">
          <input value={name} id="editName" className="form-control" onChange={e => setName(e.target.value)} />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="editDescription">Description:</label>
        <div className="col-sm-10">
          <textarea value={description} id="editDescription" className="form-control" onChange={e => setDescription(e.target.value)} />
        </div>
      </div>

      <div className="form-group row">
        <label className="col-sm-2 col-form-label" htmlFor="editType">Type:</label>
        <div className="col-sm-10">
          <input value={type} id="editType" className="form-control" onChange={e => setType(e.target.value)} />
        </div>
      </div>
    </form>

    <Tabs id='program-tabs' activeKey={tabKey} onSelect={k => setTabKey(k)}>
      <Tab eventKey='tab1' title='Tab 1'>
        <Container>
          <ProgramComponentList title='Applications' program={program} slug='applications' />
          <ProgramComponentList title='Reviews' program={program} slug='reviews' />
        </Container>
      </Tab>
      <Tab eventKey='tab2' title='Tab 2'>
        <Container>
          <ProgramComponentList title='Disbursements' program={program} slug='disbursements' />
        </Container>
      </Tab>
    </Tabs>

  </div>
}
