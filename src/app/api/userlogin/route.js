import { ConnectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

ConnectDb();




export async function POST(request) {

    // fetch user detail from request

    const {
        email,
        password,
    } = await request.json();

    // create user object with user model


    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            if(existingUser.password===password)
            {
                return NextResponse.json(existingUser ,{
                    message:"Successfully Loged in"
                })
            }else{
                return NextResponse.json({
                    message: "Password not matched",
                    status: false
                }, {
                    status: 400,
                });
            }
            
        }else{
            return NextResponse.json({
                message: "Email not found",
                status: false
            }, {
                status: 400,
            });
        }

       
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to Login user",
            status: false
        }, {
            status: 500,
        })
    }
}