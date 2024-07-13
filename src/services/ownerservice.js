


import { httpaxious } from "@/helper/httphelper";

export async function Signupownerr(data) {
    const result = await httpaxious.post("/api/owner", data).then((response) => response.data);
    return result
}

export async function Loginowner(data) {
    const result = await httpaxious.post("/api/ownerlogin", data).then((response) => response.data);
    return result
}