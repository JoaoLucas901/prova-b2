import { Injectable, Controller, Post, HttpCode, Body } from '@nestjs/common';
import { z } from 'zod';
import { ZodValidationPipe } from 'nestjs-zod'; // Make sure to install nestjs-zod

    const createBookBodySchema = z.object({
      id: z.string().min(3),
      title: z.string().min(3),
      author: z.string().min(3),
      publicationYear: z.string().date(), 
      isbn: z.string(),
      createdAt: z.string(),
      updatedAt: z.string().email(),
    
    });

    const bodyValidationPipe = new ZodValidationPipe(createBookBodySchema);
    type createProductBodySchema = z.infer<typeof createBookBodySchema>;


    @Controller('/books')
    export class CreateBookController {
        constructor(){}


        @Post()
        @HttpCode(201)
        async handle(@Body(bodyValidationPipe) body: createBookBodySchema){
    
        }



    }   