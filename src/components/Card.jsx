import React from 'react'
import Button from './Button'

export const CardSimple = () => {
  return (
    <div className="card card-simple">
		<p className="muted">blablabla</p>
		<h2 className="subtitle">TITULOTEEEE</h2>
		<p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eos quasi vero unde quia rerum? Enim distinctio corporis, incidunt, quam doloribus odit ipsam, quas quidem eligendi dolores laudantium commodi fugit.</p>
		<Button
      id="animal"
      classTag="btn btn_blue"
      text="Lorem ipsum"
    />
	</div>
  )
}
