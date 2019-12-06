import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProgramContext } from '..'

export const ProgramList = props => {
  const { data: { programs } } = useContext(ProgramContext)

  return (
    <>
      <h2>Programs</h2>
      <div className='clearfix'>
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
        <button type='button' className='btn btn-primary btn-sm float-right'>Add Program</button>
      </div>
    </>
  )
}