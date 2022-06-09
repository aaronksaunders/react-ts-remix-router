import { IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { Player } from "../db-client";

export const PlayerItem = ({ player }: { player: Player }) => {
  return (
    <IonItem key={player.id} >
      <IonLabel style={{'color': 'black'}}>
      <p style={{'color': 'black'}}>NAME:{player.username}</p>
      <p style={{'color': 'black'}}>BIO:{player.bio}</p>
      <p style={{'color': 'black'}}>Team:{player.team?.name}</p>
      </IonLabel>
    </IonItem>
  );
};
