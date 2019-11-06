const { ApolloServer, gql } = require('apollo-server')

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets123',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Author {
    name: String
    books: [Book]
  }

  type Post {
    title: String
    body: String
    mediaUrls: [String]
  }

  type Query {
    books: [Book]
    getBooks: [Book]
    getAuthors: [Author]
    getPost: [Post]
  }

  type Mutation {
    addBook(title: String, author: String): Book
    # createPost(post: PostAndMediaInput): Post
  }

  input PostAndMediaInput {
    title: String
    body: String
    mediaUrls: [String]
  }
`

const resolvers = {
  Query: {
    books: () => books,
    getBooks: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
