import { use } from "react";

async function loadAdminUser(username: string, password: string) {
    console.log(`executing load admin user. username: ${username}, password: ${password}`);

    
}
const username = process.argv[2];
const password = process.argv[3];
loadAdminUser(username, password);