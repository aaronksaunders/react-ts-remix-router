import { rest } from 'msw'

const players = [{
    id: 'f79e82e8-c34a-4d0-a49e-9fadc0979fda',
    name: 'Will Jones',
    team: {
        id: 'f79e82e8-c34a-4dc4-a49e-9fadc0979fda',
        name: 'Team Four',
    }
}, {
    id: 'f79e82e8-c34a-4d6-a49e-9fadc0979fda',
    name: 'Rob Corner',
    team: {
        id: 'f79e82e8-c34a-4dc4-a49e-9fadc0979fda',
        name: 'Team Four',
    }
}, {
    id: 'f79e82e8-c34a-4dc1-a49e-9fadc0979fda',
    name: 'Aaron Saunders',
    team: {
        id: 'f79e82e8-c34a-4dc3-a49e-9fadc0979fda',
        name: 'Team Three',
    }
}, {
    id: 'f79e82e8-c34a-4da1-a49e-9fadc0979fda',
    name: 'Aaron Johnson',
    team: {
        id: 'f79e82e8-c34a-4dc3-a49e-9fadc0979fda',
        name: 'Team Three',
    }
}, {
    id: 'f79e82e8-c34a-4dc8-a49e-9fadc0979fda',
    name: 'Andrea Saunders',
    team: {
        id: 'f79e82e8-c34a-4dc2-a49e-9fadc0979fda',
        name: 'Team Two',
    }
}, {
    id: 'f79e82e8-c34a-4dc3-a49e-9fadc0979fda',
    name: 'Bryce Saunders',
    team: {
        id: 'f79e82e8-c34a-4dc2-a49e-9fadc0979fda',
        name: 'Team Two',
    }
}, {
    id: 'f79e82e8-c34a-4dc4-a49e-9fadc0979fda',
    name: 'Reina Saunders',
    team: {
        id: 'f79e82e8-c34a-4dc1-a49e-9fadc0979fda',
        name: 'Team One',
    }
}]

export const handlers = [
    rest.get('/teams', (req, res, ctx) => {

        return res(
            ctx.json([{
                id: 'f79e82e8-c34a-4dc1-a49e-9fadc0979fda',
                name: 'Team One',
            }, {
                id: 'f79e82e8-c34a-4dc2-a49e-9fadc0979fda',
                name: 'Team Two',
            }, {
                id: 'f79e82e8-c34a-4dc3-a49e-9fadc0979fda',
                name: 'Team Three',
            }, {
                id: 'f79e82e8-c34a-4dc4-a49e-9fadc0979fda',
                name: 'Team Four',
            }])
        )
    }),
    rest.get('/players', (req, res, ctx) => {

        return res(
            ctx.json(players)
        )
    }),
    rest.get('/team/:teamId/players', (req, res, ctx) => {
        const { teamId } = req.params
        const foundPlayers = players.filter(p => {
            return p.team.id === teamId
        });
        return res(
            ctx.json(foundPlayers)
        )
    }),
]

