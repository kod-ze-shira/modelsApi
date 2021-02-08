const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const contactGoogle = new Schema({
    userEmailSignIn:{ type: String },
  ContactDetails:[{
      addresses:{type: String },
   resourceName: {type: String},
  etag:  {type: String},
  metadata: {
     type: Object
  },
  addresses: [
    {
     type: Object

    }
  ],
  ageRanges: [
    {
      type: Object
    }
  ],
  biographies: [
    {
     type: Object
    }
  ],
  birthdays: [
    {
      type:Object
    }
  ],
  
  calendarUrls: [
    {
      type:Object 
    }
  ],
  clientData: [
    {
    type: Object 
    }
  ],
  coverPhotos: [
    {
   type: Object 
    }
  ],
  emailAddresses: [
    {
    type: Object
    }
  ],
  events: [
    {
  type: Object
    }
  ],
  externalIds: [
    {
      type: Object
    }
  ],
  fileAses: [
    {
  type: Object
    }
  ],
  genders: [
    {
      type:Object 
    }
  ],
  imClients: [
    {
     type: Object 
    }
  ],
  interests: [
    {
      type:Object
    }
  ],
  locales: [
    {
  type: Object
    }
  ],
  locations: [
    {
      type: Object
    }
  ],
  memberships: [
    {
  type: Object
    }
  ],
  miscKeywords: [
    {
      type:Object
    }
  ],
  names: [
    {
  type: Object 
    }
  ],
  nicknames: [
    {
      type:Object 
    }
  ],
  occupations: [
    {
  type: Object
    }
  ],
  organizations: [
    {
     type: Object
    }
  ],
  phoneNumbers: [
    {
      type: Object
    }
  ],
  photos: [
    {
      type:Object
    }
  ],
  relations: [
    {
      type:Object
    }
  ],
  
  sipAddresses: [
    {
      type:Object 
    }
  ],
  skills: [
    {
     type: Object 
    }
  ],
 
  urls: [
    {
      type: Object
    }
  ],
  userDefined: [
    {
     type: Object 
    }
  ]

 }],
  user:{ type: mongoose.Schema.Types.ObjectId, ref:'User'}
 });



module.exports = mongoose.model("ContactGoogle", contactGoogle)