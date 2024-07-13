


import { httpaxious } from "@/helper/httphelper";

export async function Signupuser(data) {
    const result = await httpaxious.post("/api/normaluser", data).then((response) => response.data);
    return result
}

export async function Loginuser(data) {
    const result = await httpaxious.post("/api/userlogin", data).then((response) => response.data);
    return result
}