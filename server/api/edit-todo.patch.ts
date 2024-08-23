import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    await prisma.todo.update({
      where: {
        id: body.id
      },
      data: {
        isFinished: body.isFinished
      }
    })
  } catch (error) {
    console.error('Error editing todo:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

})
