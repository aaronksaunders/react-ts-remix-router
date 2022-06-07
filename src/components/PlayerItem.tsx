import React from  'react';
import { Player } from '../db-client';

export const PlayerItem = ({player}:{player:Player}) => {
    return (
        <div
        key={player.id}
        className="ui item"
        style={{ marginBottom: 8, marginTop: 8 }}
      >
        <p>NAME:{player.username}</p>
        <p>BIO:{player.bio}</p>
        <p>Team:{player.team?.name}</p>
      </div>
    )
}