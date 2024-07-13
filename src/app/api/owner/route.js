

import { ConnectDb } from "@/helper/db";
import { Owner } from "@/models/owner";
import { NextResponse } from "next/server";

ConnectDb();

export async function POST(request) {

    // fetch user detail from request


    const {
        name,
        email,
        password,
        street,
        city,
        state,
        country,
        pincode
    } = await request.json();

    // create user object with user model

    const newowner = new Owner({
        name,
        email,
        password,
        address: {
            street,
            city,
            state,
            country,
            pincode
        }
    })

    try {

        const existingOwner = await Owner.findOne({ email });

        if (existingOwner) {
            return NextResponse.json({
                message: "Email already exists",
                status: false
            }, {
                status: 400,
            });
        }

        // newuser.password = await bcrypt.hash(newuser.password, parseInt(process.env.BCRYPT_SALT))

        // save the object to database 
        const creatednewowner = await newowner.save();

        const response = NextResponse.json(
            creatednewowner,
            {
                message:"Owner created successfully",
                status: 201,
            }
        )

        return response;
    }
    catch (error) {
        return NextResponse.json({
            message: "Failed to create owner",
            status: false
        }, {
            status: 500,
        })
    }
}
