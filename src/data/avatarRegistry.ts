// Centralized avatar registry to ensure unique avatars per user
// Imports of existing avatar assets
import alex from "@/assets/avatars/alex-avatar.png";
import david from "@/assets/avatars/david-avatar.png";
import emma from "@/assets/avatars/emma-avatar.png";
import f1Fan from "@/assets/avatars/f1-fan-avatar.png";
import golfFan from "@/assets/avatars/golf-fan-avatar.png";
import james from "@/assets/avatars/james-avatar.png";
import lisa from "@/assets/avatars/lisa-avatar.png";
import liverpoolFan from "@/assets/avatars/liverpool-fan-avatar.png";
import maria from "@/assets/avatars/maria-avatar.png";
import mike from "@/assets/avatars/mike-avatar.png";
import sarah from "@/assets/avatars/sarah-avatar.png";

import sports1 from "@/assets/mclaren-racing.jpg";
import sports2 from "@/assets/ryder-cup-golf.jpg";
import sports3 from "@/assets/liverpool-squad.jpg";

// Newly generated generic avatars
import a01 from "@/assets/avatars/avatar-01.png";
import a02 from "@/assets/avatars/avatar-02.png";
import a03 from "@/assets/avatars/avatar-03.png";
import a04 from "@/assets/avatars/avatar-04.png";
import a05 from "@/assets/avatars/avatar-05.png";
import a06 from "@/assets/avatars/avatar-06.png";
import a07 from "@/assets/avatars/avatar-07.png";
import a08 from "@/assets/avatars/avatar-08.png";
import a09 from "@/assets/avatars/avatar-09.png";
import a10 from "@/assets/avatars/avatar-10.png";
import a11 from "@/assets/avatars/avatar-11.png";
import a12 from "@/assets/avatars/avatar-12.png";
import a13 from "@/assets/avatars/avatar-13.png";

// The pool of available avatar images (order matters for deterministic assignment)
export const avatarPool: string[] = [
  alex, david, emma, f1Fan, golfFan, james, lisa, liverpoolFan, maria, mike, sarah,
  a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13,
];

// Gender-aware subsets and generic sports fallbacks
const femaleAvatars = [emma, lisa, maria, sarah, a01, a03, a05, a07, a09, a11, a13];
const maleAvatars = [alex, david, f1Fan, golfFan, james, mike, liverpoolFan, a02, a04, a06, a08, a10, a12];
const genericSports = [sports1, sports2, sports3];

const femaleNames = new Set([
  "sarah","emma","lisa","maria","jennifer","rachel","chloe","sophie","ava","elena","nina","priya"
]);
const maleNames = new Set([
  "david","mike","alex","james","marcus","tom","paul","chris","daniel","hiro","jonas","omar","luca","wei"
]);

// Assign unique avatars deterministically with gender-aware choices
export function assignAvatars(names: string[]): Record<string, string> {
  const map: Record<string, string> = {};
  const used = new Set<string>();
  const uniqueNames = Array.from(new Set(names.filter(Boolean)));

  // Rotating indices for each pool
  let femaleIdx = 0, maleIdx = 0, genericIdx = 0, fallbackIdx = 0;

  for (const name of uniqueNames) {
    if (map[name]) continue;
    const first = name.split(" ")[0]?.toLowerCase() || "";

    let pool: string[];
    if (femaleNames.has(first)) pool = femaleAvatars;
    else if (maleNames.has(first)) pool = maleAvatars;
    else pool = genericSports.concat(avatarPool);

    // pick next unused from pool
    let chosen: string | undefined;
    let attempts = 0;
    let startIdx = 0;
    if (pool === femaleAvatars) startIdx = femaleIdx;
    else if (pool === maleAvatars) startIdx = maleIdx;
    else startIdx = genericIdx;

    while (attempts < pool.length) {
      const idx = (startIdx + attempts) % pool.length;
      if (!used.has(pool[idx])) {
        chosen = pool[idx];
        break;
      }
      attempts++;
    }

    if (!chosen) {
      // fallback to global pool to guarantee assignment
      while (used.has(avatarPool[fallbackIdx % avatarPool.length])) fallbackIdx++;
      chosen = avatarPool[fallbackIdx % avatarPool.length];
      fallbackIdx++;
    }

    map[name] = chosen;
    used.add(chosen);

    if (pool === femaleAvatars) femaleIdx++;
    else if (pool === maleAvatars) maleIdx++;
    else genericIdx++;
  }
  return map;
}
