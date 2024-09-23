
module.exports = {
  player_link: {
    type: String,
    required: true, 
  },
  youtube: {
    type: String,
    required: false, 
  },
  languages: {
    type: [String],
    default: ['telugu'], 
  },
  title: {
    type: String,
    required: true, 
  },
  description: {
    type: String, 
    required: false, 
  },
  genre: {
    type: [String],
    required: true,
  },
  images: {
    large: {
      type: String,
      required: false,
    },
    thumbnail: {
      type: String,
      required: false,
    }
  },
}

