// LOAD_CORE.js

import { LOAD_MAP } from "./LOAD_MAP.js";

export const LOAD_CORE = {

  async fetch(room){
    const file = LOAD_MAP[room];
    if(!file) return {};

    if(file.endsWith(".raw")){
      const res = await fetch(file);
      return await res.text();
    }

    if(file.endsWith(".json")){
      const res = await fetch(file);
      return await res.json();
    }

    return {};
  }
};
