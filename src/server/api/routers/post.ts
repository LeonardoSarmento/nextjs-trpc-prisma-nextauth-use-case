import { z } from 'zod';

import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';

export const postRouter = createTRPCRouter({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Olá ${input.text}`,
    };
  }),

  create: protectedProcedure.input(z.object({ name: z.string().min(1) })).mutation(async ({ ctx, input }) => {
    return ctx.db.post.create({
      data: {
        name: input.name,
        createdBy: { connect: { id: ctx.session.user.id } },
      },
    });
  }),

  getLatest: protectedProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return post ?? null;
  }),

  getById: protectedProcedure.input(z.object({ id: z.number() })).query(async ({ ctx, input }) => {
    const post = await ctx.db.post.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id }, id: input.id },
    });

    if (!post) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No post with id '${input.id}'`,
      });
    }

    return post;
  }),

  getAllPosts: protectedProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      orderBy: { createdAt: 'desc' },
      where: { createdBy: { id: ctx.session.user.id } },
    });

    return { userId: ctx.session.user.id, username: ctx.session.user.name, posts } ?? null;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return 'you can now see this secret message!';
  }),
});
