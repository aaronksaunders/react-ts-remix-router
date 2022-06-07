import React from "react";
import { useLoaderData, useRouteError } from "react-router-dom";
import { Player, supabaseClient } from "../db-client";
import { PlayerItem } from "../components/PlayerItem";

const Players = () => {
  const { data, errors } = useLoaderData();

  return (
    <>
      {data?.players.length ? (
        <div>
          <h4>{data.name}</h4>
          <div className="ui list divided">
            {data.players.map((p: Player) => (
              <PlayerItem player={p} />
            ))}
          </div>
        </div>
      ) : (
        <p>
          No Players on Team{" "}
          <span style={{ fontWeight: "bold" }}>{data.name}</span>
        </p>
      )}{" "}
    </>
  );
};

/**
 * loads the player information based on the id of the team
 * @returns
 */
Players.loader = async ({ params }: { params: { teamId: string } }) => {
  try {
    let { data: playerInfo, error } = await supabaseClient
      .from("organizations")
      .select(
        `
      name,
      id,
      players ( * )
    `
      )
      .eq("id", params.teamId);
    if (error) throw error;
    return { data: playerInfo ? playerInfo[0] : null };
  } catch (error) {
    return { error };
  }
};

Players.Error = (props: any) => {
  const error = useRouteError();

  return (
    <div>
      <h2>Error in Players Component </h2>
      <p>{JSON.stringify(error)}</p>
    </div>
  );
};

export default Players;
