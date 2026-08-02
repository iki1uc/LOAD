// LOAD_PIPE.js

import { LOAD_CORE } from "./LOAD_CORE.js";

export async function LOAD_PIPE(room){
  const data = await LOAD_CORE.fetch(room);

  return {
    room,
    data
  };
}
