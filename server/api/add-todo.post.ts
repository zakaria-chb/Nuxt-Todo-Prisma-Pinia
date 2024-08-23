import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);



  try {
    await prisma.todo.create({
      data: {
        theTodo: body.theTodo,
        isFinished: body.isFinished
      } 
    })
  } catch (error) {
    console.error('Error adding todos:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

})
