import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Program from './Program'
import { ProgramContext } from '..'

export const ProgramList = props => {
    const {programs} = useContext(ProgramContext)

    return <div className='clearfix'>
      <table className='table table-striped'>
        <tbody>
          {programs.map(program => (
            <tr key={program.id}>
              <td>{program.name}</td>
              <td className="text-right"><Link to={`/programs/${program.id}`}><i className='fas fa-arrow-right'></i></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    <button className='btn btn-success btn-sm float-right'>Add Program</button>
  </div>
}