import { useLoaderData, useRouteError } from "react-router-dom";
import React from "react";
import { Player, supabaseClient } from "../db-client";
import { PlayerItem } from "../components/PlayerItem";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";

const AllPlayers = () => {
  const { allPlayers, errors } = useLoaderData();
  return (
    <div className="ion-padding">
      {allPlayers?.length ? (
        <div>
            {allPlayers.map((p: Player) => (
              <PlayerItem player={p} />
            ))}
        </div>
      ) : (
        <p>
          No Players on Team <span style={{ fontWeight: "bold" }}></span>
        </p>
      )}{" "}
    </div>
  );
};

/**
 * loads the player information based on the id of the team
 * @returns
 */
AllPlayers.loader = async () => {
  try {
    // get all players
    // foriegn key table is organizations
    // renaming property to 'teams' in response
    let { data: allPlayers, error } = await supabaseClient
      .from("players")
      .select(`*, team:organizations(id, name)`);
    if (error) throw error;
    return { allPlayers: allPlayers ? allPlayers : null };
  } catch (error) {
    return { error };
  }
};

AllPlayers.Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h2>Error in Players Component </h2>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default AllPlayers;
