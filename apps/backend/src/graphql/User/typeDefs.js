const { default: gql } = require('graphql-tag')

const User = gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String!
    surname: String!
    role: RoleEnum!
    purchases(
      where: ProductWhereInput
      orderBy: ProductOrderByWithRelationInput
      cursor: ProductWhereUniqueInput
      take: Int
      skip: Int
      distinct: ProductScalarFieldEnum
    ): [Product!]!
    donatedFundings(
      where: CrowdfundingWhereInput
      orderBy: CrowdfundingOrderByWithRelationInput
      cursor: CrowdfundingWhereUniqueInput
      take: Int
      skip: Int
      distinct: CrowdfundingScalarFieldEnum
    ): [Crowdfunding!]!
    createdAt: DateTime!
    _count: UserCountOutputType!
  }

  type Query {
    findUniqueUser(where: UserWhereUniqueInput!): User
    findFirstUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): User
    findManyUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): [User!]
    findManyUserCount(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
      distinct: [UserScalarFieldEnum]
    ): Int!
    aggregateUser(
      where: UserWhereInput
      orderBy: [UserOrderByWithRelationInput]
      cursor: UserWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateUser
  }

  type Mutation {
    createOneUser(data: UserCreateInput!): User!
    updateOneUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User!
    deleteOneUser(where: UserWhereUniqueInput!): User
    upsertOneUser(
      where: UserWhereUniqueInput!
      create: UserCreateInput!
      update: UserUpdateInput!
    ): User
    deleteManyUser(where: UserWhereInput): BatchPayload
    updateManyUser(
      data: UserUpdateManyMutationInput!
      where: UserWhereInput
    ): BatchPayload
  }
`

module.exports = {
  User,
}
