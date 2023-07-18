import { Realm, createRealmContext } from '@realm/react';

type CityType = {
  _id: Realm.BSON.ObjectId;

  url: string;

  createdAt: Date;
};

export class City extends Realm.Object {
  _id!: Realm.BSON.ObjectId;

  url!: string;

  createdAt!: Date;

  // the Task.generate() method creates Task objects with fields with default values
  static generate(url: string): CityType {
    return {
      _id: new Realm.BSON.ObjectId(),
      url,
      createdAt: new Date(),
    };
  }

  // To use a class as a Realm object type, define the object schema on the static property "schema".
  static schema = {
    name: 'City',
    properties: {
      _id: 'objectId',
      url: 'string',
      createdAt: 'date',
    },
    primaryKey: '_id',
  };
}

const config = {
  schema: [City],
};
export default createRealmContext(config);
