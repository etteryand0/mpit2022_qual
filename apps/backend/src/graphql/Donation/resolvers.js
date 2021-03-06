const Donation = {
  Query: {
    findUniqueDonation: (_parent, args, { prisma }) => {
      return prisma.donation.findUnique(args)
    },
    findFirstDonation: (_parent, args, { prisma }) => {
      return prisma.donation.findFirst(args)
    },
    findManyDonation: (_parent, args, { prisma }) => {
      return prisma.donation.findMany(args)
    },
    findManyDonationCount: (_parent, args, { prisma }) => {
      return prisma.donation.count(args)
    },
    aggregateDonation: (_parent, args, { prisma }) => {
      return prisma.donation.aggregate(args)
    },
  },
  Mutation: {
    createOneDonation: async (_parent, args, { prisma }) => {
      args.select.amount = true
      if (!args.select.crowdfunding) args.select.crowdfunding = { select: {}}
      args.select.crowdfunding.select.earned = true
      args.select.crowdfunding.select.id = true
      const donation = await prisma.donation.create(args)

      const { crowdfunding: { id, earned }, amount } = donation

      await prisma.crowdfunding.update({ where: { id }, data: { earned: earned + amount } })

      return donation
    },
    updateOneDonation: (_parent, args, { prisma }) => {
      return prisma.donation.update(args)
    },
    deleteOneDonation: async (_parent, args, { prisma }) => {
      return prisma.donation.delete(args)
    },
    upsertOneDonation: async (_parent, args, { prisma }) => {
      return prisma.donation.upsert(args)
    },
    deleteManyDonation: async (_parent, args, { prisma }) => {
      return prisma.donation.deleteMany(args)
    },
    updateManyDonation: (_parent, args, { prisma }) => {
      return prisma.donation.updateMany(args)
    },
  },
}

module.exports = {
  Donation,
}
