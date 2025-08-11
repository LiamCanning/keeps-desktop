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

// Assign unique avatars to a list of names deterministically (stable across reloads)
export function assignAvatars(names: string[]): Record<string, string> {
  const map: Record<string, string> = {};
  const used = new Set<string>();
  // Deduplicate names preserving order
  const uniqueNames = Array.from(new Set(names.filter(Boolean)));

  let poolIndex = 0;
  for (const name of uniqueNames) {
    if (map[name]) continue;
    // Advance until we find an unused avatar in the pool
    while (poolIndex < avatarPool.length && used.has(avatarPool[poolIndex])) {
      poolIndex++;
    }
    const avatar = avatarPool[poolIndex % avatarPool.length];
    map[name] = avatar;
    used.add(avatar);
    poolIndex++;
  }
  return map;
}
