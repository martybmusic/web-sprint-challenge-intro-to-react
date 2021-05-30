import React from 'react';
import styled from 'styled-components';

const CharacterStyled = styled.div`
    color: darkslategrey;
    background-color: ivory;
`
const NameStyled = styled.h3`
    color: lightslategrey;
    border-style: inset;
`

const Character = (props) => {
    const { data } = props
    return (
        <CharacterStyled>
        <div className = 'name'>
            <NameStyled>{data.name}</NameStyled>
        </div>
        <div className = 'info'>
            <p>Birth Year: {data.birth_year}</p>
            <p>Homeworld: {data.homeworld}</p>
            <p>Height: {data.height}</p>
            <p>Hair Color: {data.hair_color}</p>
            <p>Eye Color: {data.eye_color}</p>
            <p>Films: {data.films}</p>
        </div>
        </CharacterStyled>
    )
}

export default Character