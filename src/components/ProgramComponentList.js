import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const ProgramComponentList = ({ title, slug, program }) => (
  <div className='clearfix' style={{ paddingTop: '15px' }}>
    <NavLink to={`/programs/${program.id}/${slug}/add`} className='btn btn-primary btn-sm float-right' style={{ marginTop: '5px' }}>Add</NavLink>
    <h2>{title}</h2>
    <table className='table table-striped'>
      <tbody>
        {(program[slug] || []).map(comp => (
          <tr key={`app-${comp.id}`}>
            <th scope='row'>{comp.name}</th>
            <td className='text-right'><Link to={`/programs/${program.id}/${slug}/${comp.id}`}><i className='fas fa-arrow-right'></i></Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)