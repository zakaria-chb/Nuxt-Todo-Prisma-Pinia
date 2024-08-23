import prisma from '~/utils/prisma';

export default defineEventHandler(async (event) => {

  try {
    return await prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

})
