import prisma from '~/utils/prisma';


export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    await prisma.todo.delete({
      where: {id: body.id}
    })
    } catch (error) {
    console.error('Error deleting todo:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    });
  }

})
