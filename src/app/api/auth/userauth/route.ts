import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Hit the API");

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let dbUser = await prisma.userInfo.findUnique({
    where: {
      kindeId: user.id,
    },
  });

  if (!dbUser) {
    dbUser = await prisma.userInfo.create({
      data: {
        kindeId: user.id as string,
        firstName: user.given_name as string,
        lastName: user.family_name as string,
        email: user.email as string,
        givename: user.given_name as string,
      },
    });
  }
  return NextResponse.redirect("http://localhost:3001/dashboard");
}
