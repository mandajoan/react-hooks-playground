import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router-dom'

const Box = styled.div`
width: 200px; 
height: 200px;
max-width: 90%;
max-height: 90%;
background-image: linear-gradient(to bottom right, red, yellow);
`
const Games = [ {title: 'Tic-Tac-Toe', path: '/tic-tac-toe'}, {title: 'TypeRacer', path:'/type-racer'}]

const GameButton = ({title, path }) => {
    return (
        <a href={path}>
        <Box >
            {title}
        </Box>
        </a>
    )
}


const Dashboard = () => {
    return (
        <div>
            {Games.map((game, index) => (
                <GameButton key={index} title={game.title} path={game.path}/>
             ) )}
        </div>
    )
}

export default withRouter(Dashboard);