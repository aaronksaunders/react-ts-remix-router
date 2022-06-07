import * as React from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { supabaseClient } from "../db-client";


const Team = () => {
  let { currentTeam, organizations } = useLoaderData();
  let navigate = useNavigate();

  return (
    <div>
      <p>TEAMS</p>
      <div className="ui form">
        <div className="field">
          <select
            defaultValue={currentTeam || ""}
            onChange={(event) => {
              if (event.target.value === "") {
                navigate("/teams");
              } else {
                navigate(`./${event.target.value}/players`);
              }
            }}
          >
            {" "}
            <option key={0} value="">
              PICK A TEAM
            </option>
            {organizations.map((d) => (
              <option key={d.id} value={d.id}>
                {d.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ui segment">
        <Outlet />
      </div>
    </div>
  );
};

Team.loader = async ({ params }) => {
  console.log(params);
  try {
    let { data: organizations, error } = await supabaseClient.from(
      "organizations"
    ).select(`
      *,
      players ( * )
    `);
    console.log(organizations);
    if (error) throw error;
    return { organizations, currentTeam: params?.teamId };
  } catch (e) {
    debugger;
    return [];
  }
};

export default Team;
