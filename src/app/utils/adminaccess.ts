import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Adminaccess() {
  let { getPermission } = getKindeServerSession();
  let permission = await getPermission("delete:task");
  return permission;
}
