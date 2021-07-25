
async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } }
        ]
      }
    : {};

  const links = await context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
    orderBy: args.orderBy
  });

  const count = await context.prisma.link.count({ where });

  return {
    id: 'main-feed',
    links,
    count
  };
}





function feed_all(parent, args, context, info) {
    return context.prisma.link.findMany()
  }
  

async function feed_filter(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}  
    const links = await context.prisma.link.findMany({
      where,
    })  
    return links
}


async function feed_pagination(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
    })
  
    return links
  }


  async function feed_orderby(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
  
    return links
  }




  async function feed_count(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { url: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.link.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
  
    const count = await context.prisma.link.count({ where })
  
    return {
      links,
      count,
    }
  }


  module.exports = {
    feed,
    feed_all,
    feed_filter,
    feed_pagination,
    feed_orderby,
    feed_count,
  }