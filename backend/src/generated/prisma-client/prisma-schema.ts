// Code generated by Prisma (prisma@1.27.1). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregatePictures {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateSetCard {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPictures(data: PicturesCreateInput!): Pictures!
  updatePictures(data: PicturesUpdateInput!, where: PicturesWhereUniqueInput!): Pictures
  updateManyPictureses(data: PicturesUpdateManyMutationInput!, where: PicturesWhereInput): BatchPayload!
  upsertPictures(where: PicturesWhereUniqueInput!, create: PicturesCreateInput!, update: PicturesUpdateInput!): Pictures!
  deletePictures(where: PicturesWhereUniqueInput!): Pictures
  deleteManyPictureses(where: PicturesWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createSetCard(data: SetCardCreateInput!): SetCard!
  updateSetCard(data: SetCardUpdateInput!, where: SetCardWhereUniqueInput!): SetCard
  updateManySetCards(data: SetCardUpdateManyMutationInput!, where: SetCardWhereInput): BatchPayload!
  upsertSetCard(where: SetCardWhereUniqueInput!, create: SetCardCreateInput!, update: SetCardUpdateInput!): SetCard!
  deleteSetCard(where: SetCardWhereUniqueInput!): SetCard
  deleteManySetCards(where: SetCardWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Permission {
  ADMIN
  USER
  ESCORT
  AGENT
}

type Pictures {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
  setCard: SetCard!
}

type PicturesConnection {
  pageInfo: PageInfo!
  edges: [PicturesEdge]!
  aggregate: AggregatePictures!
}

input PicturesCreateInput {
  url: String!
  setCard: SetCardCreateOneWithoutPicturesInput!
}

input PicturesCreateManyWithoutSetCardInput {
  create: [PicturesCreateWithoutSetCardInput!]
  connect: [PicturesWhereUniqueInput!]
}

input PicturesCreateWithoutSetCardInput {
  url: String!
}

type PicturesEdge {
  node: Pictures!
  cursor: String!
}

enum PicturesOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  url_ASC
  url_DESC
}

type PicturesPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  url: String!
}

input PicturesScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  AND: [PicturesScalarWhereInput!]
  OR: [PicturesScalarWhereInput!]
  NOT: [PicturesScalarWhereInput!]
}

type PicturesSubscriptionPayload {
  mutation: MutationType!
  node: Pictures
  updatedFields: [String!]
  previousValues: PicturesPreviousValues
}

input PicturesSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PicturesWhereInput
  AND: [PicturesSubscriptionWhereInput!]
  OR: [PicturesSubscriptionWhereInput!]
  NOT: [PicturesSubscriptionWhereInput!]
}

input PicturesUpdateInput {
  url: String
  setCard: SetCardUpdateOneRequiredWithoutPicturesInput
}

input PicturesUpdateManyDataInput {
  url: String
}

input PicturesUpdateManyMutationInput {
  url: String
}

input PicturesUpdateManyWithoutSetCardInput {
  create: [PicturesCreateWithoutSetCardInput!]
  delete: [PicturesWhereUniqueInput!]
  connect: [PicturesWhereUniqueInput!]
  set: [PicturesWhereUniqueInput!]
  disconnect: [PicturesWhereUniqueInput!]
  update: [PicturesUpdateWithWhereUniqueWithoutSetCardInput!]
  upsert: [PicturesUpsertWithWhereUniqueWithoutSetCardInput!]
  deleteMany: [PicturesScalarWhereInput!]
  updateMany: [PicturesUpdateManyWithWhereNestedInput!]
}

input PicturesUpdateManyWithWhereNestedInput {
  where: PicturesScalarWhereInput!
  data: PicturesUpdateManyDataInput!
}

input PicturesUpdateWithoutSetCardDataInput {
  url: String
}

input PicturesUpdateWithWhereUniqueWithoutSetCardInput {
  where: PicturesWhereUniqueInput!
  data: PicturesUpdateWithoutSetCardDataInput!
}

input PicturesUpsertWithWhereUniqueWithoutSetCardInput {
  where: PicturesWhereUniqueInput!
  update: PicturesUpdateWithoutSetCardDataInput!
  create: PicturesCreateWithoutSetCardInput!
}

input PicturesWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  setCard: SetCardWhereInput
  AND: [PicturesWhereInput!]
  OR: [PicturesWhereInput!]
  NOT: [PicturesWhereInput!]
}

input PicturesWhereUniqueInput {
  id: ID
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
  author: User!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  published: Boolean
  title: String!
  content: String
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  published: Boolean
  title: String!
  content: String
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  published_ASC
  published_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  published: Boolean!
  title: String!
  content: String
}

input PostScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  AND: [PostScalarWhereInput!]
  OR: [PostScalarWhereInput!]
  NOT: [PostScalarWhereInput!]
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  published: Boolean
  title: String
  content: String
  author: UserUpdateOneRequiredWithoutPostsInput
}

input PostUpdateManyDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyMutationInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  delete: [PostWhereUniqueInput!]
  connect: [PostWhereUniqueInput!]
  set: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [PostScalarWhereInput!]
  updateMany: [PostUpdateManyWithWhereNestedInput!]
}

input PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput!
  data: PostUpdateManyDataInput!
}

input PostUpdateWithoutAuthorDataInput {
  published: Boolean
  title: String
  content: String
}

input PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  published: Boolean
  published_not: Boolean
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  author: UserWhereInput
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  pictures(where: PicturesWhereUniqueInput!): Pictures
  pictureses(where: PicturesWhereInput, orderBy: PicturesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pictures]!
  picturesesConnection(where: PicturesWhereInput, orderBy: PicturesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PicturesConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  setCard(where: SetCardWhereUniqueInput!): SetCard
  setCards(where: SetCardWhereInput, orderBy: SetCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SetCard]!
  setCardsConnection(where: SetCardWhereInput, orderBy: SetCardOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SetCardConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type SetCard {
  id: ID!
  aliasName: String!
  pictures(where: PicturesWhereInput, orderBy: PicturesOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pictures!]
  age: Int!
  escort: User!
}

type SetCardConnection {
  pageInfo: PageInfo!
  edges: [SetCardEdge]!
  aggregate: AggregateSetCard!
}

input SetCardCreateInput {
  aliasName: String!
  pictures: PicturesCreateManyWithoutSetCardInput
  age: Int!
  escort: UserCreateOneWithoutProfileInput!
}

input SetCardCreateOneWithoutEscortInput {
  create: SetCardCreateWithoutEscortInput
  connect: SetCardWhereUniqueInput
}

input SetCardCreateOneWithoutPicturesInput {
  create: SetCardCreateWithoutPicturesInput
  connect: SetCardWhereUniqueInput
}

input SetCardCreateWithoutEscortInput {
  aliasName: String!
  pictures: PicturesCreateManyWithoutSetCardInput
  age: Int!
}

input SetCardCreateWithoutPicturesInput {
  aliasName: String!
  age: Int!
  escort: UserCreateOneWithoutProfileInput!
}

type SetCardEdge {
  node: SetCard!
  cursor: String!
}

enum SetCardOrderByInput {
  id_ASC
  id_DESC
  aliasName_ASC
  aliasName_DESC
  age_ASC
  age_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SetCardPreviousValues {
  id: ID!
  aliasName: String!
  age: Int!
}

type SetCardSubscriptionPayload {
  mutation: MutationType!
  node: SetCard
  updatedFields: [String!]
  previousValues: SetCardPreviousValues
}

input SetCardSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SetCardWhereInput
  AND: [SetCardSubscriptionWhereInput!]
  OR: [SetCardSubscriptionWhereInput!]
  NOT: [SetCardSubscriptionWhereInput!]
}

input SetCardUpdateInput {
  aliasName: String
  pictures: PicturesUpdateManyWithoutSetCardInput
  age: Int
  escort: UserUpdateOneRequiredWithoutProfileInput
}

input SetCardUpdateManyMutationInput {
  aliasName: String
  age: Int
}

input SetCardUpdateOneRequiredWithoutPicturesInput {
  create: SetCardCreateWithoutPicturesInput
  update: SetCardUpdateWithoutPicturesDataInput
  upsert: SetCardUpsertWithoutPicturesInput
  connect: SetCardWhereUniqueInput
}

input SetCardUpdateOneWithoutEscortInput {
  create: SetCardCreateWithoutEscortInput
  update: SetCardUpdateWithoutEscortDataInput
  upsert: SetCardUpsertWithoutEscortInput
  delete: Boolean
  disconnect: Boolean
  connect: SetCardWhereUniqueInput
}

input SetCardUpdateWithoutEscortDataInput {
  aliasName: String
  pictures: PicturesUpdateManyWithoutSetCardInput
  age: Int
}

input SetCardUpdateWithoutPicturesDataInput {
  aliasName: String
  age: Int
  escort: UserUpdateOneRequiredWithoutProfileInput
}

input SetCardUpsertWithoutEscortInput {
  update: SetCardUpdateWithoutEscortDataInput!
  create: SetCardCreateWithoutEscortInput!
}

input SetCardUpsertWithoutPicturesInput {
  update: SetCardUpdateWithoutPicturesDataInput!
  create: SetCardCreateWithoutPicturesInput!
}

input SetCardWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  aliasName: String
  aliasName_not: String
  aliasName_in: [String!]
  aliasName_not_in: [String!]
  aliasName_lt: String
  aliasName_lte: String
  aliasName_gt: String
  aliasName_gte: String
  aliasName_contains: String
  aliasName_not_contains: String
  aliasName_starts_with: String
  aliasName_not_starts_with: String
  aliasName_ends_with: String
  aliasName_not_ends_with: String
  pictures_every: PicturesWhereInput
  pictures_some: PicturesWhereInput
  pictures_none: PicturesWhereInput
  age: Int
  age_not: Int
  age_in: [Int!]
  age_not_in: [Int!]
  age_lt: Int
  age_lte: Int
  age_gt: Int
  age_gte: Int
  escort: UserWhereInput
  AND: [SetCardWhereInput!]
  OR: [SetCardWhereInput!]
  NOT: [SetCardWhereInput!]
}

input SetCardWhereUniqueInput {
  id: ID
  aliasName: String
}

type Subscription {
  pictures(where: PicturesSubscriptionWhereInput): PicturesSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  setCard(where: SetCardSubscriptionWhereInput): SetCardSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  nickname: String!
  password: String!
  name: String
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
  permissions: [Permission!]!
  profile: SetCard
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  nickname: String!
  password: String!
  name: String
  posts: PostCreateManyWithoutAuthorInput
  permissions: UserCreatepermissionsInput
  profile: SetCardCreateOneWithoutEscortInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutPostsInput {
  email: String!
  nickname: String!
  password: String!
  name: String
  permissions: UserCreatepermissionsInput
  profile: SetCardCreateOneWithoutEscortInput
}

input UserCreateWithoutProfileInput {
  email: String!
  nickname: String!
  password: String!
  name: String
  posts: PostCreateManyWithoutAuthorInput
  permissions: UserCreatepermissionsInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  nickname_ASC
  nickname_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  nickname: String!
  password: String!
  name: String
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  nickname: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  permissions: UserUpdatepermissionsInput
  profile: SetCardUpdateOneWithoutEscortInput
}

input UserUpdateManyMutationInput {
  email: String
  nickname: String
  password: String
  name: String
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  update: UserUpdateWithoutPostsDataInput
  upsert: UserUpsertWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutProfileInput {
  create: UserCreateWithoutProfileInput
  update: UserUpdateWithoutProfileDataInput
  upsert: UserUpsertWithoutProfileInput
  connect: UserWhereUniqueInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutPostsDataInput {
  email: String
  nickname: String
  password: String
  name: String
  permissions: UserUpdatepermissionsInput
  profile: SetCardUpdateOneWithoutEscortInput
}

input UserUpdateWithoutProfileDataInput {
  email: String
  nickname: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
  permissions: UserUpdatepermissionsInput
}

input UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserUpsertWithoutProfileInput {
  update: UserUpdateWithoutProfileDataInput!
  create: UserCreateWithoutProfileInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  nickname: String
  nickname_not: String
  nickname_in: [String!]
  nickname_not_in: [String!]
  nickname_lt: String
  nickname_lte: String
  nickname_gt: String
  nickname_gte: String
  nickname_contains: String
  nickname_not_contains: String
  nickname_starts_with: String
  nickname_not_starts_with: String
  nickname_ends_with: String
  nickname_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
  profile: SetCardWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
  nickname: String
}
`