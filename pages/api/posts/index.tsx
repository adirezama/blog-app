import { NextApiHandler } from "next";
import db from "../../../lib/dbConnect";
import { postValidationSchema, validateSchema } from "../../../lib/validator";
import { readFile } from "../../../lib/utils";
import Post from "../../../models/Post";
import cloudinary from "../../../lib/cloudinary";
import formidable from "formidable";

export const config = {
  api: { bodyParser: false },
};

const handler: NextApiHandler = async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET": {
      await db();
      res.json({ ok: true });
    }
    case "POST":
      createNewPost(req, res);
  }
};

const createNewPost: NextApiHandler = async (req, res) => {
  const { files, body } = await readFile(req);

  let tags = [];
  if (body.tags) tags = JSON.parse(body.tags as string);

  const error = validateSchema(postValidationSchema, { ...body, tags });
  if (error) return res.status(400).json({ error });

  const { title, content, slug, meta } = body;
  await db();

  const alreadyExist = await Post.findOne({ slug });
  if (alreadyExist) return res.status(400).json({ error: "Slug need to be unique" });

  const newPost = new Post({
    title,
    content,
    slug,
    meta,
    tags,
  });

  const thumbnail = files.thumbnail as formidable.File;
  if (thumbnail) {
    const { secure_url: url, public_id } = await cloudinary.uploader.upload(thumbnail.filepath, {
      folder: "sweet-wish",
    });
    newPost.thumbnail = { url, public_id };
  }
  await newPost.save();

  res.json({ post: newPost });
};

export default handler;
