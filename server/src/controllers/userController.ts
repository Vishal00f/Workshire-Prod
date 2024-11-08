import { PrismaClient } from "@prisma/client";
import { Request,Response } from "express";

const prisma =new PrismaClient()

export const getUsers = async (req:Request,res:Response):Promise<void> => {
    try {
        const users = await prisma.user.findMany()
        res.json(users)
    } catch (error:any) {
        res.status(500).json({message:`Error retreiving userss :${error.message}`})
    }
}

export const createUser = async (req:Request,res:Response) => {
    try {
        const {
            username,
            cognitoId,
            profilePictureUrl="i1.jpg",
            teamId=1
        } = req.body
        const newUser = await prisma.user.create({
            data:{
                username,
                cognitoId,
                profilePictureUrl,
                teamId
            }
        })
        res.json({message:"User created Successfully",newUser})
    } catch (error:any) {
        res.status(500).json({message:`Error creating user :${error.message}`})
    }
}

    