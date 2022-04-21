import React from "react";

export default function Redirect() {
  return <div>weird that you see me</div>;
}

export const getServerData = ({ query }) => {
  const Location = query?.redirectTo ?? `/`;
  console.log({ query, Location });
  return {
    headers: { Location },
    status: 302,
  };
};
