import mongoose, { Model, ObjectId, Schema, model, models } from "mongoose";
// title content slug tags thumbnail meta author date

interface PostModelSchema {
  title: string;
  slug: string;
  meta: string;
  content: string;
  tags: string[];
  thumbnail: { url: string; public_id: string };
  createdAt: Date;
  author: ObjectId;
}

const PostSechema = new Schema<PostModelSchema>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    meta: {
      type: String,
      required: true,
      trim: true,
    },
    tags: {
      type: [String],
    },
    thumbnail: {
      type: Object,
      url: String,
      public_id: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = models?.Post || model("Post", PostSechema);

export default Post as Model<PostModelSchema>;
