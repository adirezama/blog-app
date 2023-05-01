import { ChangeEventHandler, FC, useEffect, useState } from "react";
import slugify from "slugify";

export interface SeoResult {
  meta: string;
  slug: string;
  tags: string;
}

interface Props {
  initialValue?: SeoResult;
  title?: string;
  onChange(result: SeoResult): void;
}

const commonStyles =
  "bg-transparent w-full outline-none border-2 focus:border-color2 rounded transition text-color2 p-2";

const SeoForm: FC<Props> = ({ initialValue, title = "", onChange }): JSX.Element => {
  const [values, setValues] = useState({ meta: "", slug: "", tags: "" });
  const handleChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = ({ target }) => {
    let { name, value } = target;
    if (name === "meta") value = value.substring(0, 150);
    const newValues = { ...values, [name]: value };
    setValues(newValues);
    onChange(newValues);
  };
  useEffect(() => {
    const slug = slugify(title.toLowerCase());
    const newValues = { ...values, slug };
    setValues(newValues);
    onChange(newValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
  useEffect(() => {
    if (initialValue) setValues({ ...initialValue, slug: slugify(initialValue.slug) });
  }, [initialValue]);
  const { meta, slug, tags } = values;

  return (
    <div className="space-y-4">
      <h1 className="text-color2 text-xl font-semibold">SEO Section</h1>
      <Input
        name="slug"
        placeholder="slug-goes-here"
        value={slug}
        label="Slug:"
        onChange={handleChange}
      />
      <Input
        name="tags"
        placeholder="Popular, Viral"
        value={tags}
        label="Tags:"
        onChange={handleChange}
      />
      <div className="relative">
        <textarea
          className={`${commonStyles} text-lg h-20 resize-none`}
          placeholder="Meta description 150 characters"
          value={meta}
          name="meta"
          onChange={handleChange}></textarea>
        <p className="absolute bottom-3 right-3 text-color2 text-sm">{meta.length}/150</p>
      </div>
    </div>
  );
};

const Input: FC<{
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
  value?: string;
  name?: string;
  placeholder: string;
}> = ({ label, name, placeholder, value, onChange }) => {
  return (
    <label className="block relative">
      <span className="absolute top-1/2 -translate-y-1/2 text-sm font-semibold text-color2 pl-2">
        {label}
      </span>
      <input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        className={`${commonStyles} italic pl-10`}
        onChange={onChange}
      />
    </label>
  );
};

export default SeoForm;
