// For more information about this file see https://dove.feathersjs.com/guides/cli/databases.html
import { MongoClient } from 'mongodb'

export const mongodb = (app) => {
  const connection = app.get('mongodb')
  let database;
  const lastIndexOfSlash = connection.lastIndexOf('/') + 1;
  if(connection.includes('?')) {
    const indexOfQuestionMark = connection.indexOf('?')
    database = connection.substring(lastIndexOfSlash, indexOfQuestionMark)
  } else{
    database = connection.substring(lastIndexOfSlash)
  }
  const mongoClient = MongoClient.connect(connection).then((client) => client.db(database))
  app.set('mongodbClient', mongoClient)
}