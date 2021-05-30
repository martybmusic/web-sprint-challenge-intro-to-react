import React from 'react'
import styled from 'styled-components'

const Character = (props) => {
    const { data } = props
    return (
        <div className = 'name'>
            {data.name}
        </div>
        <div className = 'info'>
            <p>Birth Year: {data.birth_year}</p>
            <
        </div>
    )
}