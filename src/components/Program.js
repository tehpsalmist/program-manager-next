import React, { useState, useContext, useMemo } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ProgramContext } from '..'
import { ObjectEditor, SchemaTypes } from 'object-editor-react'

import { rpcClient } from '@zenginehq/zengine-sdk'

export const Program = props => {
  const { id } = useParams()

  const { programs } = useContext(ProgramContext)

  const program = programs.find(prog => Number(prog.id) === Number(id))

  if (!program) {
    return <h3>No Program Found</h3>
  }

  const [name, setName] = useState(program.name)
  const [description, setDescription] = useState(program.description)
  const [type, setType] = useState(program.type)

  const schema = {
    name: SchemaTypes.string({ required: true }),
    description: SchemaTypes.string({ required: false }),
    type: SchemaTypes.string({ required: true })
  }

  return <div>
    <form>
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
    <div className='clearfix'>
      <h2>Applications</h2>
      <table className='table table-striped'>
        <tbody>
          {(program.applications||[]).map(app => (
            <tr key={`app-${app.id}`}>
              <th scope='row'>{app.name}</th>
              <td className='text-right'><Link to={`/programs/${id}/applications/${app.id}`}><i className='fas fa-arrow-right'></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type='button' className='btn btn-primary btn-sm float-right'>Add Application</button>
    </div>

    <div className='clearfix'>
      <h2>Reviews</h2>
      <table className='table table-striped'>
        <tbody>
          {(program.reviews||[]).map(review => (
            <tr key={`review-${app.id}`}>
              <th scope='row'>{review.name}</th>
              <td className='text-right'><Link to=''><i className='fas fa-arrow-right'></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type='button' className='btn btn-primary btn-sm float-right'>Add Review</button>
    </div>

    <div className='clearfix'>
      <h2>Disbursements</h2>
      <table className='table table-striped'>
        <tbody>
          {(program.disbursements||[]).map(review => (
            <tr key={`review-${app.id}`}>
              <th scope='row'>{review.name}</th>
              <td className='text-right'><Link to=''><i className='fas fa-arrow-right'></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type='button' className='btn btn-primary btn-sm float-right'>Add Review</button>
    </div>
  </div>
}
