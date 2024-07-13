

import { ConnectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

ConnectDb();




export async function POST(request) {

    // fetch user detail from request


    const {
        name,
        email,
        password,
        about,
        street,
        city,
        state,
        country,
        pincode
    } = await request.json();

    // create user object with user model

    const newuser = new User({
        name,
        email,
        password,
        about,
        address: {
            street,
            city,
            state,
            country,
            pincode
        }
    })

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return NextResponse.json({
                message: "Email already exists",
                status: false
            }, {
                status: 400,
            });
        }

        // newuser.password = await bcrypt.hash(newuser.password, parseInt(process.env.BCRYPT_SALT))

        // save the object to database 
        const creatednewuser = await newuser.save();

        const response = NextResponse.json(
            creatednewuser,
            {
                message:"user created successfully",
                status: 201,
            }
        )

        return response;
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to create user",
            status: false
        }, {
            status: 500,
        })
    }
}
